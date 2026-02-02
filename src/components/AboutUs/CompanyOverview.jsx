import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import assets from "../../assets/assets";

gsap.registerPlugin(ScrollTrigger);

const CompanyOverview = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".overview-content", {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
    >
      <div className="overview-content grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight">
            Who We <span className="text-emerald-600">Are</span>
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Seeyas Pharma stands as a beacon of excellence in the
              pharmaceutical distribution industry, proudly serving as a
              distinguished member of the renowned Seeyas Group, U.S.A.
            </p>
            <p>
              Our commitment to maintaining the highest standards of quality,
              safety, and efficiency has earned us recognition as one of the
              leading pharmaceutical distributors in the region.
            </p>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-emerald-500/10 rounded-[3rem] blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700"></div>
          <div className="relative bg-white rounded-[2.5rem] shadow-2xl p-4 border border-gray-50 overflow-hidden">
            <img
              src={assets.Company_Overview}
              alt="Logo"
              className="w-full rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="p-6 text-center">
              <p className="font-bold text-gray-900">Member of Seeyas Group</p>
              <p className="text-sm text-gray-400">
                Established Excellence in U.S.A
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
