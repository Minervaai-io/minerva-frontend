import React from "react";

export default function WhyChooseUs() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/minerva-logo.png" alt="Minerva" className="w-14 h-14 rounded-full" />
          <div>
            <h1 className="text-xl font-bold">Minerva · AI Agents for Real Estate</h1>
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
          <h2 className="text-4xl font-extrabold">Why Phuket agencies and developers pick Minerva</h2>
          <p className="mt-4 text-lg text-gray-600">
            We replace your marketing team, your media buyer, your lead qualifier, and your CRM admin. You only pay
            when a deal actually closes.
          </p>
        </div>
      </section>

      {/* Value pillars */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <h4 className="font-semibold text-indigo-700">Aligned incentives</h4>
          <p className="text-gray-600 mt-2">Commission only on closed deals. 20% for founding partners. No retainer, no media spend on you. We win when you win.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <h4 className="font-semibold text-indigo-700">Phuket-focused</h4>
          <p className="text-gray-600 mt-2">One market, multiple buyer nationalities: Russian, European, Chinese, Middle Eastern. Localized ad creative and multilingual qualification.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <h4 className="font-semibold text-indigo-700">Full stack, hands-off</h4>
          <p className="text-gray-600 mt-2">Ads, AI qualification, nurture, CRM, viewing-booking: we run it all. You walk into pre-qualified meetings.</p>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h3 className="text-2xl font-semibold mb-6">Minerva vs. building your own acquisition team</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border rounded-xl overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4">Criteria</th>
                  <th className="p-4">Minerva Partnership</th>
                  <th className="p-4">In-house team</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-4 font-medium">Up-front cost</td>
                  <td className="p-4">Zero. We cover ad spend and ops.</td>
                  <td className="p-4">Salaries + media budget + tools</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 font-medium">Risk to you</td>
                  <td className="p-4">None. Pay only on closed deals.</td>
                  <td className="p-4">High. Monthly burn whether you close or not.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 font-medium">Speed to qualified meeting</td>
                  <td className="p-4">Under 60 seconds, 24/7, multilingual</td>
                  <td className="p-4">Hours; gaps after hours and weekends</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 font-medium">Buyer-language coverage</td>
                  <td className="p-4">Russian, English, Chinese, Arabic, more</td>
                  <td className="p-4">Usually English only</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 font-medium">Compensation model</td>
                  <td className="p-4">20% of commission for founding partners, on closed deals only</td>
                  <td className="p-4">Fixed salaries + ad budget + commission</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">Comparison reflects the typical small-to-mid agency / developer stack in Phuket.</p>
        </div>
      </section>

      {/* Founding partners CTA (replaces fake testimonials) */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white p-8 md:p-12 rounded-2xl border shadow-sm text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Founding partners wanted.</h3>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
            We are taking a small number of Phuket agencies and developers at preferred commission terms,
            in exchange for being our first publicly named case studies. Closers welcome. Open inventory required.
          </p>
          <ul className="mt-6 inline-block text-left text-gray-700 space-y-2">
            <li>• Reserved commission rate for founding partners</li>
            <li>• Direct access to the founder during onboarding</li>
            <li>• Full transparency: live dashboard of leads, qualifications, viewings, deals</li>
          </ul>
          <div className="mt-7">
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
            >
              Apply for a partner slot
            </a>
          </div>
        </div>
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
            <strong className="block text-gray-900">Minerva · AI Agents for Real Estate</strong>
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
