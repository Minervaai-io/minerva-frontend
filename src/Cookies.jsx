import React from "react";
import usePageMeta from "./hooks/usePageMeta";

export default function Cookies() {
  usePageMeta("Cookie Policy | Minerva");
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="max-w-6xl mx-auto px-6 py-8">
        <a href="/" className="flex items-center gap-3">
          <img src="/minerva-logo.png" alt="Minerva" className="w-12 h-12 rounded-full" />
          <h1 className="text-xl font-bold">Cookie Policy</h1>
        </a>
      </header>
      <main className="max-w-3xl mx-auto px-6 pb-16">
        <p className="text-gray-700">
          We use cookies for analytics (GA4) and to improve demo reliability. You can control cookies in your browser settings.
        </p>
        <h3 className="text-xl font-semibold mt-6">Types</h3>
        <ul className="list-disc ml-6 text-gray-700 mt-2">
          <li>Essential: site functionality and security</li>
          <li>Analytics: usage patterns to improve UX</li>
        </ul>
        <h3 className="text-xl font-semibold mt-6">Managing cookies</h3>
        <p className="text-gray-700 mt-2">Most browsers allow you to block or delete cookies. Blocking may affect certain features.</p>
        <h3 className="text-xl font-semibold mt-6">Contact</h3>
        <p className="text-gray-700 mt-2">privacy@minerva.ai</p>
      </main>
    </div>
  );
}
