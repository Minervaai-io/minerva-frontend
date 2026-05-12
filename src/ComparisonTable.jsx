import React from "react";

export default function ComparisonTable() {
  const rows = [
    { label: "Up-front cost to the agency", us: "Zero — we cover ad spend", them: "Salaries + ad budget + tools" },
    { label: "Risk if no deal closes", us: "Zero — pay only on close", them: "Full monthly burn either way" },
    { label: "Speed to qualified meeting", us: "Under 60s, 24/7, multilingual", them: "Hours; off-hours gaps" },
    { label: "Buyer-language coverage", us: "Russian, English, Chinese, Arabic, more", them: "Usually English only" },
    { label: "Compensation model", us: "30% on closed deals only", them: "Fixed salaries + commission" },
  ];
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-semibold text-gray-900 text-center">
        Minerva vs. building your own acquisition team
      </h3>
      <p className="text-sm text-gray-500 text-center mt-2">
        How a Minerva partnership compares to hiring a marketing manager, media buyer, qualifier, and CRM admin in-house.
      </p>
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full bg-white border rounded-2xl overflow-hidden">
          <thead className="bg-gray-50 text-sm">
            <tr>
              <th className="text-left p-4">Criteria</th>
              <th className="text-left p-4 text-indigo-700">Minerva Partnership</th>
              <th className="text-left p-4">In-house team</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {rows.map((r) => (
              <tr key={r.label} className="border-t">
                <td className="p-4 font-medium">{r.label}</td>
                <td className="p-4">{r.us}</td>
                <td className="p-4">{r.them}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
