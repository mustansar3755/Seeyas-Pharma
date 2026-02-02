import React from "react";
import { Mail, Phone, Clock } from "lucide-react";

/* Individual Principle Card */
export const PrincipleCard = ({ icon: Icon, title, description }) => (
  <div className="group bg-white p-8 rounded-3xl border border-teal-200 hover:border-teal-500 transition-all duration-500 shadow-sm">
    <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="w-7 h-7 text-teal-600" />
    </div>

    <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
      {title}
    </h3>

    <p className="text-gray-600 leading-relaxed font-light">
      {description}
    </p>
  </div>
);

/* Sidebar Contact Info (NON-STICKY) */
export const SafetyContactInfo = () => (
  <div className="bg-white p-8 rounded-[2.5rem] border border-teal-200 shadow-md">
    
    <div className="inline-flex items-center gap-2 bg-teal-50 px-3 py-1 rounded-full mb-6 border border-teal-100">
      <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
      <span className="text-[10px] uppercase tracking-widest text-teal-700 font-bold">
        24/7 Monitoring
      </span>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mb-8">
      Direct Channels
    </h3>

    <div className="space-y-8">
      {[
        { icon: Mail, label: "Email", val: "pv.safety@seeyaspharma.com" },
        { icon: Phone, label: "Safety Hotline", val: "+1 (555) 123-4567" },
        { icon: Clock, label: "Response Time", val: "Within 24 Hours" },
      ].map((item, i) => (
        <div key={i} className="flex gap-4 group">
          
          <div className="p-3 bg-teal-50 rounded-xl h-fit border border-teal-100 group-hover:bg-teal-100 transition-colors">
            <item.icon className="w-5 h-5 text-teal-600" />
          </div>

          <div>
            <p className="text-xs text-teal-600 uppercase tracking-widest font-bold mb-1">
              {item.label}
            </p>
            <p className="text-gray-800 font-medium break-all">
              {item.val}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
