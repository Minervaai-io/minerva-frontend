import React, { useState, useRef, useEffect } from "react";
import { RetellWebClient } from "retell-client-js-sdk";
import { PhoneCall, Clock, CalendarCheck, Shield, CheckCircle } from "lucide-react";

export default function MarkPage() {
  const [showDemo, setShowDemo] = useState(false);
  const [busy, setBusy] = useState(false);     // connecting or in-call
  const [inCall, setInCall] = useState(false); // true while live
  const [elapsed, setElapsed] = useState(0);   // seconds
  const [err, setErr] = useState("");

  const modalRef = useRef(null);
  const clientRef = useRef(null);
  const timerRef = useRef(null);

  // 🔹 Updated: default to Render backend instead of localhost
  const backendBase =
    import.meta?.env?.VITE_BACKEND_BASE ||
    "https://minervaai-backend.onrender.com";

  // a11y focus trap for modal
  useEffect(() => {
    if (!showDemo || !modalRef.current) return;
    const el = modalRef.current;
    const focusable = el.querySelectorAll(
      'a,button,input,textarea,select,details,[tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    first?.focus();
    const onKeyDown = (e) => {
      if (e.key === "Escape") { e.preventDefault(); if (!busy) setShowDemo(false); }
      if (e.key !== "Tab" || focusable.length === 0) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    };
    el.addEventListener("keydown", onKeyDown);
    return () => el.removeEventListener("keydown", onKeyDown);
  }, [showDemo, busy]);

  // cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      try { clientRef.current?.stopCall?.(); } catch {}
    };
  }, []);

  const formatTime = (s) => new Date(s * 1000).toISOString().slice(14, 19);

  const startDemo = async () => {
    setErr(""); setBusy(true); setElapsed(0);
    try {
      const r = await fetch(`${backendBase}/api/start-mark-call`, { method: "POST" });
      const data = await r.json();
      if (!r.ok || !data?.access_token) throw new Error(data?.error || "No token");
      const client = new RetellWebClient();
      clientRef.current = client;

      await client.startCall({ accessToken: data.access_token });
      setInCall(true);

      // start timer
      timerRef.current = setInterval(() => setElapsed((t) => t + 1), 1000);

      client.on("call_ended", () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = null;
        setInCall(false);
        setBusy(false);
        setShowDemo(false);
      });
    } catch (e) {
      console.error("Error starting Mark demo:", e);
      setErr("Could not start demo. Please try again.");
      setBusy(false);
      setInCall(false);
    }
  };

  const endCall = async () => {
    try {
      await (
        clientRef.current?.stopCall?.() ||
        clientRef.current?.endCall?.() ||
        clientRef.current?.disconnect?.()
      );
    } catch {}
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
    setInCall(false);
    setBusy(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="px-6 py-5 border-b bg-white sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/minerva-logo.png" alt="Minerva" className="w-12 h-12 rounded-full" />
            <div>
              <div className="text-lg font-bold">Minerva — AI Agents for Real Estate</div>
              <div className="text-xs text-gray-500">From real estate, for real estate.</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <span className="font-semibold text-indigo-700">Mark</span>
            <a href="/agents/sarah" className="hover:text-indigo-700">Sarah</a>
            <a href="/agents/david" className="hover:text-indigo-700">David</a>
            <a href="/" className="hover:text-indigo-700">Home</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-transparent pointer-events-none -z-10" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Mark — <span className="text-indigo-700">Instant Lead Callback</span>
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Mark auto-calls new ad/form leads in seconds, qualifies them, and books virtual or in-person tours.
              Built for speed-to-lead and show-up rate.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => setShowDemo(true)}
                className="px-6 py-3 rounded-lg bg-indigo-700 text-white font-semibold hover:bg-indigo-800"
              >
                Open Demo
              </button>
              <a href="/services" className="px-6 py-3 rounded-lg bg-white border font-semibold hover:bg-gray-50">
                See How It Works
              </a>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
              <div className="bg-white border rounded-xl p-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-indigo-700" /><span>Seconds to dial</span>
              </div>
              <div className="bg-white border rounded-xl p-4 flex items-center gap-2">
                <CalendarCheck className="w-4 h-4 text-indigo-700" /><span>Books tours</span>
              </div>
              <div className="bg-white border rounded-xl p-4 flex items-center gap-2">
                <Shield className="w-4 h-4 text-indigo-700" /><span>Scripted & logged</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/mark-photo.jpg"
              alt="Mark"
              className="w-full max-w-md mx-auto rounded-2xl shadow-xl border-4 border-indigo-100"
            />
            <div className="absolute -z-10 inset-0 blur-3xl bg-indigo-200/40 rounded-[3rem] translate-x-6 translate-y-6" />
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold">What Mark Does</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: PhoneCall,
              title: "Instant callbacks",
              desc: "Connects to Meta/Google lead forms—dials within seconds.",
            },
            {
              icon: CheckCircle,
              title: "Light qualification",
              desc: "Bedrooms, budget, move-in date, must-haves captured.",
            },
            {
              icon: CalendarCheck,
              title: "Tour scheduling",
              desc: "Confirms virtual or in-person tours on your calendars.",
            },
          ].map((F, i) => (
            <div key={i} className="bg-white border rounded-2xl p-6 shadow-sm">
              <F.icon className="w-6 h-6 text-indigo-700" />
              <div className="mt-3 font-semibold">{F.title}</div>
              <div className="text-gray-600 text-sm mt-1">{F.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6 text-sm">
          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
            24/7 coverage, multi-language voices
          </div>
          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
            CRM + Calendar + Webhooks ready
          </div>
          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
            Compliance-friendly & configurable
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      {showDemo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget && !busy) setShowDemo(false);
          }}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-title"
            className="relative bg-white rounded-2xl w-full max-w-2xl shadow-2xl p-6"
          >
            <button
              onClick={() => !busy && setShowDemo(false)}
              disabled={busy}
              aria-label="Close demo"
              className="absolute right-3 top-3 px-3 py-1 text-sm rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              Close
            </button>

            <h3 id="demo-title" className="text-xl font-semibold mb-2">
              Talk to Mark (Demo)
            </h3>
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
              <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1">
                ⏱ {formatTime(elapsed)}
              </span>
              {!inCall && busy && (
                <span>Connecting… allow microphone access</span>
              )}
              {inCall && <span className="text-green-700">Live</span>}
            </div>

            <div className="flex gap-3">
              <button
                onClick={startDemo}
                disabled={busy || inCall}
                className="px-6 py-3 bg-indigo-700 text-white rounded-lg shadow hover:bg-indigo-800 disabled:opacity-60"
              >
                {busy && !inCall ? "Connecting…" : "Start Demo Call"}
              </button>
              <button
                onClick={endCall}
                disabled={!inCall}
                className="px-6 py-3 bg-white border rounded-lg shadow hover:bg-gray-50 disabled:opacity-60"
              >
                End Call
              </button>
            </div>

            {err && <p className="mt-3 text-red-600">{err}</p>}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-600 grid md:grid-cols-4 gap-8">
          <div>
            <strong className="block text-gray-900">
              Minerva — AI Agents for Real Estate
            </strong>
            <div className="mt-2">© {new Date().getFullYear()}</div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Agents</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-indigo-700">Mark</span>
              </li>
              <li>
                <a href="/agents/sarah" className="hover:underline">
                  Sarah
                </a>
              </li>
              <li>
                <a href="/agents/david" className="hover:underline">
                  David
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="/why-choose-us" className="hover:underline">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="/who-we-are" className="hover:underline">
                  Who We Are
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p>contact@minerva-ai.io</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
