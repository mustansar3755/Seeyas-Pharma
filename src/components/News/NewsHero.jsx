import React, { useRef } from "react";
import { Newspaper } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NewsHero = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".news-header", {
        duration: 1.2,
        y: -50,
        opacity: 0,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gray-900 py-28 lg:py-36"
    >
      {/* Background Image Section */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1585435557343-3b092031a831?w=1600&auto=format&fit=crop&q=80"
          alt="News and Events Background"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Gradient Overlay - Matching your AboutHero style */}
        <div className="absolute inset-0 bg-linear-to-b from-blue-950/70 via-gray-900/70 to-gray-900/60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        <div className="news-header">
          {/* Badge - Newspaper Icon for News Context */}
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 px-4 py-2 rounded-full mb-8 font-semibold">
            <Newspaper className="w-4 h-4 text-blue-400" />
            <span className="text-xs uppercase tracking-[0.2em] text-blue-100">
              Latest Updates
            </span>
          </div>

          {/* Title - Bold and Impactful */}
          <h1 className="text-5xl lg:text-8xl font-black mb-8 tracking-tight">
            News & <span className="text-blue-400">Events</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Stay informed with the latest breakthroughs, corporate milestones, 
            and health initiatives from Getz Pharma.
          </p>
        </div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-900/40 to-transparent"></div>
    </div>
  );
};

export default NewsHero;