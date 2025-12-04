import React from "react";

function Step({ n, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm">
      <div className="w-9 h-9 rounded-full bg-indigo-600 text-white grid place-items-center font-bold">
        {n}
      </div>
      <div className="mt-3 text-lg font-semibold">{title}</div>
      <p className="text-gray-600 text-sm mt-1">{desc}</p>
    </div>
  );
}

export default function ThreeStepOnboarding() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-semibold text-gray-900 text-center">
        Go live in 3 steps
      </h3>
      <p className="text-gray-600 text-center mt-2">
        No heavy lift for your team — we do the wiring, you see the bookings.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <Step
          n={1}
          title="Connect"
          desc="Ads (Meta/Google), calendars, and CRM — or start with Google Sheets."
        />
        <Step
          n={2}
          title="Pick agents"
          desc="Choose Mark/Sarah/David, set prompts and booking rules for your market."
        />
        <Step
          n={3}
          title="Test & launch"
          desc="Run sandbox calls, tweak answers, and go live with real traffic."
        />
      </div>
      <div className="text-center mt-8">
        <a
          href="/contact"
          className="inline-block px-6 py-3 rounded-lg bg-indigo-700 text-white font-semibold hover:bg-indigo-800"
        >
          Book onboarding →
        </a>
      </div>
    </section>
  );
}
