import { Beaker } from "lucide-react"; // Beaker icon research ke liye suit karta hai
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import assets from "../../assets/assets";

const InnovationHero = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".innovation-header", {
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
      {/* Background Image Section - High-tech Lab Image */}
      <div className="absolute inset-0 z-0">
        <img
        src={assets.Innovation_Hero}
          alt="Advanced Laboratory Research"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Modern Gradient Overlay (Matching your Emerald Theme) */}
        <div className="absolute inset-0 bg-linear-to-b from-emerald-950/30 via-gray-900/40 to-gray-900/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        <div className="innovation-header">
          {/* Badge - Innovation & R&D */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 px-4 py-2 rounded-full mb-8 font-semibold">
            <Beaker className="w-4 h-4 text-emerald-400" />
            <span className="text-xs uppercase tracking-[0.2em] text-emerald-100">
              Innovation & R&D
            </span>
          </div>

          {/* Title - Science & Future */}
          <h1 className="text-5xl lg:text-8xl font-black mb-8 tracking-tight">
            Pioneering <span className="text-emerald-400">Science</span>
          </h1>

          {/* Subtitle - Professional English Content */}
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Combining cutting-edge research with state-of-the-art technology to
            discover and develop the next generation of healthcare solutions.
          </p>
        </div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-900 to-transparent"></div>
    </div>
  );
};

export default InnovationHero;
