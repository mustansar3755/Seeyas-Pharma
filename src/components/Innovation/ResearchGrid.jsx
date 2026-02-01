import React, { useRef } from 'react';
import { Beaker, Microscope, TestTube2 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const researchAreas = [
  {
    title: "Formulation Science",
    desc: "Developing complex generics and value-added medicines using advanced drug delivery systems.",
    icon: <Beaker size={32} className="text-teal-600" />
  },
  {
    title: "Analytical Research",
    desc: "State-of-the-art labs ensuring stability and purity of every molecule we produce.",
    icon: <Microscope size={32} className="text-teal-600" />
  },
  {
    title: "Clinical Excellence",
    desc: "Rigorous bio-equivalence studies to match international therapeutic benchmarks.",
    icon: <TestTube2 size={32} className="text-teal-600" />
  }
];

const ResearchGrid = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.research-card');
    
    // Cards Animation - Clean slide up
    gsap.fromTo(cards, 
      { 
        opacity: 0, 
        y: 40 
      }, 
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%", 
          toggleActions: "play none none reverse",
        }
      }
    );

    // Title Animation
    gsap.fromTo('.research-title-text', 
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.research-title-text',
          start: "top 90%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Subtle Background Pattern (Optional) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 research-title-text">
          <span className="text-teal-600 font-bold tracking-widest uppercase text-sm">Innovation</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3">
            Research <span className="text-teal-600">Focus</span>
          </h2>
          <div className="w-20 h-1.5 bg-teal-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {researchAreas.map((area, i) => (
            <div 
              key={i} 
              className="research-card group p-10 rounded-4xl bg-slate-50 border
               border-slate-300 hover:bg-white hover:border-teal-100 hover:shadow-[0_20px_50px_rgba(20,184,166,0.1)] transition-all duration-500"
            >
              <div className="mb-8 p-5 bg-teal-50 rounded-2xl inline-block group-hover:bg-teal-500 group-hover:text-white transition-colors duration-500 text-teal-600">
                {/* Clone icon to change color on hover easily */}
                {React.cloneElement(area.icon, { className: "transition-colors duration-500 group-hover:text-white" })}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-teal-700 transition-colors">
                {area.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {area.desc}
              </p>

              {/* Bottom Decorative Element */}
              <div className="mt-8 w-0 h-1 bg-teal-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchGrid;