import {
  Award,
  Crown,
  Package,
  Send,
  Shield,
  Truck,
  Users,
} from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../components/Home/Hero";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const navigate = useNavigate();
  const featuresRef = useRef(null);

  useGSAP(
    () => {
      // Entrance Animation
      gsap.from(".feature-card", {
        duration: 0.8,
        y: 60,
        opacity: 0,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 85%",
          toggleActions: "play none none none", // Taaki animation bar bar glitch na kare
        },
      });
    },
    { scope: featuresRef },
  );

  // GSAP Hover Handlers (Alternative to CSS Translate)
  const onMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      y: -10,
      duration: 0.3,
      ease: "power2.out",
      boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
    });
  };

  const onMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      y: 0,
      duration: 0.3,
      ease: "power2.out",
      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    });
  };

  const features = [
    {
      icon: Package,
      title: "Quality Products",
      desc: "Access to premium pharmaceutical products meeting international quality standards.",
    },
    {
      icon: Truck,
      title: "Reliable Distribution",
      desc: "Fast and reliable delivery network ensuring products reach customers on time.",
    },
    {
      icon: Award,
      title: "Industry Excellence",
      desc: "Recognized leader in distribution with decades of deep-rooted expertise.",
    },
    {
      icon: Shield,
      title: "Compliance & Safety",
      desc: "Full regulatory compliance and adherence to the highest safety standards.",
    },
    {
      icon: Users,
      title: "Partner Support",
      desc: "Dedicated support team to help you succeed and grow your business.",
    },
    {
      icon: Crown,
      title: "Global Network",
      desc: "Part of the prestigious Seeyas Group with vast international resources.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Hero />

      <div
        ref={featuresRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32"
      >
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

        {/* Grid Layout Fix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className="feature-card group bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col h-full transition-shadow duration-300"
            >
              <div className="bg-emerald-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-200">
                <item.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base grow">
                {item.desc}
              </p>

              {/* Optional: Visual accent */}
              <div className="mt-6 w-0 group-hover:w-full h-1 bg-emerald-500 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-emerald-900 py-20 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -mr-32 -mt-32"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg text-emerald-100 mb-10 opacity-80 max-w-xl mx-auto">
            Join our network of successful pharmaceutical distributors and
            elevate your healthcare reach.
          </p>
          <button
            onClick={() => navigate("/apply")}
            className="group w-full cursor-pointer sm:w-auto bg-white text-emerald-900
             px-10 py-5 rounded-2xl font-bold text-xl hover:bg-emerald-50 transition-all
              duration-300 shadow-xl flex items-center justify-center gap-3 mx-auto -translate-y-2"
          >
            Apply Now
            <Send className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-12" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
