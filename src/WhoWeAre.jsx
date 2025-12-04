import React from "react";

export default function WhoWeAre() {
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
          <h2 className="text-4xl font-extrabold tracking-tight">We build AI that thinks like agents.</h2>
          <p className="mt-4 text-lg text-gray-600">
            Minerva was founded by real-estate operators who’ve sat in the sales seat. 
            We turn ads into booked viewings—instantly, 24/7—so your team closes more deals.
          </p>
        </div>
      </section>

      {/* Founder Video (replace src later) */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold">A quick hello from us</h3>
        <p className="text-gray-600 mt-2">Drop your intro video here to build trust in 60 seconds.</p>

        {/* Responsive 16:9 container */}
        <div className="mt-5 relative w-full overflow-hidden rounded-xl shadow-lg bg-black" style={{paddingTop: "56.25%"}}>
          {/* Replace the iframe src with your YouTube/Vimeo or self-hosted link */}
          <iframe
            title="Who We Are Video"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>

        {/* If you prefer a local file later:
            <video controls className="mt-5 w-full rounded-xl shadow-lg">
              <source src="/founder-intro.mp4" type="video/mp4" />
            </video>
        */}
      </section>

      {/* Our Story */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold">Our story</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              We started Minerva after running performance marketing for property developers and agencies across multiple markets.
              One pattern kept repeating: <span className="font-medium">leads go cold fast.</span> 
              Sales teams juggle showings, WhatsApp, and inbound calls—so responding in minutes, not hours, is hard.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Minerva agents (Mark, Sarah, David) were built to plug that leak: instant callbacks from ad forms, 
              smart inbound call handling, and consistent nurturing. The result? 
              More qualified conversations and more booked tours—without growing headcount.
            </p>
          </div>
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
            <h4 className="text-lg font-semibold text-indigo-700">What we optimize for</h4>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• <strong>Speed-to-lead:</strong> instant calls within seconds of form submit</li>
              <li>• <strong>Quality:</strong> context-aware conversations, CRM-ready notes</li>
              <li>• <strong>Showings booked:</strong> virtual/physical tours on agents’ calendars</li>
              <li>• <strong>Coverage:</strong> 24/7 availability, multi-language options</li>
              <li>• <strong>Cost:</strong> scale conversations without scaling payroll</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trust / Proof */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border bg-white shadow-sm">
            <div className="text-3xl font-extrabold text-indigo-700">24/7</div>
            <div className="text-gray-600 mt-1">Instant lead response</div>
          </div>
          <div className="p-6 rounded-xl border bg-white shadow-sm">
            <div className="text-3xl font-extrabold text-indigo-700">+70%</div>
            <div className="text-gray-600 mt-1">Higher conversion when contacted in minutes</div>
          </div>
          <div className="p-6 rounded-xl border bg-white shadow-sm">
            <div className="text-3xl font-extrabold text-indigo-700">Zero</div>
            <div className="text-gray-600 mt-1">Missed inbound calls after hours</div>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          * Industry research shows responding within minutes can boost conversions substantially. Your mileage may vary by market, offer, and media mix.
        </p>
      </section>

      {/* Values */}
      <section className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h3 className="text-2xl font-semibold mb-6">Our values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border shadow-sm">
              <h4 className="font-semibold">Clarity</h4>
              <p className="text-gray-600 mt-2">Easy to test, easy to buy, easy to scale.</p>
            </div>
            <div className="p-6 rounded-xl border shadow-sm">
              <h4 className="font-semibold">Reliability</h4>
              <p className="text-gray-600 mt-2">Consistent performance across campaigns and seasons.</p>
            </div>
            <div className="p-6 rounded-xl border shadow-sm">
              <h4 className="font-semibold">Partnership</h4>
              <p className="text-gray-600 mt-2">We come from real estate—we speak your language.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Agents recap / deep links */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-semibold text-center">Meet your AI team</h3>
        <p className="text-gray-600 text-center mt-2 mb-8">Each agent owns a stage of the pipeline.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <a href="/agents/mark" className="group bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition">
            <img src="/mark-photo.jpg" alt="Mark" className="w-full h-56 object-cover rounded-lg" />
            <h4 className="mt-4 font-semibold group-hover:text-indigo-700">Mark — Outreach</h4>
            <p className="text-sm text-gray-600">Instant lead callbacks & booking.</p>
          </a>
          <a href="/agents/sarah" className="group bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition">
            <img src="/sarah.jpg" alt="Sarah" className="w-full h-56 object-cover rounded-lg" />
            <h4 className="mt-4 font-semibold group-hover:text-indigo-700">Sarah — Inbound</h4>
            <p className="text-sm text-gray-600">Answers website/Instagram calls.</p>
          </a>
          <a href="/agents/david" className="group bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition">
            <img src="/david-photo.jpg" alt="David" className="w-full h-56 object-cover rounded-lg" />
            <h4 className="mt-4 font-semibold group-hover:text-indigo-700">David — Nurture</h4>
            <p className="text-sm text-gray-600">Re-engages & books viewings.</p>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center text-white">
          <h3 className="text-3xl font-bold">Ready to see it with your listings?</h3>
          <p className="mt-2 text-indigo-100">We’ll plug into your current ads & calendar—no internal dev time needed.</p>
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
