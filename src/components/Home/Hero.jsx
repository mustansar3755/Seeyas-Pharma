import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight, Crown } from "lucide-react";
import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import assets from "../../assets/assets";


const Hero = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  // Debugging: Check if video path is coming through
  useEffect(() => {
    console.log("Video Path:", assets.HeroVideo);
  }, []);

  useGSAP(() => {
    gsap.from(".hero-animate", {
      duration: 1,
      y: 40,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, { scope: heroRef });

  return (
    <div ref={heroRef} className="relative min-h-screen w-full flex items-center overflow-hidden bg-black">
      
      {/* --- Background Video Section --- */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Yahan assets.HeroVideo ko direct check karein */}
          <source src={assets.HeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay: Isko thoda dark rakhein taake video load na ho tab bhi text dikhe */}
        <div className="absolute inset-0 bg-black/80 bg-linear-to-b from-black/50 via-transparent to-black/60"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          <div className="flex-1 text-center lg:text-left">
            <div className="hero-animate inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-md text-emerald-300 border border-emerald-500/30 px-4 py-2 rounded-full mb-6 font-semibold text-sm">
              <Crown className="w-4 h-4" />
              <span>Member of Seeyas Group</span>
            </div>

            <h1 className="hero-animate text-5xl lg:text-8xl font-black mb-6 text-white leading-tight">
              SEEYAS <span className="text-emerald-400">PHARMA</span>
            </h1>

            <p className="hero-animate text-lg lg:text-2xl text-gray-100 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Your Trusted Partner in Pharmaceutical Excellence and
              Distribution. Delivering health and hope through quality.
            </p>

            <div className="hero-animate">
              <button
                onClick={() => navigate("/apply")}
                className="group bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 mx-auto lg:mx-0 shadow-lg shadow-emerald-900/20"
              >
                Apply for Distribution
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;