import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CSRHero from "../components/CSR/CSRHero";
import DigitalJourney from "../components/CSR/DigitalJourney";
import ImpactSection from "../components/CSR/ImpactSection";
import JoinMission from "../components/CSR/JoinMission";

gsap.registerPlugin(ScrollTrigger);

const CSRPage = () => {
  const container = useRef();

  useGSAP(
    () => {
      // Hero Text Animation
      gsap.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
      });

     
    },
    { scope: container },
  );

  return (
    <div ref={container} className="bg-slate-50 overflow-x-hidden">
      {/* Hero Section */}
      <CSRHero />
      <DigitalJourney />
      <ImpactSection />
      <JoinMission />
    </div>
  );
};

export default CSRPage;
