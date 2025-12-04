import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import MarkPage from "./MarkPage";
import SarahPage from "./SarahPage";
import DavidPage from "./DavidPage";
import Services from "./Services";
import WhoWeAre from "./WhoWeAre";
import WhyChooseUs from "./WhyChooseUs";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Integrations from "./Integrations";
import Privacy from "./Privacy";
import Terms from "./Terms";
import Cookies from "./Cookies";

import StickyDemoCta from "./StickyDemoCta";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Agents */}
        <Route path="/agents/mark" element={<MarkPage />} />
        <Route path="/agents/sarah" element={<SarahPage />} />
        <Route path="/agents/david" element={<DavidPage />} />

        {/* Company */}
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/services" element={<Services />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />

        {/* Extras */}
        <Route path="/integrations" element={<Integrations />} />

        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>

      <StickyDemoCta />
    </Router>
  );
}
