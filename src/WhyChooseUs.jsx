import React from "react";

export default function WhyChooseUs() {
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
          <span className="font-semibold text-indigo-700">Why Choose Us</span>
          <a href="/faq" className="hover:text-indigo-700">FAQ</a>
          <a href="/contact" className="hover:text-indigo-700">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-white border-y">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-extrabold">Why real-estate teams pick Minerva</h2>
          <p className="mt-4 text-lg text-gray-600">
            We combine sales-floor experience with robust AI ops. The result: faster speed-to-lead, more booked tours, and lower staffing costs.
          </p>
        </div>
      </section>

      {/* Value pillars */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <h4 className="font-semibold text-indigo-700">Built by RE operators</h4>
          <p className="text-gray-600 mt-2">We’ve sat in the agent seat. Our playbooks reflect real pipelines, not lab demos.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <h4 className="font-semibold text-indigo-700">Speed-to-lead in seconds</h4>
          <p className="text-gray-600 mt-2">Instant callbacks on ad forms + 24/7 inbound coverage across channels.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <h4 className="font-semibold text-indigo-700">Bookings, not busywork</h4>
          <p className="text-gray-600 mt-2">We optimize for viewings scheduled and show-ups—your real bottom line.</p>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h3 className="text-2xl font-semibold mb-6">Minerva vs. hiring more phone staff</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border rounded-xl overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4">Criteria</th>
                  <th className="p-4">Minerva Agents</th>
                  <th className="p-4">Traditional Staffing</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-4 font-medium">Response time</td>
                  <td className="p-4">Seconds (instant on submit)</td>
                  <td className="p-4">Minutes–hours; off-hours missed</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 font-medium">Coverage</td>
                  <td className="p-4">24/7 multi-language</td>
                  <td className="p-4">Business hours + staffing gaps</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 font-medium">Scalability</td>
                  <td className="p-4">Elastic with ad volume</td>
                  <td className="p-4">Linear headcount cost</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 font-medium">Consistency</td>
                  <td className="p-4">Scripted, QA’d, logged</td>
                  <td className="p-4">Varies by agent and shift</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 font-medium">Total cost</td>
                  <td className="p-4">Predictable SaaS + usage</td>
                  <td className="p-4">Salaries + training + turnover</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">* Example comparison; exact ROI depends on traffic and conversion baselines.</p>
        </div>
      </section>

      {/* Social proof / quotes */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        {[
          { q: "We finally stopped missing hot ad leads after hours.", a: "Sales Lead, Property Developer" },
          { q: "Bookings increased without hiring. The pipeline is steadier.", a: "Director, Real-Estate Agency" },
          { q: "Integration was fast—calendars, forms, CRM all in sync.", a: "Ops Manager, Leasing Team" },
        ].map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border shadow-sm">
            <p className="text-gray-800">“{t.q}”</p>
            <p className="text-xs text-gray-500 mt-3">{t.a}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-indigo-700">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center text-white">
          <h3 className="text-3xl font-bold">See Minerva with your listings</h3>
          <p className="mt-2 text-indigo-100">We’ll connect your ads & calendars and run a live demo.</p>
          <a href="/contact" className="inline-block mt-6 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50">
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
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><span className="text-indigo-700">Why Choose Us</span></li>
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
