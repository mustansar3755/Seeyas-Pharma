import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';
import assets from "../../assets/assets";

gsap.registerPlugin(ScrollTrigger);

const DigitalJourney = () => {
  const container = useRef();
  const imageRef = useRef();

  useGSAP(() => {
    // 1. Smooth Clip-Path Animation for Image
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: ".journey-grid",
        start: "top 80%",
        end: "top 20%",
        scrub: 1.2, // Adds inertia for buttery smoothness
      },
      clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
      webkitClipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
      ease: "none",
    });

    // 2. Content stagger animation
    gsap.from(".journey-text", {
      scrollTrigger: {
        trigger: ".journey-grid",
        start: "top 80%",
      },
      x: -40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    });
  }, { scope: container });

  const milestones = [
    { year: "2022", detail: "Digitalized field force and distributor portal for seamless tracking." },
    { year: "2023", detail: "Integrated cross-functional document workflows to reduce paper waste." },
    { year: "2024", detail: "Converted all SOPs and approvals to secure electronic platforms." },
  ];

  return (
    <section ref={container} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="journey-grid grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="space-y-10">
            <div className="journey-text">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                Our <span className="text-emerald-600">Digital</span> Journey
              </h2>
              <div className="w-20 h-1.5 bg-emerald-500 rounded-full"></div>
            </div>

            <div className="space-y-8">
              {milestones.map((item, index) => (
                <div key={index} className="journey-text flex gap-5 group">
                  <div className="mt-1">
                    <CheckCircle2 className="w-7 h-7 text-emerald-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                      {item.year} <span className="h-px w-8 bg-slate-200 inline-block"></span>
                    </h3>
                    <p className="text-slate-600 leading-relaxed mt-2 text-lg font-light">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Animated Image */}
          <div className="relative">
            <div 
              ref={imageRef}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-slate-100"
              style={{ 
                // Initial State: Slanted/Cut based on your values
                clipPath: "polygon(26% 19%, 0% 100%, 100% 100%, 100% 0%)",
                WebkitClipPath: "polygon(26% 19%, 0% 100%, 100% 100%, 100% 0%)",
                willChange: "clip-path",
                transform: "translateZ(0)" // Hardware acceleration
              }}
            >
              <img 
                src={assets.Digital_Journey_Img || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"} 
                alt="Digital Transformation" 
                className="w-full h-137.5 object-cover"
              />
            </div>
            
            {/* Background Decorative Circles */}
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-emerald-50 rounded-full -z-10 blur-3xl opacity-60"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full -z-10 blur-2xl opacity-60"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DigitalJourney;