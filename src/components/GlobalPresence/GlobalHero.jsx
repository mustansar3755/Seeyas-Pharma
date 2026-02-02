import { Globe2 } from "lucide-react"; // Global theme ke liye icon change kiya
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import assets from "../../assets/assets";

const GlobalHero = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".global-header", {
        duration: 1.2,
        y: -50,
        opacity: 0,
        ease: "power3.out",
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gray-900 py-28 lg:py-36"
    >
      {/* Background Image Section (World/Global theme image) */}
      <div className="absolute inset-0 z-0">
        <img
        src={assets.Global_Presence}
          alt="Global Network Background"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Modern Gradient Overlay (Dark Emerald to Transparent) */}
        <div
          className="absolute inset-0 bg-linear-to-b from-emerald-950/70 via-gray-900/70 to-gray-900/60"
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        <div className="global-header">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 px-4 py-2 rounded-full mb-8 font-semibold">
            <Globe2 className="w-4 h-4 text-emerald-400" />
            <span className="text-xs uppercase tracking-[0.2em] text-emerald-100">
              International Reach
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl lg:text-8xl font-black mb-8 tracking-tight">
            Global <span className="text-emerald-400">Footprint</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Bringing High-Quality Pharmaceutical Standards to Markets Across 
            Europe, Asia, and Africa.
          </p>
        </div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-900 to-transparent"></div>
    </div>
  );
};

export default GlobalHero;