import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Globe2, Building2, Users, MapPin } from "lucide-react";

const statsData = [
  { label: "Countries", value: 25, suffix: "+", icon: <Globe2 size={22} />, color: "text-emerald-600", bg: "group-hover:bg-emerald-50" },
  { label: "Regional Hubs", value: 4, suffix: "", icon: <Building2 size={22} />, color: "text-cyan-600", bg: "group-hover:bg-cyan-50" },
  { label: "Employees", value: 500, suffix: "+", icon: <Users size={22} />, color: "text-emerald-700", bg: "group-hover:bg-emerald-50" },
  { label: "Partners", value: 40, suffix: "+", icon: <MapPin size={22} />, color: "text-cyan-700", bg: "group-hover:bg-cyan-50" },
];

const GlobalStats = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="relative z-20 -mt-16 container mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {statsData.map((stat, i) => (
          <div 
            key={i} 
            className="group relative py-6 px-8 rounded-2xl bg-white border border-slate-100 
                       hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 
                       flex items-center gap-5 overflow-hidden"
          >
            {/* Minimal Hover Decor */}
            <div className={`absolute top-0 right-0 w-16 h-16 rounded-bl-full opacity-0 
                             group-hover:opacity-10 transition-opacity duration-500 ${stat.bg}`}></div>

            {/* Icon Section - Smaller & Compact */}
            <div className={`relative z-10 p-3 rounded-xl transition-all duration-300 
                             ${stat.color} bg-slate-50 group-hover:bg-emerald-600 group-hover:text-white shrink-0`}>
              {stat.icon}
            </div>

            {/* Content Section - Left Aligned for better height management */}
            <div className="relative z-10 text-left">
              <div className="text-2xl lg:text-3xl font-black tracking-tight text-slate-900 flex items-center leading-none">
                {inView ? (
                  <CountUp start={0} end={stat.value} duration={2} />
                ) : (
                  <span>0</span>
                )}
                <span className="text-emerald-600 ml-0.5">{stat.suffix}</span>
              </div>
              
              <div className="text-gray-400 font-bold uppercase text-[9px] tracking-widest mt-1.5">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobalStats;