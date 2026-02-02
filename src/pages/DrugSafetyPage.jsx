import React from "react";
import { PrincipleCard } from "../components/DrugSafety/SafetyComponents";
import { AlertTriangle, ShieldCheck, Clock } from "lucide-react";
import DrugSafetyHero from "../components/DrugSafety/DrugSafetyHero";
import { FaqSection } from "../components/DrugSafety/FaqSection";

const principles = [
  {
    icon: AlertTriangle,
    title: "Adverse Event Reporting",
    description:
      "We actively collect, analyze, and report adverse drug reactions in compliance with global pharmacovigilance regulations.",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",
    description:
      "All safety processes follow international standards including ICH, WHO, and local regulatory authorities.",
  },
  {
    icon: Clock,
    title: "Continuous Monitoring",
    description:
      "Our safety team monitors drug data 24/7 to ensure rapid detection and risk mitigation.",
  },
];

const DrugSafetyPage = () => {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <DrugSafetyHero />

      {/* Content Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-4xl font-black tracking-tight mb-4">
            Our Safety Commitment
          </h2>
          <p className="text-gray-600 max-w-3xl leading-relaxed">
            Patient safety is embedded in every stage of our pharmaceutical
            lifecycle—from development to post-marketing surveillance.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((item, index) => (
            <PrincipleCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <FaqSection/>

      </section>
    </main>
  );
};

export default DrugSafetyPage;
