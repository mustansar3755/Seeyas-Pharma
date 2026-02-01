import React, { useRef } from 'react';
import { Cpu, Factory, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ManufacturingTech = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    // Image slide in from left
    gsap.fromTo(imageRef.current, 
      { opacity: 0, x: -100 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1.2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );

    // Content slide in from right
    gsap.fromTo(contentRef.current, 
      { opacity: 0, x: 100 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1.2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Image with Decorative Frame */}
          <div ref={imageRef} className="w-full lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl"></div>
            <div className="relative z-10 p-2 bg-white rounded-[2.5rem] shadow-xl border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                alt="Modern Manufacturing Facility" 
                className="rounded-4xl w-full h-full object-cover shadow-inner"
              />
            </div>
            {/* Stats Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg border border-teal-50 border-l-4 border-l-teal-500 hidden md:block z-20">
              <p className="text-teal-600 font-bold text-2xl">100%</p>
              <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold">Automated</p>
            </div>
          </div>

          {/* Right Side: Content */}
          <div ref={contentRef} className="w-full lg:w-1/2">
            <span className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Facility</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              Smart <span className="text-teal-600">Manufacturing</span>
            </h2>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
              Our state-of-the-art facilities utilize SCADA-integrated systems to ensure zero-defect production across all pharmaceutical dosage forms. 
            </p>
            
            <div className="grid gap-8">
              {/* Feature 1 */}
              <div className="flex gap-6 group">
                <div className="shrink-0 w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Cpu size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Fully Automated Lines</h4>
                  <p className="text-slate-500 leading-relaxed italic">Minimal human intervention to ensure high-precision dosage and consistent quality.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-6 group">
                <div className="shrink-0 w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Quality by Design (QbD)</h4>
                  <p className="text-slate-500 leading-relaxed italic">Strict adherence to cGMP protocols, building quality into the process from start to finish.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ManufacturingTech;