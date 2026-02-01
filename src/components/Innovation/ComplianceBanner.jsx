import React, { useRef } from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ComplianceBanner = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Badges pop-up animation
    gsap.fromTo(".compliance-badge", 
      { scale: 0.8, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.6, 
        stagger: 0.2, 
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative py-24 overflow-hidden"
    >
      {/* Dynamic Background: Teal to Emerald Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-teal-600 via-emerald-600 to-emerald-700"></div>
      
      {/* Decorative Abstract Circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-400/20 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Animated Icon */}
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 animate-pulse">
            <ShieldCheck size={48} className="text-emerald-100" />
          </div>
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
          Uncompromised <span className="text-emerald-200">Quality</span>
        </h2>
        
        <p className="text-emerald-50 text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Our global certifications are a testament to our commitment to safety, 
          adhering to the most stringent international regulatory standards.
        </p>

        {/* Compliance Badges */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {[
            { label: "WHO-GMP", detail: "Certified Practice" },
            { label: "ISO 9001:2015", detail: "Quality Management" },
            { label: "US-FDA", detail: "Compliant Facility" }
          ].map((item, index) => (
            <div 
              key={index} 
              className="compliance-badge group relative bg-white/10 backdrop-blur-md border border-white/20 p-1 rounded-2xl transition-all duration-300 hover:bg-white/20 hover:-translate-y-2 shadow-xl"
            >
              <div className="px-8 py-4 rounded-xl border border-white/10 flex flex-col items-center">
                <span className="text-white font-black text-lg tracking-widest">{item.label}</span>
                <div className="flex items-center gap-2 mt-1">
                  <CheckCircle2 size={12} className="text-emerald-300" />
                  <span className="text-emerald-200 text-[10px] uppercase font-bold tracking-widest">{item.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Trust Text */}
        <p className="mt-16 text-emerald-100/60 text-sm font-medium tracking-[0.3em] uppercase">
          Trusted by healthcare professionals worldwide
        </p>
      </div>
    </section>
  );
};

export default ComplianceBanner;