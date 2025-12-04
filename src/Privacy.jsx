import React, { useEffect } from "react";

function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm hover:bg-gray-50"
      aria-label="Go back"
    >
      ← Back
    </button>
  );
}

export default function Privacy() {
  useEffect(() => { document.title = "Privacy Policy • Minerva"; }, []);
  const updated = new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });

  const toc = [
    ["info", "Information we collect"],
    ["use", "How we use information"],
    ["legal-bases", "Legal bases (GDPR)"],
    ["sharing", "Sharing & processors"],
    ["retention", "Data retention"],
    ["transfers", "International transfers"],
    ["security", "Security"],
    ["rights", "Your rights"],
    ["marketing", "Marketing & communications"],
    ["cookies", "Cookies"],
    ["children", "Children"],
    ["changes", "Changes"],
    ["contact", "Contact"],
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/minerva-logo.png" alt="Minerva" className="w-12 h-12 rounded-full" />
          <div>
            <h1 className="text-xl font-bold">Minerva — AI Agents for Real Estate</h1>
            <p className="text-xs text-gray-500">From real estate, for real estate.</p>
          </div>
        </a>
        <BackButton />
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white border-y">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight">Privacy Policy</h2>
          <p className="mt-2 text-sm text-gray-500">Last updated: {updated}</p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-12 gap-8">
        {/* TOC */}
        <aside className="md:col-span-3">
          <div className="sticky top-4">
            <div className="rounded-xl border bg-white shadow-sm p-4">
              <div className="text-xs font-semibold uppercase text-gray-600 mb-3">On this page</div>
              <ul className="space-y-2 text-sm">
                {toc.map(([id, label]) => (
                  <li key={id}>
                    <a href={`#${id}`} className="text-gray-700 hover:text-indigo-700">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Body */}
        <section className="md:col-span-9">
          <div className="rounded-2xl border bg-white shadow-sm p-6 md:p-8 space-y-8">
            <p className="text-gray-700">
              This Policy explains how <strong>Minerva</strong> (“we”, “us”) collects, uses, and protects personal
              information when you use our website, AI demos, and services for real-estate teams. Adapt this to your
              jurisdiction and exact data flows; this is not legal advice.
            </p>

            <div id="info">
              <h3 className="text-xl font-semibold text-gray-900">1) Information we collect</h3>
              <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
                <li><strong>Contact data</strong> (name, email, phone).</li>
                <li><strong>Lead details</strong> (property interest, budget, dates).</li>
                <li><strong>Usage data</strong> (pages viewed, device, IP, timestamps).</li>
                <li><strong>Calls & transcripts</strong> from demos (audio, text, outcomes).</li>
                <li><strong>Integrations</strong> you connect (e.g., calendar slots, CRM fields).</li>
              </ul>
            </div>

            <div id="use">
              <h3 className="text-xl font-semibold">2) How we use information</h3>
              <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
                <li>Provide demos/services (voice, chat, booking, follow-ups).</li>
                <li>Respond to enquiries and deliver proposals.</li>
                <li>Improve performance, detect abuse, ensure security.</li>
                <li>Comply with legal obligations and enforce Terms.</li>
              </ul>
            </div>

            <div id="legal-bases">
              <h3 className="text-xl font-semibold">3) Legal bases (GDPR)</h3>
              <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
                <li><strong>Contract</strong> (providing requested services/demos).</li>
                <li><strong>Legitimate interests</strong> (improvement, security, fraud prevention).</li>
                <li><strong>Consent</strong> where required (e.g., certain marketing/cookies).</li>
              </ul>
            </div>

            <div id="sharing">
              <h3 className="text-xl font-semibold">4) Sharing & processors</h3>
              <p className="mt-2 text-gray-700">
                We use reputable sub-processors for hosting, AI calls, analytics, and the integrations you authorize.
                We share only what’s necessary under data-processing terms.
              </p>
            </div>

            <div id="retention">
              <h3 className="text-xl font-semibold">5) Data retention</h3>
              <p className="mt-2 text-gray-700">
                We retain personal data only as long as needed for services, legal compliance, and dispute resolution.
                Demo recordings/transcripts are typically kept briefly for QA unless you request earlier deletion.
              </p>
            </div>

            <div id="transfers">
              <h3 className="text-xl font-semibold">6) International transfers</h3>
              <p className="mt-2 text-gray-700">
                Data may be processed outside your country. Where required, we use appropriate safeguards (e.g., SCCs).
              </p>
            </div>

            <div id="security">
              <h3 className="text-xl font-semibold">7) Security</h3>
              <p className="mt-2 text-gray-700">
                We apply administrative, technical, and physical measures appropriate to risk (encryption in transit,
                access controls, least-privilege). No method is 100% secure.
              </p>
            </div>

            <div id="rights">
              <h3 className="text-xl font-semibold">8) Your rights</h3>
              <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
                <li>Access, correct, delete your personal information.</li>
                <li>Object to or restrict processing; portability where applicable.</li>
                <li>Withdraw consent where processing is based on consent.</li>
              </ul>
              <p className="mt-2 text-gray-700">
                To exercise rights: <a className="text-indigo-700 underline" href="mailto:contact@minerva-ai.io">contact@minerva-ai.io</a>
              </p>
            </div>

            <div id="marketing">
              <h3 className="text-xl font-semibold">9) Marketing & communications</h3>
              <p className="mt-2 text-gray-700">
                If you opt in, we may send updates about features/services. Unsubscribe anytime via the message link or by contacting us.
              </p>
            </div>

            <div id="cookies">
              <h3 className="text-xl font-semibold">10) Cookies</h3>
              <p className="mt-2 text-gray-700">
                We use essential cookies and may use analytics cookies. See our <a href="/cookies" className="text-indigo-700 underline">Cookie Policy</a>.
              </p>
            </div>

            <div id="children">
              <h3 className="text-xl font-semibold">11) Children</h3>
              <p className="mt-2 text-gray-700">Our services are not directed to children under 16.</p>
            </div>

            <div id="changes">
              <h3 className="text-xl font-semibold">12) Changes</h3>
              <p className="mt-2 text-gray-700">We may update this Policy; material changes will be signposted.</p>
            </div>

            <div id="contact">
              <h3 className="text-xl font-semibold">13) Contact</h3>
              <p className="mt-2 text-gray-700">
                Minerva — AI Agents for Real Estate<br />
                Email: <a className="text-indigo-700 underline" href="mailto:hello@minerva.ai">hello@minerva.ai</a>
              </p>
            </div>

            <div className="pt-4 border-t flex items-center justify-between text-sm">
              <span className="text-gray-500">Last updated: {updated}</span>
              <a
                href="#top"
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="text-indigo-700 hover:underline"
              >
                Back to top ↑
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
