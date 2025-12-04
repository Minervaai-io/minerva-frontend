import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import IntegrationsBar from "./IntegrationsBar";
import Integrations from "./Integrations";
import ThreeStepOnboarding from "./ThreeStepOnboarding";
import PricingSection from "./PricingSection";
import ComparisonTable from "./ComparisonTable";

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const agents = [
    {
      name: "Mark",
      role: "Outreach Specialist",
      blurb: "Instant ad-lead callbacks and appointment booking.",
      image: "/mark-photo.jpg",
      link: "/agents/mark",
    },
    {
      name: "Sarah",
      role: "Inbound Specialist",
      blurb: "Answers inbound calls from website & Instagram.",
      image: "/sarah.jpg",
      link: "/agents/sarah",
    },
    {
      name: "David",
      role: "Nurture Agent",
      blurb: "Follows up with warm leads and schedules reminders.",
      image: "/david-photo.jpg",
      link: "/agents/david",
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? agents.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === agents.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* HEADER */}
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between relative">
        <div className="flex items-center gap-4">
          <img src="/minerva-logo.png" alt="Minerva Logo" className="w-24 h-24 rounded-full" />
          <div>
            <h1 className="text-xl font-semibold">Minerva — AI Agents for Real Estate</h1>
            <p className="text-sm text-gray-500">Your AI outreach team that never sleeps.</p>
          </div>
        </div>

        {/* Sidebar Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-md bg-indigo-600 text-white"
        >
          <Menu size={20} />
        </button>

        {menuOpen && (
          <div className="absolute top-20 right-6 w-48 bg-white border rounded-lg shadow-lg z-50">
            <ul className="p-4 space-y-3 text-sm">
              <li><a href="/who-we-are" className="hover:underline">Who Are We</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/why-choose-us" className="hover:underline">Why Choose Us</a></li>
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
        )}
      </header>

      {/* ===== CAROUSEL (moved to top, right under header) ===== */}
      <main id="agents" className="max-w-6xl mx-auto px-6 pt-8 pb-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700">
          Meet Your AI Team — Always Ready to Work for You
        </h2>
        <p className="text-center max-w-2xl mx-auto text-gray-600 mb-12">
          Each Minerva agent is designed with a unique role to supercharge your sales pipeline.
          Whether it’s instant lead callbacks, inbound call handling, or long-term nurturing — your AI team has it covered.
        </p>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full h-[720px] md:h-[680px] flex items-center justify-center overflow-visible">
            {agents.map((agent, idx) => {
              const isActive = idx === currentIndex;
              const isPrev = idx === (currentIndex - 1 + agents.length) % agents.length;
              const isNext = idx === (currentIndex + 1) % agents.length;

              return (
                <div
                  key={idx}
                  className={`absolute transition-all duration-700 ease-in-out flex flex-col items-center
                    ${isActive ? "z-20 scale-100 opacity-100" : "z-10 scale-75 opacity-40"}
                    ${isPrev ? "-translate-x-1/2" : ""}
                    ${isNext ? "translate-x-1/2" : ""}`}
                >
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-[300px] h-[500px] object-cover rounded-xl shadow-xl border-4 border-indigo-200"
                  />

                  {isActive && (
                    <div className="mt-6 mb-10 text-center max-w-md bg-white p-6 rounded-lg shadow-md">
                      <h2 className="text-3xl font-bold text-indigo-700">{agent.name}</h2>
                      <p className="text-sm text-gray-600 mt-1 italic">{agent.role}</p>
                      <p className="mt-3 text-gray-700 text-sm">{agent.blurb}</p>
                      <a
                        href={agent.link}
                        className="mt-4 inline-block bg-indigo-600 px-5 py-2 rounded-md text-white shadow hover:bg-indigo-700"
                      >
                        Meet {agent.name}
                      </a>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white z-30"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white z-30"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {agents.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === currentIndex ? "bg-indigo-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </main>

      {/* ===== HERO / INTRO (moved below carousel) ===== */}
      <section className="bg-white py-16 border-y">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-gray-900">Close More Leads, Faster</h2>
          <p className="mt-4 text-lg text-gray-600">
            Minerva is the AI agency solution built for real estate. We come from a real estate background ourselves,
            so we know what matters when it comes to closing deals. Our AI helps property developers and agencies
            <strong> capture leads instantly</strong>, <strong>engage them in real time</strong>, and
            <strong> book showings effortlessly</strong>.
          </p>
          <p className="mt-3 text-md text-gray-500">
            Statistics show that contacting a lead within the first 5 minutes increases conversion rates by up to 70%.
            Minerva makes that possible — 24/7.
          </p>
        </div>
      </section>

      {/* ===== Additional sections ===== */}
      <IntegrationsBar />
      <ThreeStepOnboarding />
      <ComparisonTable />
      <PricingSection />

      {/* FOOTER */}
      <footer className="mt-16 border-t pt-12 pb-12 text-sm text-gray-600 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          <div>
            <strong className="block text-gray-900">Minerva — AI Agents for Real Estate</strong>
            <div className="mt-2 text-gray-500">
              Built for agencies & property developers. © {new Date().getFullYear()}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
            <ul className="space-y-2">
              <li><a href="/who-we-are" className="hover:underline">Who Are We</a></li>
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
            <p className="mt-2">LinkedIn · Twitter · Instagram</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
