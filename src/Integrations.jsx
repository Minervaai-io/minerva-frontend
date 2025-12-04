import React from "react";

const ITEMS = [
  { name: "Meta", logo: "/logos/meta.svg", blurb: "Connect lead ads for instant callbacks." },
  { name: "Instagram", logo: "/logos/instagram.svg", blurb: "Route profile/DM traffic to Sarah 24/7." },
  { name: "Messenger", logo: "/logos/messenger.svg", blurb: "Handoff from chat to voice or booking." },
  { name: "Google Ads / Forms", logo: "/logos/google.svg", blurb: "Auto-call leads the moment they submit." },
  { name: "Google Calendar", logo: "/logos/google-calendar.svg", blurb: "Check availability and book viewings." },
  { name: "Google Drive", logo: "/logos/google-drive.svg", blurb: "Store brochures, floorplans, contracts." },
  { name: "Google Sheets", logo: "/logos/google.svg", blurb: "Simple CRM logging of calls & outcomes." },
  { name: "Calendly", logo: "/logos/calendly.svg", blurb: "Virtual or on-site tour scheduling." },
  { name: "HubSpot", logo: "/logos/hubspot.svg", blurb: "Push notes, transcripts & outcomes to CRM." },
  { name: "Pipedrive", logo: "/logos/pipedrive.svg", blurb: "Create/update deals from qualified calls." },
  { name: "Zapier", logo: "/logos/zapier.svg", blurb: "Automate to 6,000+ apps via events." },
  { name: "Make", logo: "/logos/make.svg", blurb: "Custom workflows via webhooks." },
  { name: "WhatsApp", logo: "/logos/whatsapp.svg", blurb: "Follow-ups, reminders, and confirmations." },
  { name: "Telegram", logo: "/logos/telegram.svg", blurb: "Optional messaging handoff channel." },
  { name: "Snapchat", logo: "/logos/snapchat.svg", blurb: "Support for ads audiences where relevant." },
];

export default function Integrations() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/minerva-logo.png" alt="Minerva" className="w-12 h-12 rounded-full" />
          <div>
            <h1 className="text-xl font-bold">Minerva — AI Agents for Real Estate</h1>
            <p className="text-xs text-gray-500">From real estate, for real estate.</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/" className="hover:text-indigo-700">Home</a>
          <span className="font-semibold text-indigo-700">Integrations</span>
          <a href="/services" className="hover:text-indigo-700">Services</a>
          <a href="/contact" className="hover:text-indigo-700">Contact</a>
        </nav>
      </header>

      <section className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-6 py-14 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight">Works with your stack</h2>
          <p className="mt-3 text-gray-600">
            Plug in your ads, calendars, CRMs, and channels—go live without heavy engineering.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((it) => (
            <div key={it.name} className="bg-white border rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <img
                  src={it.logo}
                  alt={`${it.name} logo`}
                  className="h-7 w-auto"
                  loading="lazy"
                />
                <div className="text-lg font-semibold text-indigo-700">{it.name}</div>
              </div>
              <p className="text-gray-600 mt-2 text-sm">{it.blurb}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="/contact" className="inline-block px-6 py-3 bg-indigo-700 text-white rounded-lg font-semibold hover:bg-indigo-800">
            Ask about your tools →
          </a>
        </div>
      </section>
    </div>
  );
}
