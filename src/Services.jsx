import React from "react";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header (kept simple to match other pages) */}
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/minerva-logo.png" alt="Minerva" className="w-14 h-14 rounded-full" />
          <div>
            <h1 className="text-xl font-bold">Minerva — AI Agents for Real Estate</h1>
            <p className="text-sm text-gray-500">From real estate, for real estate.</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/" className="hover:text-indigo-700">Home</a>
          <a href="/who-we-are" className="hover:text-indigo-700">Who We Are</a>
          <span className="font-semibold text-indigo-700">Services</span>
          <a href="/why-choose-us" className="hover:text-indigo-700">Why Choose Us</a>
          <a href="/faq" className="hover:text-indigo-700">FAQ</a>
          <a href="/contact" className="hover:text-indigo-700">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-white border-y">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight">Done-for-you AI services that book viewings</h2>
          <p className="mt-4 text-lg text-gray-600">
            We implement, train, and maintain voice/chat agents that convert ad clicks into scheduled tours—without adding headcount.
          </p>
        </div>
      </section>

      {/* What we deliver */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-semibold text-gray-900">Core services</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h4 className="font-semibold text-indigo-700">Instant Lead Callback (Mark)</h4>
            <p className="text-gray-600 mt-2">
              Connect to Meta/Google ad forms. Mark auto-calls new leads in seconds, qualifies, and books virtual or on-site tours.
            </p>
            <a href="/agents/mark" className="inline-block mt-3 text-indigo-700 hover:underline">Meet Mark →</a>
          </div>
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h4 className="font-semibold text-indigo-700">Inbound Call Handling (Sarah)</h4>
            <p className="text-gray-600 mt-2">
              Answer website, Instagram, and Google Business calls 24/7. FAQs, availability, directions, and booking.
            </p>
            <a href="/agents/sarah" className="inline-block mt-3 text-indigo-700 hover:underline">Meet Sarah →</a>
          </div>
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h4 className="font-semibold text-indigo-700">Lead Nurture & Re-engagement (David)</h4>
            <p className="text-gray-600 mt-2">
              Follow up on cold/older leads, share new listings, and revive interest with timely calls/messages.
            </p>
            <a href="/agents/david" className="inline-block mt-3 text-indigo-700 hover:underline">Meet David →</a>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h3 className="text-2xl font-semibold">Plug-and-play integrations</h3>
          <p className="text-gray-600 mt-2">We connect to your existing tools—no heavy lift from your team.</p>
          <div className="grid md:grid-cols-4 gap-4 mt-6">
            <div className="p-4 rounded-xl border bg-white text-sm">Meta Lead Ads</div>
            <div className="p-4 rounded-xl border bg-white text-sm">Google Ads / Forms</div>
            <div className="p-4 rounded-xl border bg-white text-sm">Calendars (Google, Calendly, Wix)</div>
            <div className="p-4 rounded-xl border bg-white text-sm">CRMs (HubSpot, Pipedrive, Sheets)</div>
            <div className="p-4 rounded-xl border bg-white text-sm">Webhooks / Zapier / Make</div>
            <div className="p-4 rounded-xl border bg-white text-sm">WhatsApp / SMS handoff</div>
            <div className="p-4 rounded-xl border bg-white text-sm">Multi-language voices</div>
            <div className="p-4 rounded-xl border bg-white text-sm">Call recording & transcripts</div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-semibold">How implementation works</h3>
        <div className="grid md:grid-cols-4 gap-6 mt-6">
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <div className="text-indigo-700 font-bold">1. Discovery</div>
            <p className="text-gray-600 mt-2">We map your listings, team calendars, FAQs, and lead sources.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <div className="text-indigo-700 font-bold">2. Build</div>
            <p className="text-gray-600 mt-2">We configure agents, prompts, integrations, and booking rules.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <div className="text-indigo-700 font-bold">3. Test</div>
            <p className="text-gray-600 mt-2">We run sandbox calls and refine answers for your brand/market.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <div className="text-indigo-700 font-bold">4. Launch</div>
            <p className="text-gray-600 mt-2">Go live with real traffic. We monitor, iterate, and scale.</p>
          </div>
        </div>
      </section>

     {/* Packages / Pricing */}
<section className="bg-white border-y">
  <div className="max-w-6xl mx-auto px-6 py-16">
    <h3 className="text-2xl font-semibold text-gray-900">Packages</h3>
    <p className="text-gray-600 mt-2">
      Transparent plans for 1–4+ agents. Contact us for add-ons and volume.
    </p>

    <div className="grid md:grid-cols-4 gap-6 mt-6">
      {/* Single Agent */}
      <div className="rounded-2xl border p-6 bg-white shadow-sm">
        <h4 className="font-semibold text-indigo-700">Single Agent</h4>
        <div className="mt-2 text-3xl font-extrabold">$3,000</div>
        <div className="text-sm text-gray-500">Prove ROI fast with one agent.</div>
        <ul className="mt-4 space-y-2 text-gray-700 text-sm">
          <li>• 1 AI agent (e.g., Mark)</li>
          <li>• Lead capture + bookings</li>
          <li>• 1 calendar + CRM hookup</li>
          <li>• Call recording & transcripts</li>
          <li>• Email support</li>
        </ul>
        <a href="/contact" className="inline-block mt-5 px-5 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
          Get started
        </a>
      </div>

      {/* Two Agents */}
      <div className="rounded-2xl border p-6 bg-white shadow-sm">
        <h4 className="font-semibold text-indigo-700">Two Agents</h4>
        <div className="mt-2 text-3xl font-extrabold">$5,000</div>
        <div className="text-sm text-gray-500">Outreach + inbound covered.</div>
        <ul className="mt-4 space-y-2 text-gray-700 text-sm">
          <li>• 2 agents (e.g., Mark + Sarah)</li>
          <li>• Meta/Google lead forms + inbound phone</li>
          <li>• Multi-calendar + CRM</li>
          <li>• WhatsApp/SMS handoff</li>
          <li>• Priority support</li>
        </ul>
        <a href="/contact" className="inline-block mt-5 px-5 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
          Start two-agent plan
        </a>
      </div>

      {/* Three Agents (highlight) */}
      <div className="rounded-2xl border-2 border-indigo-600 p-6 bg-white shadow-md relative">
        <span className="absolute -top-3 right-4 text-xs px-2 py-1 rounded-full bg-indigo-100 text-indigo-700">Best value</span>
        <h4 className="font-semibold text-indigo-700">Three Agents</h4>
        <div className="mt-2 text-3xl font-extrabold">$6,000</div>
        <div className="text-sm text-gray-500">Full funnel: outreach • inbound • nurture.</div>
        <ul className="mt-4 space-y-2 text-gray-700 text-sm">
          <li>• 3 agents (Mark + Sarah + David)</li>
          <li>• Calendars • CRM • webhooks</li>
          <li>• Scripts tuned to your market</li>
          <li>• Call logging & transcripts</li>
          <li>• Priority support & tuning</li>
        </ul>
        <a href="/contact" className="inline-block mt-5 px-5 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
          Choose three-agent plan
        </a>
      </div>

      {/* Custom (4+ Agents) */}
      <div className="rounded-2xl border p-6 bg-white shadow-sm">
        <h4 className="font-semibold text-indigo-700">Custom (4+ Agents)</h4>
        <div className="mt-2 text-3xl font-extrabold">$7,000+</div>
        <div className="text-sm text-gray-500">Scale across teams & developments.</div>
        <ul className="mt-4 space-y-2 text-gray-700 text-sm">
          <li>• 4+ agents & custom routing</li>
          <li>• Advanced integrations & analytics</li>
          <li>• Multi-language voices</li>
          <li>• Security review / data residency</li>
          <li>• Dedicated CSM</li>
        </ul>
        <a href="/contact" className="inline-block mt-5 px-5 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
          Design my stack
        </a>
      </div>
    </div>

    <p className="text-xs text-gray-500 mt-4">
      Prices are package totals. Usage-based carrier/LLM minutes and optional add-ons (extra agents, extra languages,
      WhatsApp handoff, advanced analytics) available on request.
    </p>
  </div>
</section>

      {/* FAQs teaser */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-semibold">Common questions</h3>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <div className="font-semibold">How fast can we go live?</div>
            <p className="text-gray-600 mt-2">Typical launches are 5–10 business days depending on integrations and listings.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <div className="font-semibold">Do you support multiple languages?</div>
            <p className="text-gray-600 mt-2">Yes—agents can handle multiple languages/accents. We’ll confirm locales at kickoff.</p>
          </div>
        </div>
        <a href="/faq" className="inline-block mt-6 text-indigo-700 hover:underline">See all FAQs →</a>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center text-white">
          <h3 className="text-3xl font-bold">Let’s plug Minerva into your pipeline</h3>
          <p className="mt-2 text-indigo-100">We’ll connect your ads, calendars, and CRM, then prove it with a live demo.</p>
          <a
            href="/contact"
            className="inline-block mt-6 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50"
          >
            Book a strategy call
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-600 grid md:grid-cols-4 gap-8">
          <div>
            <strong className="block text-gray-900">Minerva — AI Agents for Real Estate</strong>
            <div className="mt-2">© {new Date().getFullYear()}</div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
            <ul className="space-y-2">
              <li><a href="/who-we-are" className="hover:underline">Who We Are</a></li>
              <li><span className="text-indigo-700">Services</span></li>
              <li><a href="/why-choose-us" className="hover:underline">Why Choose Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Support</h4>
            <ul className="space-y-2">
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="/terms" className="hover:underline">Terms & Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Get in Touch</h4>
            <p>Email: contact@minerva-ai.io</p>
            <p className="mt-2">LinkedIn · Instagram</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
