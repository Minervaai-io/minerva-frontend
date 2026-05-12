// Meta Conversions API bridge for Minerva Lead Engine.
// Receives a server-side Lead event from GHL workflow, hashes PII, forwards to Meta.
// Pixel-deduped against the browser-side fbq('track','Lead',{},{eventID}) via event_id.
//
// Env vars (set in Netlify → Site settings → Environment variables):
//   META_CAPI_TOKEN     CAPI access token from Events Manager → Settings → Conversions API
//   META_PIXEL_ID       905499212503124
//   CAPI_SHARED_SECRET  random 32+ char string shared with GHL custom value
//
// Public path: /api/capi-lead (configured below)

import crypto from 'node:crypto';

const GRAPH_VERSION = 'v21.0';

const sha256 = (s) => crypto.createHash('sha256').update(s).digest('hex');

const normEmail   = (e) => e ? sha256(String(e).trim().toLowerCase()) : undefined;
const normPhone   = (p) => p ? sha256(String(p).replace(/\D/g, '')) : undefined;
const normName    = (n) => n ? sha256(String(n).trim().toLowerCase().replace(/[^\p{L}\p{N}]/gu, '')) : undefined;
const normCity    = (c) => c ? sha256(String(c).trim().toLowerCase().replace(/\s+/g, '')) : undefined;
const normCountry = (c) => c ? sha256(String(c).trim().toLowerCase().slice(0, 2)) : undefined;

export default async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const SHARED_SECRET = process.env.CAPI_SHARED_SECRET;
  const CAPI_TOKEN    = process.env.META_CAPI_TOKEN;
  const PIXEL_ID      = process.env.META_PIXEL_ID || '905499212503124';

  if (!SHARED_SECRET || !CAPI_TOKEN) {
    return new Response('Server misconfigured', { status: 500 });
  }

  if (req.headers.get('x-capi-secret') !== SHARED_SECRET) {
    return new Response('Unauthorized', { status: 401 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response('Invalid JSON', { status: 400 });
  }

  const {
    event_id, event_time, event_source_url,
    email, phone, name, first_name, last_name,
    city, country,
    fbp, fbc, ip, user_agent,
    property_type, budget,
    test_event_code,
  } = body;

  let fn = first_name, ln = last_name;
  if (!fn && name) {
    const parts = String(name).trim().split(/\s+/);
    fn = parts[0];
    ln = parts.slice(1).join(' ') || undefined;
  }

  const user_data = {};
  const setIf = (k, v) => { if (v !== undefined && v !== null && v !== '') user_data[k] = v; };
  setIf('em',                normEmail(email));
  setIf('ph',                normPhone(phone));
  setIf('fn',                normName(fn));
  setIf('ln',                normName(ln));
  setIf('ct',                normCity(city));
  setIf('country',           normCountry(country));
  setIf('fbp',               fbp ? String(fbp) : undefined);
  setIf('fbc',               fbc ? String(fbc) : undefined);
  setIf('client_ip_address', ip ? String(ip) : undefined);
  setIf('client_user_agent', user_agent ? String(user_agent) : undefined);

  if (Object.keys(user_data).length === 0) {
    return new Response('No matchable user_data', { status: 400 });
  }

  // event_time: prefer client-supplied, accept seconds or ms, clamp within 7d (Meta's limit)
  let ts;
  if (event_time) {
    const n = Number(event_time);
    ts = String(event_time).length > 10 ? Math.floor(n / 1000) : Math.floor(n);
  } else {
    ts = Math.floor(Date.now() / 1000);
  }
  const now = Math.floor(Date.now() / 1000);
  if (ts > now + 60 || ts < now - 7 * 24 * 3600) ts = now;

  const payload = {
    data: [{
      event_name: 'Lead',
      event_time: ts,
      event_id: event_id || crypto.randomUUID(),
      action_source: 'website',
      event_source_url: event_source_url || 'https://www.minerva-ai.io/phuket/',
      user_data,
      custom_data: {
        currency: 'USD',
        value: 0,
        ...(property_type ? { content_name: String(property_type) } : {}),
        ...(budget        ? { content_category: String(budget) } : {}),
      },
    }],
  };

  if (test_event_code) payload.test_event_code = test_event_code;

  const url = `https://graph.facebook.com/${GRAPH_VERSION}/${PIXEL_ID}/events?access_token=${encodeURIComponent(CAPI_TOKEN)}`;

  let metaRes, metaBody = {};
  try {
    metaRes = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    metaBody = await metaRes.json().catch(() => ({}));
  } catch (err) {
    console.log(JSON.stringify({ fn: 'capi-lead', err: String(err) }));
    return new Response(JSON.stringify({ ok: false, err: 'fetch_failed' }), { status: 502 });
  }

  console.log(JSON.stringify({
    fn: 'capi-lead',
    status: metaRes.status,
    event_id: payload.data[0].event_id,
    fbtrace_id: metaBody.fbtrace_id,
    events_received: metaBody.events_received,
    error: metaBody.error,
  }));

  return new Response(JSON.stringify({ ok: metaRes.ok, meta: metaBody }), {
    status: metaRes.ok ? 200 : 502,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const config = { path: '/api/capi-lead' };
