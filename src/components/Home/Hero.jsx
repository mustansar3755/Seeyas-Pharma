import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight, Crown } from "lucide-react";
import React, { useRef } from "react";
// useNavigate import karna zaroori hai
import { useNavigate } from "react-router-dom"; 
import assets from "../../assets/assets";

const Hero = () => {
  // 1. Navigate define karein
  const navigate = useNavigate();
  const heroRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".hero-animate", {
        duration: 1,
        y: 40,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out",
      });
    },
    { scope: heroRef },
  );

  return (
    <div ref={heroRef} className="relative pt-10 pb-16 lg:pt-32 lg:pb-28">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 lg:w-96 lg:h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="hero-animate inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6 font-semibold text-sm sm:text-base">
              <Crown className="w-4 h-4" />
              <span>Member of Seeyas Group</span>
            </div>

            <h1 className="hero-animate text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 bg-linear-to-r from-emerald-700 via-emerald-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
              SEEYAS PHARMA
            </h1>

            <p className="hero-animate text-lg sm:text-xl lg:text-2xl text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Your Trusted Partner in Pharmaceutical Excellence and
              Distribution. Delivering health and hope through quality.
            </p>

            <div className="hero-animate flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => navigate("/apply")}
                className="group bg-linear-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-emerald-200 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Apply for Distribution
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Content - Image Box */}
          <div className="flex-1 flex justify-center order-1 lg:order-2 w-full max-w-sm sm:max-w-md lg:max-w-full">
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              
              <div className="relative w-full aspect-square bg-gray-100 rounded-3xl shadow-2xl overflow-hidden border border-white/50">
                <img
                  src={assets.HeroImg}
                  alt="Seeyas Pharma Hero"
                  className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-700 ease-in-out"
                  // Error handling agar image path galat ho
                  onError={(e) => {
                    e.target.src = "https://placehold.co/600x600?text=Pharma+Image";
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;