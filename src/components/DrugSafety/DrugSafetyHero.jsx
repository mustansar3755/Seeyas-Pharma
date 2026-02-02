import { ShieldCheck } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const DrugSafetyHero = () => {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();
      
      tl.from(".safety-badge", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      .from(".safety-title", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }, "-=0.4")
      .from(".safety-text", {
        opacity: 0,
        duration: 1.2,
      }, "-=0.6");
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gray-900 py-28 lg:py-36"
    >
      {/* Background Image Section */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=2000"
          alt="Pharmacovigilance Background"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Deep Emerald & Slate Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-emerald-950/40 via-gray-900/50 to-gray-900"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        {/* Badge */}
        <div className="safety-badge inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 px-5 py-2 rounded-full mb-8 font-semibold">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span className="text-xs uppercase tracking-[0.25em] text-emerald-100">
            Pharmacovigilance
          </span>
        </div>

        {/* Title */}
        <h1 className="safety-title text-5xl lg:text-7xl font-black mb-8 tracking-tight leading-tight">
          Patient Safety is Our <br />
          <span className="text-emerald-400 italic">Highest Priority</span>
        </h1>

        {/* Subtitle */}
        <p className="safety-text text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
          We are committed to global standards of drug safety monitoring, ensuring 
          that every life we touch is protected by rigorous scientific oversight.
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-gray-900 to-transparent"></div>
    </div>
  );
};

export default DrugSafetyHero;