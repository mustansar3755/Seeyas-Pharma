import React from "react";
import { ShieldCheck, Zap } from "lucide-react";
import assets from "../../assets/assets";

const ProductShowcase = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-bold uppercase tracking-wider">
              <ShieldCheck size={16} /> Certified Quality
            </div>
            <h2 className="text-4xl lg:text-5xl font-black italic">
              UNCOMPROMISED <br /> 
              <span className="text-emerald-500">STERILE SOLUTIONS</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Specializing in high-potency liquid vials and specialized pharmaceutical 
              packaging. Our products are stored under strict temperature controls 
              to maintain molecular integrity.
            </p>
            <button className="flex items-center gap-3 font-bold border-b-2 border-emerald-500 pb-2 hover:text-emerald-400 transition-colors">
              VIEW PHARMACEUTICAL CATALOGUE <Zap size={18} />
            </button>
          </div>

          <div className="relative grid grid-cols-2 gap-4">
             {/* Vials Image */}
            <div className="space-y-4 pt-12">
              <img src={assets.VialsImg} alt="Vials" className="rounded-2xl shadow-emerald-500/20 shadow-xl" />
              <img src={assets.DarkBottlesImg} alt="Bottles" className="rounded-2xl" />
            </div>
             {/* Tablets/Pills Image */}
            <div className="space-y-4">
              <img src={assets.PillsNotebookImg} alt="Pills" className="rounded-2xl" />
              <img src={assets.CapsulesImg} alt="Capsules" className="rounded-2xl shadow-emerald-500/20 shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;