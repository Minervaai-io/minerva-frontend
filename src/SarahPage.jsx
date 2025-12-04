import React, { useState, useRef, useEffect } from "react";
import { RetellWebClient } from "retell-client-js-sdk";
import { PhoneCall, CalendarCheck, Shield, MessageSquare } from "lucide-react";

export default function SarahPage() {
  const [showDemo, setShowDemo] = useState(false);
  const [busy, setBusy] = useState(false);
  const [inCall, setInCall] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [err, setErr] = useState("");

  const modalRef = useRef(null);
  const clientRef = useRef(null);
  const timerRef = useRef(null);

  // 🔹 Updated: point to Render backend by default
  const backendBase =
    import.meta?.env?.VITE_BACKEND_BASE ||
    "https://minervaai-backend.onrender.com";

  const formatTime = (s) =>
    new Date(s * 1000).toISOString().slice(14, 19);

  useEffect(() => {
    if (!showDemo || !modalRef.current) return;
    const el = modalRef.current;
    const focusable = el.querySelectorAll(
      'a,button,input,textarea,select,details,[tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        if (!busy) setShowDemo(false);
      }
      if (e.key !== "Tab" || focusable.length === 0) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    el.addEventListener("keydown", onKeyDown);
    return () => el.removeEventListener("keydown", onKeyDown);
  }, [showDemo, busy]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      try {
        clientRef.current?.stopCall?.();
      } catch {}
    };
  }, []);

  const startDemo = async () => {
    setErr("");
    setBusy(true);
    setElapsed(0);
    try {
      const r = await fetch(`${backendBase}/api/start-sarah-call`, {
        method: "POST",
      });
      const data = await r.json();
      if (!r.ok || !data?.access_token)
        throw new Error(data?.error || "No token");

      const client = new RetellWebClient();
      clientRef.current = client;

      await client.startCall({ accessToken: data.access_token });
      setInCall(true);
      timerRef.current = setInterval(
        () => setElapsed((t) => t + 1),
        1000
      );

      client.on("call_ended", () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = null;
        setInCall(false);
        setBusy(false);
        setShowDemo(false);
      });
    } catch (e) {
      console.error("Error starting Sarah demo:", e);
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
      <header className="px-6 py-5 border-b bg-white sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/minerva-logo.png"
              alt="Minerva"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="text-lg font-bold">
                Minerva — AI Agents for Real Estate
              </div>
              <div className="text-xs text-gray-500">
                From real estate, for real estate.
              </div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/agents/mark" className="hover:text-indigo-700">
              Mark
            </a>
            <span className="font-semibold text-indigo-700">Sarah</span>
            <a href="/agents/david" className="hover:text-indigo-700">
              David
            </a>
            <a href="/" className="hover:text-indigo-700">
              Home
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-transparent pointer-events-none -z-10" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Sarah —{" "}
              <span className="text-indigo-700">Inbound Concierge</span>
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Sarah answers calls from your website, Instagram, and Google
              Business Profile. She handles FAQs and books tours 24/7.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => setShowDemo(true)}
                className="px-6 py-3 rounded-lg bg-indigo-700 text-white font-semibold hover:bg-indigo-800"
              >
                Open Demo
              </button>
              <a
                href="/faq"
                className="px-6 py-3 rounded-lg bg-white border font-semibold hover:bg-gray-50"
              >
                Common Questions
              </a>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
              <div className="bg-white border rounded-xl p-4 flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-indigo-700" />
                Inbound capture
              </div>
              <div className="bg-white border rounded-xl p-4 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-indigo-700" />
                FAQ routing
              </div>
              <div className="bg-white border rounded-xl p-4 flex items-center gap-2">
                <CalendarCheck className="w-4 h-4 text-indigo-700" />
                Tour booking
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/sarah.jpg"
              alt="Sarah"
              className="w-full max-w-md mx-auto rounded-2xl shadow-xl border-4 border-indigo-100"
            />
            <div className="absolute -z-10 inset-0 blur-3xl bg-indigo-200/40 rounded-[3rem] translate-x-6 translate-y-6" />
          </div>
        </div>
      </section>

      {/* 🔹 New: "What Sarah Does" (same layout as Mark's cards) */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold">What Sarah Does</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: PhoneCall,
              title: "Answers inbound calls",
              desc: "Picks up calls from your website, Instagram, and Google Business Profile instantly.",
            },
            {
              icon: MessageSquare,
              title: "Handles FAQs & routing",
              desc: "Answers common questions and routes complex cases to the right human contact.",
            },
            {
              icon: CalendarCheck,
              title: "Books tours & callbacks",
              desc: "Schedules tours or callbacks directly into your calendars with clean notes.",
            },
          ].map((Item, i) => (
            <div
              key={i}
              className="bg-white border rounded-2xl p-6 shadow-sm"
            >
              <Item.icon className="w-6 h-6 text-indigo-700" />
              <div className="mt-3 font-semibold">{Item.title}</div>
              <div className="text-gray-600 text-sm mt-1">
                {Item.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 New: trust strip (same as Mark/David) */}
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
              Talk to Sarah (Demo)
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

      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-600 grid md:grid-cols-4 gap-8">
          <div>
            <strong className="block text-gray-900">
              Minerva — AI Agents for Real Estate
            </strong>
            <div className="mt-2">
              © {new Date().getFullYear()}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Agents</h4>
            <ul className="space-y-2">
              <li>
                <a href="/agents/mark" className="hover:underline">
                  Mark
                </a>
              </li>
              <li>
                <span className="text-indigo-700">Sarah</span>
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
