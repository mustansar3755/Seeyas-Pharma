import { Leaf, ShieldCheck } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import assets from "../../assets/assets"; // Make sure to add a relevant CSR bg image here

const CSRHero = () => {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();
      
      // Animations for a smoother entrance
      tl.from(".csr-badge", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      .from(".csr-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      }, "-=0.4")
      .from(".csr-desc", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      }, "-=0.6");
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-slate-900 py-24 lg:py-32"
    >
      {/* Background Section */}
      <div className="absolute inset-0 z-0">
        <img
          src={assets.CSR_Hero_BG || "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGxhbnQlMjBjYXJlfGVufDB8fDB8fHww"} // Fallback image
          alt="Sustainability Background"
          className="w-full h-full object-cover opacity-50 scale-105"
        />
        {/* Modern Gradient: Deep Blue to Dark Slate */}
        <div className="absolute inset-0 bg-linear-to-b from-blue-900/30 via-slate-900/40 to-slate-900"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        <div className="flex flex-col items-center">
          
          {/* Badge - Sami Pharma style impact focus */}
          <div className="csr-badge inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 px-5 py-2 rounded-full mb-8">
            <Leaf className="w-4 h-4 text-cyan-400" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-cyan-100">
              Social Responsibility
            </span>
          </div>

          {/* Title - Bold and Impactful */}
          <h1 className="csr-title text-5xl lg:text-8xl font-black mb-8 tracking-tighter leading-none">
            Healing <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-emerald-400">Beyond</span> Medicine
          </h1>

          {/* Subtitle */}
          <p className="csr-desc text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            At <span className="font-semibold text-white">Seeyas Pharmaceuticals</span>, our commitment 
            to sustainability goes beyond compliance—it’s embedded in our operations. Through a comprehensive digital transformation initiative, we have successfully eliminated the need to print over 17 million pages across our manufacturing and corporate systems.

          </p>

          {/* Call to Action or Icon Grid placeholder */}
          <div className="csr-desc mt-12 flex gap-6 text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <span className="text-sm font-medium">Ethical Practices</span>
            </div>
            <div className="flex items-center gap-2 border-l border-slate-700 pl-6">
              <Leaf className="w-5 h-5 text-emerald-500" />
              <span className="text-sm font-medium">Green Initiative</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Curve/Fade Decor */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-slate-900 to-transparent"></div>
    </div>
  );
};

export default CSRHero;