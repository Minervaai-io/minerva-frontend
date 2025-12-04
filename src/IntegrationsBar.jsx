import React from "react";

export default function IntegrationsBar({ speed = 28, spacing = 40 }) {
  const LOGOS = [
    { name: "Meta",        src: "/logos/meta.svg" },
    { name: "Instagram",   src: "/logos/instagram.svg" },
    { name: "Messenger",   src: "/logos/messenger.svg" },
    { name: "Google Ads",  src: "/logos/google.svg" },
    { name: "Google Cal",  src: "/logos/google-calendar.svg" },
    { name: "Google Drive",src: "/logos/google-drive.svg" },
    { name: "Calendly",    src: "/logos/calendly.svg" },
    { name: "HubSpot",     src: "/logos/hubspot.svg" },
    { name: "Pipedrive",   src: "/logos/pipedrive.svg", nudge: +40},
    { name: "Zapier",      src: "/logos/zapier.svg" },
    { name: "Make",        src: "/logos/make.svg",      nudge: +20 },
    { name: "WhatsApp",    src: "/logos/whatsapp.svg" },
    { name: "Telegram",    src: "/logos/telegram.svg" },
    { name: "Snapchat",    src: "/logos/snapchat.svg" },
  ];

  // Duplicate content in the SAME track for a seamless loop
  const TRACK = [...LOGOS, ...LOGOS];

  return (
    <section className="bg-white border-y">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h3 className="text-sm font-semibold text-gray-700 tracking-wide uppercase">
            Works with your stack
          </h3>
          <a href="/integrations" className="text-sm text-indigo-700 hover:underline">
            See all integrations →
          </a>
        </div>

        {/* marquee container */}
        <div
          className="relative overflow-hidden group"
          style={{ ["--duration"]: `${speed}s`, ["--gap"]: `${spacing}px` }}
        >
          {/* soft edge masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

          {/* single animated track */}
          <ul className="track inline-flex items-center whitespace-nowrap will-change-transform">
            {TRACK.map((it, i) => (
              <li
                key={`${it.name}-${i}`}
                className="flex-shrink-0"
                style={{
                  marginLeft: it.nudge ?? 0,
                  marginRight: it.nudge ?? 0,
                }}
              >
                <img
                  src={it.src}
                  alt={`${it.name} logo`}
                  className="h-7 w-auto opacity-90"
                  loading="lazy"
                />
              </li>
            ))}
          </ul>

          <style>{`
            .track {
              gap: var(--gap, 10px);
              animation: minerva-marquee var(--duration, 28s) linear infinite;
            }
            .group:hover .track { animation-play-state: paused; }

            @keyframes minerva-marquee {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
