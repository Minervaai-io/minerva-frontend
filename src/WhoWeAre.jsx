import React, { useState } from "react";

export default function WhoWeAre() {
  const [photoFailed, setPhotoFailed] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/minerva-logo.png" alt="Minerva" className="w-14 h-14 rounded-full" />
          <div>
            <h1 className="text-xl font-bold">Minerva — Phuket Real Estate Lead Engine</h1>
            <p className="text-sm text-gray-500">Built in Phuket. Paid only when you close.</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/" className="hover:text-indigo-700">Home</a>
          <span className="font-semibold text-indigo-700">Who We Are</span>
          <a href="/services" className="hover:text-indigo-700">Services</a>
          <a href="/why-choose-us" className="hover:text-indigo-700">Why Choose Us</a>
          <a href="/faq" className="hover:text-indigo-700">FAQ</a>
          <a href="/contact" className="hover:text-indigo-700">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-white border-y">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight">I built Minerva so Phuket developers stop losing buyers.</h2>
          <p className="mt-4 text-lg text-gray-600">
            One founder. One market. One promise: if we don't close deals for you, neither of us makes money.
          </p>
        </div>
      </section>

      {/* Founder bio block (replaces former video placeholder) */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white border rounded-2xl shadow-sm p-8 md:p-10">
          <div className="flex items-center gap-4 mb-6">
            {!photoFailed ? (
              <img
                src="/tarek.jpg"
                alt="Tarek Sankari"
                className="w-16 h-16 rounded-full object-cover border-2 border-indigo-100"
                onError={() => setPhotoFailed(true)}
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold">
                T
              </div>
            )}
            <div>
              <h3 className="text-2xl font-semibold">Tarek Sankari</h3>
              <p className="text-sm text-gray-500">Founder, Minerva — based in Phuket</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            I'm Tarek. After years running paid acquisition for property developers, I watched the same pattern over and over:
            qualified foreign buyers would fill out a form, and then go cold because nobody called them back in time —
            sometimes for hours, sometimes for days. Most of those buyers ended up closing somewhere else.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            So I moved to Phuket and built the stack I wished my clients had: Meta and Google ads, multilingual AI qualification,
            WhatsApp and voice nurture, a CRM that actually fires, and warm handoffs straight to the closer's calendar.
            And I run it as a partnership — Minerva pays the ad spend, takes 30% of the commission on closed deals, and earns
            nothing otherwise.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            If you're a Phuket agency or developer with closers but no consistent inbound, that's what I'm here for.
          </p>
        </div>
      </section>

      {/* What Minerva replaces */}
      <section className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold">What we replace</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Most agencies and developers in Phuket cobble together a marketing person, an outsourced media buyer,
              an admin who manages the CRM, and a junior who chases follow-ups. That stack is expensive, slow, and
              loses leads after hours and on weekends — exactly when international buyers in different time zones are browsing.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Minerva replaces all of it. You keep your closers. We bring the qualified, viewing-ready meetings.
            </p>
          </div>
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
            <h4 className="text-lg font-semibold text-indigo-700">The full stack we run for you</h4>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• <strong>Paid acquisition:</strong> Meta + Google ads targeting buyers in Russia, Europe, China, MENA</li>
              <li>• <strong>AI qualification:</strong> voice + WhatsApp, multilingual, 24/7, in under 60 seconds</li>
              <li>• <strong>Nurture sequences:</strong> WhatsApp, SMS, email, AI voice — until they're ready to view</li>
              <li>• <strong>CRM:</strong> we own the pipeline; you see the dashboard</li>
              <li>• <strong>Viewing booking:</strong> straight into your closer's calendar</li>
              <li>• <strong>Compensation:</strong> 30% on closed deals only. Nothing if we don't deliver.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h3 className="text-2xl font-semibold mb-6">How we work</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border shadow-sm">
              <h4 className="font-semibold">Aligned incentives</h4>
              <p className="text-gray-600 mt-2">We make money only when you make money. Period.</p>
            </div>
            <div className="p-6 rounded-xl border shadow-sm">
              <h4 className="font-semibold">One market</h4>
              <p className="text-gray-600 mt-2">Phuket only. No Bangkok, no Bali, no global. Local focus, local knowledge.</p>
            </div>
            <div className="p-6 rounded-xl border shadow-sm">
              <h4 className="font-semibold">Hands-off for you</h4>
              <p className="text-gray-600 mt-2">We run the entire stack. You walk into pre-qualified viewings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center text-white">
          <h3 className="text-3xl font-bold">Looking for founding partners.</h3>
          <p className="mt-2 text-indigo-100">A small number of Phuket agencies and developers, at preferred commission terms.</p>
          <a
            href="/contact"
            className="inline-block mt-6 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50"
          >
            Apply for a partner slot
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-600 grid md:grid-cols-4 gap-8">
          <div>
            <strong className="block text-gray-900">Minerva — Phuket Real Estate Lead Engine</strong>
            <div className="mt-2">© {new Date().getFullYear()}</div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
            <ul className="space-y-2">
              <li><span className="text-indigo-700">Who We Are</span></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
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
