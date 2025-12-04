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

export default function Terms() {
  useEffect(() => { document.title = "Terms of Service • Minerva"; }, []);
  const updated = new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });

  const toc = [
    ["use", "Use of the Services"],
    ["demos", "Demo calls & transcripts"],
    ["data", "Customer data & confidentiality"],
    ["integrations", "Integrations & third parties"],
    ["ip", "Intellectual property"],
    ["acceptable", "Acceptable use"],
    ["fees", "Fees & trials"],
    ["disclaimers", "Warranties & disclaimers"],
    ["liability", "Limitation of liability"],
    ["term", "Term, suspension & termination"],
    ["changes", "Changes"],
    ["law", "Governing law & disputes"],
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
          <h2 className="text-4xl font-extrabold tracking-tight">Terms of Service</h2>
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

        {/* Body card */}
        <section className="md:col-span-9">
          <div className="rounded-2xl border bg-white shadow-sm p-6 md:p-8 space-y-8">
            <p className="text-gray-700">
              These Terms govern your access to and use of <strong>Minerva</strong>’s website, demos, and services.
              By using the Services, you agree to these Terms.
            </p>

            <div id="use">
              <h3 className="text-xl font-semibold">1) Use of the Services</h3>
              <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
                <li>You have authority to bind your company if using on its behalf.</li>
                <li>No misuse, interference, or access outside documented interfaces.</li>
                <li>You’re responsible for content you submit (accuracy, rights, legality).</li>
              </ul>
            </div>

            <div id="demos">
              <h3 className="text-xl font-semibold">2) Demo calls & transcripts</h3>
              <p className="mt-2 text-gray-700">
                Demos may be recorded/transcribed for QA and improvement. Don’t share sensitive data in demos. If testing with
                real leads, you’ll notify users and obtain required consents.
              </p>
            </div>

            <div id="data">
              <h3 className="text-xl font-semibold">3) Customer data & confidentiality</h3>
              <p className="mt-2 text-gray-700">
                We process customer data only to provide the Services and per our <a href="/privacy" className="text-indigo-700 underline">Privacy Policy</a>.
                Each party will protect the other’s confidential information with reasonable care.
              </p>
            </div>

            <div id="integrations">
              <h3 className="text-xl font-semibold">4) Integrations & third parties</h3>
              <p className="mt-2 text-gray-700">
                If you connect calendars, CRMs, or messaging tools, you authorize us to access/process relevant data.
                Third-party terms apply to those tools; we aren’t responsible for their services.
              </p>
            </div>

            <div id="ip">
              <h3 className="text-xl font-semibold">5) Intellectual property</h3>
              <p className="mt-2 text-gray-700">
                We retain all rights in our software, models, prompts, and content. You retain rights in your data and content.
              </p>
            </div>

            <div id="acceptable">
              <h3 className="text-xl font-semibold">6) Acceptable use</h3>
              <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
                <li>No illegal, infringing, deceptive, or harmful activities.</li>
                <li>No spam or harassment; no harm to minors.</li>
                <li>No attempts to reverse engineer or circumvent technical measures.</li>
              </ul>
            </div>

            <div id="fees">
              <h3 className="text-xl font-semibold">7) Fees & trials</h3>
              <p className="mt-2 text-gray-700">
                Pricing will be set in an order form/proposal. Trials or demos may be time-limited and can be changed or discontinued.
              </p>
            </div>

            <div id="disclaimers">
              <h3 className="text-xl font-semibold">8) Warranties & disclaimers</h3>
              <p className="mt-2 text-gray-700">
                Services are provided “as is” and “as available”. We disclaim all warranties permitted by law,
                including fitness for a particular purpose and non-infringement. Outcomes (e.g., conversions) aren’t guaranteed.
              </p>
            </div>

            <div id="liability">
              <h3 className="text-xl font-semibold">9) Limitation of liability</h3>
              <p className="mt-2 text-gray-700">
                To the fullest extent permitted, neither party is liable for indirect or consequential damages or lost profits.
                Our total liability is limited to amounts you paid in the 3 months before the event giving rise to liability.
              </p>
            </div>

            <div id="term">
              <h3 className="text-xl font-semibold">10) Term, suspension & termination</h3>
              <p className="mt-2 text-gray-700">
                We may suspend/terminate access for breach, security, or legal reasons. Terms that should reasonably survive will do so.
              </p>
            </div>

            <div id="changes">
              <h3 className="text-xl font-semibold">11) Changes</h3>
              <p className="mt-2 text-gray-700">
                We may modify the Services or Terms. Material changes will be notified; continued use constitutes acceptance.
              </p>
            </div>

            <div id="law">
              <h3 className="text-xl font-semibold">12) Governing law & disputes</h3>
              <p className="mt-2 text-gray-700">
                Governed by the laws of your contracting entity’s location unless otherwise agreed. Disputes will be resolved in those courts.
              </p>
            </div>

            <div id="contact">
              <h3 className="text-xl font-semibold">13) Contact</h3>
              <p className="mt-2 text-gray-700">
                Questions about these Terms? Email <a className="text-indigo-700 underline" href="mailto:contact@minerva-ai.io">contact@minerva-ai.io</a>
              </p>
            </div>

            <div className="pt-4 border-t flex items-center justify-between text-sm">
              <span className="text-gray-500">Last updated: {updated}</span>
              <a href="#top" onClick={(e)=>{e.preventDefault(); window.scrollTo({top:0, behavior:"smooth"});}} className="text-indigo-700 hover:underline">
                Back to top ↑
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
