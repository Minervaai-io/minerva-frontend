import React, { useState } from "react";

const QA = [
  {
    q: "How fast can we launch?",
    a: "Typically 5–10 business days depending on integrations (ads, calendars, CRM) and the volume of FAQs to train.",
  },
  {
    q: "Which languages and accents do you support?",
    a: "Multiple languages are supported. (e.g Russian, French, Germany and many more) and can deploy additional voices per market.",
  },
  {
    q: "Can you book on our calendars?",
    a: "Yes. We integrate with Google Calendar, Calendly, Wix Bookings, and others via webhooks/Zapier/Make.",
  },
  {
    q: "Do you integrate with our CRM?",
    a: "We can push structured notes and outcomes to HubSpot, Pipedrive, or Google Sheets, and support custom webhooks.",
  },
  {
    q: "What about compliance and privacy?",
    a: "We provide call recording/transcripts optionally, honor local recording notices, and can disable logging per request.",
  },
  {
    q: "What KPIs do you optimize for?",
    a: "Speed-to-lead, qualified conversations, and viewings booked. We report weekly on contact rate and booking rate.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
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
          <a href="/services" className="hover:text-indigo-700">Services</a>
          <a href="/why-choose-us" className="hover:text-indigo-700">Why Choose Us</a>
          <span className="font-semibold text-indigo-700">FAQ</span>
          <a href="/contact" className="hover:text-indigo-700">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-white border-y">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-extrabold">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-600">Everything you need to know about deploying AI agents for real estate.</p>
        </div>
      </section>

      {/* Accordion */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        {QA.map((item, i) => (
          <div key={i} className="bg-white border rounded-xl shadow-sm mb-4">
            <button
              onClick={() => toggle(i)}
              className="w-full text-left px-5 py-4 flex justify-between items-center"
            >
              <span className="font-medium">{item.q}</span>
              <span className="text-indigo-700">{open === i ? "−" : "+"}</span>
            </button>
            {open === i && (
              <div className="px-5 pb-5 text-gray-700">{item.a}</div>
            )}
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-indigo-700">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center text-white">
          <h3 className="text-3xl font-bold">Still have a question?</h3>
          <p className="mt-2 text-indigo-100">We’re happy to walk through your use case and show a live demo.</p>
          <a href="/contact" className="inline-block mt-6 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50">
            Contact us
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
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/why-choose-us" className="hover:underline">Why Choose Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Support</h4>
            <ul className="space-y-2">
              <li><span className="text-indigo-700">FAQ</span></li>
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
