import React from "react";
// Note: Humne yahan se useEffect aur gsap import hata diya hai kyunki
// components khud apni animation handle kar rahe hain.
import InnovationHero from "../components/Innovation/InnovationHero";
import ResearchGrid from "../components/Innovation/ResearchGrid";
import ManufacturingTech from "../components/Innovation/ManufacturingTech";
import ComplianceBanner from "../components/Innovation/ComplianceBanner";
import ResearchServices from "../components/Innovation/ResearchServices";

const InnovationPage = () => {
  return (
    // Background color ko Emerald theme ke mutabiq dark rakhein
    <main className="bg-[#030712]">
      <InnovationHero />

      {/* Ab yahan "fade-section" class ki zaroorat nahi hai */}
      <ResearchGrid />

      <ManufacturingTech />
      <ResearchServices />

      {/* Compliance Banner - Emerald Theme Sync */}
      <ComplianceBanner />
    </main>
  );
};

export default InnovationPage;
