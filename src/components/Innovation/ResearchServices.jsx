import React, { useState, useRef } from "react";
import {
  Plus,
  Minus,
  BookOpen,
  Microscope,
  GraduationCap,
  FileEdit,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import assets from "../../assets/assets";

const services = [
  {
    title: "Literature Research",
    desc: "Comprehensive review of medical and scientific literature to support clinical findings and drug development.",
    icon: <BookOpen size={24} />,
  },
  {
    title: "Research Methodology",
    desc: "Structured approach to scientific investigations, protocol design, and statistical data collection.",
    icon: <Microscope size={24} />,
  },
  {
    title: "Scientific Publications",
    desc: "Assistance in publishing research findings in reputable global medical journals and clinical platforms.",
    icon: <GraduationCap size={24} />,
  },
  {
    title: "Synopsis Writing",
    desc: "Crafting precise, high-impact summaries for research protocols and academic submissions.",
    icon: <FileEdit size={24} />,
  },
];

const ResearchServices = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const container = useRef();

  useGSAP(
    () => {
      // Entrance Animation
      gsap.from(".service-item", {
        x: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Content & DNA */}
          <div className="w-full lg:w-1/2 relative">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest">
              Our Expertise
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1]">
              Research <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-600 to-emerald-500">
                Services
              </span>
            </h2>
            <p className="text-slate-600 text-xl mb-12 max-w-lg leading-relaxed font-light">
              Facilitating medical breakthroughs through clinical research,
              statistical analysis, and high-impact publication services.
            </p>

            {/* DNA Floating Image */}
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-teal-400/20 blur-[100px] rounded-full"></div>
              <img
              src={assets.Research}
                alt="DNA Helix"
                className="relative z-10 w-full h-auto rounded-xl mix-blend-multiply transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Side: Gradient Accordion Box */}
          <div className="w-full lg:w-1/2">
            <div className="relative p-px rounded-[3rem] bg-linear-to-b from-teal-400
             to-emerald-600 shadow-2xl shadow-teal-900/20">
              <div className="bg-teal-900/95 backdrop-blur-2xl rounded-[3rem] p-8 md:p-12">
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`service-item group rounded-2xl ${
                        openIndex === index ? "bg-white/10" : "hover:bg-white/5"
                      }`}
                    >
                      <button
                        onClick={() =>
                          setOpenIndex(openIndex === index ? -1 : index)
                        }
                        className="w-full flex items-center gap-5 text-left p-5 text-white"
                      >
                        {/* Icon Container */}
                        <div
                          className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                            openIndex === index
                              ? "bg-teal-500 text-white shadow-[0_0_20px_rgba(20,184,166,0.4)]"
                              : "bg-white/10 text-teal-300"
                          }`}
                        >
                          {service.icon}
                        </div>

                        <span className="grow text-lg md:text-xl font-bold tracking-wide">
                          {service.title}
                        </span>

                        {/* Toggle Icon */}
                        <div
                          className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all ${
                            openIndex === index
                              ? "rotate-180 bg-white text-teal-900"
                              : "rotate-0"
                          }`}
                        >
                          {openIndex === index ? (
                            <Minus size={16} />
                          ) : (
                            <Plus size={16} />
                          )}
                        </div>
                      </button>

                      {/* Description Area */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          openIndex === index
                            ? "max-h-40 opacity-100 pb-6 px-20"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-teal-100/70 text-base leading-relaxed border-l-2 border-teal-500/30 pl-4">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchServices;
