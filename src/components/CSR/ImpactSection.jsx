import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leaf, Activity, BarChart3 } from "lucide-react";
import assets from "../../assets/assets";

gsap.registerPlugin(ScrollTrigger);

const ImpactSection = () => {
  const container = useRef();
  const imageRef = useRef();

  useGSAP(
    () => {
      // Smooth clip-path transition
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 90%", // Thoda jaldi start hoga
          end: "top 20%",
          scrub: 1.5, // 1.5 dene se smoothing (inertia) barh jati hai, atakti nahi
        },
        // Note: Dono strings mein points ki tadaad (number of points) same honi chahiye
        clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
        webkitClipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
        ease: "power1.inOut",
      });

      // Simple fade for text to keep it lightweight
      gsap.from(".impact-content", {
        scrollTrigger: {
          trigger: ".impact-table",
          start: "top 85%",
        },
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out",
      });
    },
    { scope: container },
  );

  const impactData = [
    { saved: "1400+ trees", effect: "Forest preservation" },
    { saved: "350,000+ Km Car driving", effect: "Fuel" },
    { saved: "240,000+ liters of water", effect: "Used in paper production" },
    { saved: "86 Tons of CO2", effect: "Emissions avoided" },
  ];

  return (
    <section ref={container} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Animated Image */}
        <div className="relative">
          <div
            ref={imageRef}
            className="relative h-125 w-full overflow-hidden shadow-2xl bg-slate-200"
            style={{
              // Initial Slant with explicit percentages for smoothness
              clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 69% 31%)",
              WebkitClipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 69% 31%)",
              willChange: "clip-path", // Browser ko advance mein batata hai ke ye change hoga
              transform: "translateZ(0)", // Hardware acceleration trigger karta hai
            }}
          >
            <img
              src={assets.CSR_Hero_BG}
              alt="Environmental Impact"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: Table Content */}
        <div className="impact-content space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-100 rounded-2xl">
              <BarChart3 className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">
              Impact at a Glance
            </h2>
          </div>

          <div className="impact-table border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-white">
            <div className="grid grid-cols-2 bg-slate-900 text-white p-5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold">
                <Leaf className="w-4 h-4 text-emerald-400" /> What We Saved
              </div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold">
                <Activity className="w-4 h-4 text-blue-400" /> Impact
              </div>
            </div>

            {impactData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-2 p-5 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors"
              >
                <div className="font-bold text-slate-800 text-lg">
                  {item.saved}
                </div>
                <div className="text-slate-500 font-medium">{item.effect}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
