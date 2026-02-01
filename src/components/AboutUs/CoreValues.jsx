import { Shield, Award, Users, Package, Truck, Crown } from "lucide-react";
import React from "react";

const values = [
    { 
      title: "Integrity", 
      icon: <Shield />, 
      color: "text-emerald-600", 
      bg: "bg-emerald-50",
      desc: "We operate with complete transparency and honesty in all our business dealings and regulatory requirements."
    },
    { 
      title: "Excellence", 
      icon: <Award />, 
      color: "text-cyan-600", 
      bg: "bg-cyan-50",
      desc: "We are committed to delivering superior quality in every aspect, from product selection to final delivery."
    },
    { 
      title: "Partnership", 
      icon: <Users />, 
      color: "text-blue-600", 
      bg: "bg-blue-50",
      desc: "Building long-term relationships based on mutual respect, shared success, and collaborative growth."
    },
    { 
      title: "Quality", 
      icon: <Package />, 
      color: "text-emerald-600", 
      bg: "bg-emerald-50",
      desc: "Rigorous quality checks ensure every product meets international pharmaceutical standards."
    },
    { 
      title: "Reliability", 
      icon: <Truck />, 
      color: "text-cyan-600", 
      bg: "bg-cyan-50",
      desc: "Advanced logistics ensure timely arrival while maintaining product integrity throughout the journey."
    },
    { 
      title: "Innovation", 
      icon: <Crown />, 
      color: "text-blue-600", 
      bg: "bg-blue-50",
      desc: "Continuous investment in cutting-edge technology to improve supply chain efficiency."
    },
];

const CoreValues = () => (
  <div className="py-24 bg-gray-50/50">
    <div className="max-w-7xl mx-auto px-4">
      {/* Header Section */}
      <div className="text-center mb-20">
          <span className="text-emerald-600 font-bold tracking-[0.3em] uppercase text-sm">Our Foundation</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">Our Core <span className="text-emerald-600">Values</span></h2>
          <div className="w-20 h-1.5 bg-emerald-600 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((v, i) => (
          <div 
            key={i} 
            className="group relative p-10 bg-white rounded-[2.5rem] border border-gray-100 
                       transition-all duration-500 ease-in-out
                       hover:-translate-y-3 hover:shadow-2xl hover:shadow-emerald-900/5 overflow-hidden"
          >
            {/* Background Accent (Hover par visible hoga) */}
            <div className={`absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 transition-all duration-700 
                            rounded-full opacity-0 group-hover:opacity-10 ${v.bg} scale-150`}></div>

            {/* Icon Box */}
            <div className={`w-16 h-16 ${v.bg} ${v.color} rounded-2xl flex items-center justify-center mb-8 
                             transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm`}>
              {React.cloneElement(v.icon, { size: 30, strokeWidth: 2.5 })}
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
              {v.title}
            </h3>
            <p className="text-gray-500 leading-relaxed font-medium">
              {v.desc}
            </p>

            {/* Bottom Border Animation */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-emerald-600 transition-all duration-500 group-hover:w-full"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default CoreValues;