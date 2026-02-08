import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target } from 'lucide-react';
import assets from "../../assets/assets";

gsap.registerPlugin(ScrollTrigger);

const JoinMission = () => {
  const container = useRef();
  const imageRef = useRef();

  useGSAP(() => {
    // Smooth clip-path transition (Right side slanted to square)
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: ".mission-grid",
        start: "top 85%",
        end: "top 25%",
        scrub: 1.5,
      },
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power1.inOut",
    });

    // Content fade-in
    gsap.from(".mission-content", {
      scrollTrigger: {
        trigger: ".mission-grid",
        start: "top 80%",
      },
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power3.out",
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 bg-white overflow-hidden">
      <div className="mission-grid max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        
        {/* Left Side: Message Content */}
        <div className="mission-content w-full lg:w-1/2 p-8 lg:p-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-red-100 rounded-full">
              <Target className="w-10 h-10 text-red-600" />
            </div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">
              Join Our Mission
            </h2>
          </div>

          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p className="font-medium text-slate-800">
              At Seeyas Pharmaceuticals, we believe that:
            </p>
            
            <blockquote className="border-l-4 border-emerald-500 pl-6 italic text-xl text-slate-700 py-2">
              "Every document saved digitally is a step towards a 
              <span className="text-emerald-600 font-bold"> cleaner environment</span>. 
              Going digital is not just efficiency; it's about our part for the 
              <span className="text-emerald-600 font-bold"> Planet</span>."
            </blockquote>

            <div className="pt-8">
              <h4 className="text-xl font-bold text-slate-900">Shamim Ahmed</h4>
              <p className="text-emerald-600 font-semibold tracking-widest uppercase text-sm">
                Managing Director
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Slanted Image with GSAP Reveal */}
        <div className="w-full lg:w-1/2 h-125 lg:h-162.5 relative">
          <div 
            ref={imageRef}
            className="w-full h-full overflow-hidden shadow-2xl"
            style={{ 
              // Initial State: Right side slanted reveal (matching your provided image)
              clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
              WebkitClipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
              willChange: "clip-path",
              transform: "translateZ(0)"
            }}
          >
            <img 
              src={assets.Mission_Img || "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"} 
              alt="Environmental Mission" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default JoinMission;