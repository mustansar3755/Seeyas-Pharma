import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Distribution Partners", value: 500, suffix: "+", color: "text-emerald-600", bg: "group-hover:bg-emerald-50" },
  { label: "Countries Served", value: 15, suffix: "+", color: "text-cyan-600", bg: "group-hover:bg-cyan-50" },
  { label: "Products Distributed", value: 5000, suffix: "+", color: "text-emerald-700", bg: "group-hover:bg-emerald-50" },
  { label: "On-Time Delivery", value: 99.8, suffix: "%", color: "text-cyan-700", bg: "group-hover:bg-cyan-50" },
];

const StatsSection = () => {
  // Intersection observer to detect when section is in view
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true, // Animation sirf ek baar chale
  });

  return (
    <div ref={ref} className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Our Impact in <span className="text-emerald-600">Numbers</span>
          </h2>
          <div className="h-1.5 w-24 bg-emerald-600 mx-auto rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="group relative p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 
                         hover:bg-white hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500 
                         text-center overflow-hidden"
            >
              {/* Hover Background Decor */}
              <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-0 
                              group-hover:opacity-10 transition-opacity duration-500 ${stat.bg} scale-150`}></div>

              <div className="relative z-10">
                <div className={`text-5xl lg:text-6xl font-black mb-3 tracking-tighter ${stat.color} flex justify-center items-center`}>
                  {/* Jab inView true ho tab count start ho */}
                  {inView ? (
                    <CountUp 
                      start={0} 
                      end={stat.value} 
                      duration={2.5} 
                      decimals={stat.value % 1 !== 0 ? 1 : 0} 
                    />
                  ) : (
                    <span>0</span>
                  )}
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-gray-500 font-bold uppercase text-xs tracking-[0.2em]">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;