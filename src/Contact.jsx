import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    // TODO: wire this to your backend or email provider later.
    // For now we just simulate success:
    setStatus("loading");
    setTimeout(() => setStatus("success"), 800);
  };

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
          <a href="/faq" className="hover:text-indigo-700">FAQ</a>
          <span className="font-semibold text-indigo-700">Contact</span>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-white border-y">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-extrabold">Let’s talk</h2>
          <p className="mt-4 text-lg text-gray-600">Tell us about your listings, markets, and lead flow—we’ll suggest the best Minerva setup.</p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <form onSubmit={onSubmit} className="bg-white p-6 rounded-2xl border shadow-sm md:col-span-2">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-700">Name</label>
              <input name="name" value={form.name} onChange={onChange} required
                className="mt-1 w-full border rounded-md px-3 py-2" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Email</label>
              <input type="email" name="email" value={form.email} onChange={onChange} required
                className="mt-1 w-full border rounded-md px-3 py-2" placeholder="jane@agency.com" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Phone (optional)</label>
              <input name="phone" value={form.phone} onChange={onChange}
                className="mt-1 w-full border rounded-md px-3 py-2" placeholder="+66 ..." />
            </div>
            <div>
              <label className="text-sm text-gray-700">Company</label>
              <input name="company" value={form.company} onChange={onChange}
                className="mt-1 w-full border rounded-md px-3 py-2" placeholder="Modeva Residences" />
            </div>
          </div>

          <div className="mt-4">
            <label className="text-sm text-gray-700">Message</label>
            <textarea name="message" value={form.message} onChange={onChange} rows={5}
              className="mt-1 w-full border rounded-md px-3 py-2" placeholder="Tell us about your goals, listings, and timelines." />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-700 text-white font-semibold hover:bg-indigo-800 disabled:opacity-60"
          >
            {status === "loading" ? "Sending…" : "Send message"}
          </button>

          {status === "success" && (
            <p className="mt-3 text-green-700">Thanks! We’ll get back to you shortly.</p>
          )}
        </form>

        <aside className="bg-white p-6 rounded-2xl border shadow-sm">
          <h4 className="font-semibold text-gray-900">Contact details</h4>
          <p className="mt-2 text-gray-700">Email: contact@minerva-ai.io</p>
          <p className="mt-1 text-gray-700">Hours: 9:00–18:00 (GMT+7)</p>
          <div className="mt-6">
            <h4 className="font-semibold text-gray-900">What to prepare</h4>
            <ul className="mt-2 text-gray-700 text-sm space-y-1">
              <li>• Ad sources (Meta/Google)</li>
              <li>• Calendar tool (Google/Calendly/Wix)</li>
              <li>• CRM (HubSpot/Pipedrive/Sheets)</li>
              <li>• Languages & markets</li>
            </ul>
          </div>
        </aside>
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
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
              <li><span className="text-indigo-700">Contact Us</span></li>
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
