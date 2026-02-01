import React from "react";

const BrandStrip = () => {
  return (
    <div className="bg-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
        <span className="text-white font-bold text-xl tracking-tighter italic">
          PFIZER
        </span>
        <span className="text-white font-bold text-xl tracking-tighter italic">
          NOVARTIS
        </span>
        <span className="text-white font-bold text-xl tracking-tighter italic">
          GSK
        </span>
        <span className="text-white font-bold text-xl tracking-tighter italic">
          SANOFI
        </span>
        <span className="text-white font-bold text-xl tracking-tighter italic">
          ABBOTT
        </span>
      </div>
    </div>
  );
};

export default BrandStrip;
