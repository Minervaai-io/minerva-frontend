import React, { useState } from "react";

export default function ROICalculator() {
  const [units, setUnits] = useState(20);
  const [price, setPrice] = useState(300000);
  const [commissionPct, setCommissionPct] = useState(5);
  const [monthlyOverhead, setMonthlyOverhead] = useState(8000);
  const [partnershipPct, setPartnershipPct] = useState(20);

  const annualCommission = units * price * (commissionPct / 100);
  const minervaFee = annualCommission * (partnershipPct / 100);
  const annualOverhead = monthlyOverhead * 12;
  const netSavings = annualOverhead - minervaFee;

  const fmt = (n) => `$${Math.round(n).toLocaleString()}`;

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-extrabold">Run the math on your own numbers.</h3>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
            How does paying us a share of closed-deal commission compare to your current marketing, ad spend, and sales-support overhead? Founding partners lock 20%.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 bg-gray-800 rounded-2xl p-6 md:p-8">
          {/* Inputs */}
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300">Units closed per year</label>
              <input
                type="number"
                min="1"
                value={units}
                onChange={(e) => setUnits(Number(e.target.value) || 0)}
                className="mt-1 w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Average unit price (USD)</label>
              <input
                type="number"
                min="0"
                step="10000"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value) || 0)}
                className="mt-1 w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Your commission per unit (%)</label>
              <input
                type="number"
                min="0"
                max="100"
                step="0.5"
                value={commissionPct}
                onChange={(e) => setCommissionPct(Number(e.target.value) || 0)}
                className="mt-1 w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <p className="text-xs text-gray-500 mt-1">Developer commission you earn per sale, typically 3 to 5% in Phuket.</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Your monthly marketing + sales overhead (USD)</label>
              <input
                type="number"
                min="0"
                step="500"
                value={monthlyOverhead}
                onChange={(e) => setMonthlyOverhead(Number(e.target.value) || 0)}
                className="mt-1 w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <p className="text-xs text-gray-500 mt-1">Ad spend + marketing/SDR/CRM staff + tools, what Minerva replaces.</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Partnership rate (%)</label>
              <input
                type="number"
                min="0"
                max="100"
                step="1"
                value={partnershipPct}
                onChange={(e) => setPartnershipPct(Number(e.target.value) || 0)}
                className="mt-1 w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <p className="text-xs text-gray-500 mt-1">20% for founding partners (locked for any deal booked in your 90-day launch window). Steps to 25% (months 4 to 6), 30% (month 7+).</p>
            </div>
          </div>

          {/* Outputs */}
          <div className="bg-gray-900 rounded-xl p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <div className="text-xs uppercase tracking-wider text-gray-500">Annual commission earned at this volume</div>
                <div className="text-2xl font-bold text-white">{fmt(annualCommission)}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-gray-500">Minerva fee ({partnershipPct}% of closed-deal commission)</div>
                <div className="text-2xl font-bold text-indigo-400">{fmt(minervaFee)}</div>
                <div className="text-xs text-gray-500 mt-1">Paid only on actually-closed deals. Zero if we don't deliver.</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-gray-500">Your current annual overhead</div>
                <div className="text-2xl font-bold text-white">{fmt(annualOverhead)}</div>
                <div className="text-xs text-gray-500 mt-1">Marketing + staff + ad spend + tools you'd no longer need.</div>
              </div>
              <div className="border-t border-gray-700 pt-4 mt-4">
                <div className="text-xs uppercase tracking-wider text-gray-500">Net difference with Minerva</div>
                <div className={`text-3xl font-extrabold ${netSavings >= 0 ? "text-emerald-400" : "text-amber-400"}`}>
                  {netSavings >= 0 ? `+${fmt(netSavings)}/yr` : `−${fmt(Math.abs(netSavings))}/yr`}
                </div>
                <div className="text-xs text-gray-400 mt-2">
                  {netSavings >= 0
                    ? "You'd save money AND offload the entire acquisition stack, at the same close volume."
                    : "Your stack is efficient. Talk to us about lifting close volume instead; the real upside isn't modeled here."}
                </div>
              </div>
            </div>

            <a
              href="/contact"
              className="mt-6 inline-block text-center px-5 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
            >
              Apply for a partner slot
            </a>
          </div>
        </div>

        <p className="text-xs text-gray-500 text-center mt-4 max-w-2xl mx-auto">
          Calculator assumes same close volume. The real upside is the increased volume from a multilingual, 24/7 acquisition stack, not modeled here.
        </p>
      </div>
    </section>
  );
}
