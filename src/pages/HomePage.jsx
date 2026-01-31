import {
  ArrowRight,
  Award,
  Crown,
  Globe,
  Package,
  Send,
  Shield,
  Truck,
  Users,
} from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
// 1. Official GSAP Imports
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const navigate = useNavigate();
  // 2. Create standard refs
  const heroRef = useRef(null);
  const featuresRef = useRef(null);

  // 3. Hero Animations
  useGSAP(() => {
    gsap.from(".hero-animate", {
      duration: 1,
      y: 40,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, { scope: heroRef });

  // 4. Features Animations with ScrollTrigger
  useGSAP(() => {
    gsap.from(".feature-card", {
      duration: 0.8,
      y: 60,
      opacity: 0,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: featuresRef.current,
        start: "top 85%",
      },
    });
  }, { scope: featuresRef });

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-cyan-50 overflow-x-hidden">
      {/* Hero Section */}
      <div ref={heroRef} className="relative pt-12 pb-16 lg:pt-32 lg:pb-28">
        <div className="absolute top-0 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 lg:w-96 lg:h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
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

            <div className="flex-1 flex justify-center order-1 lg:order-2 w-full max-w-sm sm:max-w-md lg:max-w-full">
              <div className="relative group">
                <div className="absolute inset-0 bg-linear-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                {/* Ensure path is correct for your public folder */}
                <div className="relative w-full aspect-square bg-gray-200 rounded-3xl shadow-2xl overflow-hidden border border-white/50">
                   <img
                    src="/assets/images/Pharma.jpg" 
                    alt="Seeyas Pharma Logo"
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div ref={featuresRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Partner With Us?
          </h2>
          <div className="h-1.5 w-24 bg-emerald-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Experience excellence in pharmaceutical distribution with a partner
            that values integrity and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            { icon: Package, title: "Quality Products", desc: "Access to premium pharmaceutical products meeting international quality standards.", color: "emerald" },
            { icon: Truck, title: "Reliable Distribution", desc: "Fast and reliable delivery network ensuring products reach customers on time.", color: "cyan" },
            { icon: Award, title: "Industry Excellence", desc: "Recognized leader in distribution with decades of deep-rooted expertise.", color: "emerald" },
            { icon: Shield, title: "Compliance & Safety", desc: "Full regulatory compliance and adherence to the highest safety standards.", color: "cyan" },
            { icon: Users, title: "Partner Support", desc: "Dedicated support team to help you succeed and grow your business.", color: "emerald" },
            { icon: Crown, title: "Global Network", desc: "Part of the prestigious Seeyas Group with vast international resources.", color: "cyan" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="feature-card group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl duration-300 border border-gray-100 hover:-translate-y-2"
            >
              <div className="bg-emerald-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white group-hover:rotate-6 transition-transform">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-r from-emerald-800 to-emerald-600 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg text-emerald-50 mb-10 opacity-90">
            Join our network of successful pharmaceutical distributors and
            elevate your healthcare reach.
          </p>
          <button
            onClick={() => navigate("/apply")}
            className="w-full sm:w-auto bg-white text-emerald-800 px-10 py-5 rounded-xl font-bold text-xl hover:bg-emerald-50 transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-3"
          >
            Apply Now
            <Send className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;