// src/PricingSection.jsx
import React from "react";

const plans = [
  {
    name: "Single Agent",
    price: "$3,000",
    blurb: "Perfect first step—prove ROI fast with one agent.",
    bullets: [
      "1 AI voice/chat agent (e.g., Mark)",
      "Lead capture + bookings",
      "1 calendar + CRM hookup",
      "Call recording & transcripts",
      "Email support",
    ],
    cta: "Get started",
    highlight: false,
  },
  {
    name: "Two Agents",
    price: "$5,000",
    blurb: "Cover outreach + inbound with two specialized agents.",
    bullets: [
      "2 agents (e.g., Mark + Sarah)",
      "Meta/Google lead forms + inbound phone",
      "Multi-calendar + CRM",
      "WhatsApp/SMS handoff",
      "Priority support",
    ],
    cta: "Start two-agent plan",
    highlight: false,
  },
  {
    name: "Three Agents",
    price: "$6,000",
    tag: "Best value",
    blurb: "Add nurture to revive old leads and fill the pipeline.",
    bullets: [
      "3 agents (Mark + Sarah + David)",
      "Full funnel: outreach • inbound • nurture",
      "Calendars • CRM • webhooks",
      "Scripts tuned to your market",
      "Priority support & tuning",
    ],
    cta: "Choose three-agent plan",
    highlight: true,
  },
  {
    name: "Custom (4+ Agents)",
    price: "$7,000+",
    blurb: "Scale across teams or developments with routing & SLAs.",
    bullets: [
      "4+ agents & custom routing",
      "Advanced integrations & analytics",
      "Multi-language voices",
      "Security review / data residency",
      "Dedicated CSM",
    ],
    cta: "Design my stack",
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section className="bg-white border-y">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Partnership primary offer */}
        <div className="rounded-2xl border-2 border-indigo-600 bg-indigo-50 p-8 md:p-10 mb-10">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-semibold px-2 py-1 rounded-full bg-indigo-600 text-white mb-3">
                Recommended — Performance partnership
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                The Phuket Lead Engine — 30% on Closed Deals.
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                We run the entire stack — ads, AI qualification, nurture, CRM, viewing-booking — and we cover the media spend.
                You pay nothing until a villa or condo closes. <strong>30% of the commission on closed deals only.</strong>
                A small number of founding-partner slots are open at preferred rates.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-gray-700">
                <li>• Zero retainer · Zero ad-spend cost to you · Zero risk if we don't deliver</li>
                <li>• 24/7 multilingual qualification (Russian, English, Chinese, Arabic, more)</li>
                <li>• Live dashboard: leads, viewings, deals, pipeline value</li>
                <li>• Direct access to the founder during onboarding</li>
              </ul>
            </div>
            <div>
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 shadow"
              >
                Apply for a partner slot
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between flex-wrap gap-4">
          <h3 className="text-2xl font-semibold text-gray-900">Or: fixed-fee AI agent packages</h3>
          <p className="text-sm text-gray-500">
            For teams that only want the AI agent layer — without the full partnership.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-8">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-6 shadow-sm border bg-white relative ${
                p.highlight ? "border-indigo-600" : ""
              }`}
            >
              {p.tag && (
                <span className="absolute -top-3 right-4 text-xs px-2 py-1 rounded-full bg-indigo-100 text-indigo-700">
                  {p.tag}
                </span>
              )}

              <h4 className="font-semibold text-indigo-700">{p.name}</h4>

              <div className="mt-3">
                <div className="text-3xl font-extrabold">{p.price}</div>
                <div className="text-sm text-gray-500">{p.blurb}</div>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {p.bullets.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>

              <a
                href="/contact"
                className={`inline-block mt-5 px-5 py-2 rounded-md ${
                  p.highlight
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-white border hover:bg-gray-50"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-4">
          Prices shown are package totals. Usage-based carrier/LLM minutes and optional add-ons (extra agents, extra languages, WhatsApp handoff,
          advanced analytics) can be quoted on request.
        </p>
      </div>
    </section>
  );
}
