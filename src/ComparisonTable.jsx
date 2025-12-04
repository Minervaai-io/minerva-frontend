import React from "react";

export default function ComparisonTable() {
  const rows = [
    { label: "Real-estate tuned scripts & answers", us: true, them: "Generic" },
    { label: "Instant lead callback (ad form → phone)", us: true, them: false },
    { label: "Calendar + CRM actions (bookings, notes)", us: true, them: "Manual setup" },
    { label: "Inbound phone + website + Instagram", us: true, them: "Chat only" },
    { label: "Compliance: call recording consent, transcripts", us: true, them: "Varies" },
  ];
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-semibold text-gray-900 text-center">
        Minerva vs. Generic Chatbots
      </h3>
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full bg-white border rounded-2xl overflow-hidden">
          <thead className="bg-gray-50 text-sm">
            <tr>
              <th className="text-left p-4">Capability</th>
              <th className="text-left p-4 text-indigo-700">Minerva</th>
              <th className="text-left p-4">Generic Chatbot</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {rows.map((r) => (
              <tr key={r.label} className="border-t">
                <td className="p-4">{r.label}</td>
                <td className="p-4">
                  {r.us === true ? "✓" : r.us}
                </td>
                <td className="p-4">
                  {r.them === true ? "✓" : r.them === false ? "—" : r.them}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
