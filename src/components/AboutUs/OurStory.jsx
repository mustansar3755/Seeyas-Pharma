import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Globe, FlaskConical, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "1995",
    title: "Founding Vision",
    desc: "Established with a commitment to bridge the gap in affordable healthcare, starting our journey with a state-of-the-art manufacturing unit.",
    icon: <FlaskConical className="text-white" size={22} />,
  },
  {
    year: "2005",
    title: "Global Footprint",
    desc: "Expanded operations beyond borders, successfully exporting high-quality formulations to over 10 countries across emerging markets.",
    icon: <Globe className="text-white" size={22} />,
  },
  {
    year: "2015",
    title: "World-Class Compliance",
    desc: "Our manufacturing facilities achieved prestigious international certifications, meeting WHO-standard Quality Management Systems.",
    icon: <Award className="text-white" size={22} />,
  },
  {
    year: "2024",
    title: "Healthcare Leadership",
    desc: "Today, we stand as a leading pharmaceutical force, impacting millions of lives through innovation, research, and unwavering care.",
    icon: <Users className="text-white" size={22} />,
  },
];

const OurStory = () => {
  const containerRef = useRef(null);
  const progressLineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Line Drawing Animation (Scrubbing)
      gsap.fromTo(
        progressLineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-wrapper",
            start: "top 70%",
            end: "bottom 80%",
            scrub: 1,
          },
        }
      );

      // 2. Updated Card Animations
      milestones.forEach((_, i) => {
        gsap.fromTo(
          `.milestone-${i}`,
          { 
            opacity: 0, 
            y: 50, 
            scale: 0.95 
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: `.milestone-${i}`,
              start: "top 85%", // Jab card 85% screen par aaye to show ho
              // toggleActions parameters: onEnter, onLeave, onEnterBack, onLeaveBack
              toggleActions: "play none none reverse", 
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#EFF6FF] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="story-header text-center mb-20">
          <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs">Our Journey</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3">Our Story & Legacy</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="relative timeline-wrapper">
          {/* Background Static Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-slate-200"></div>
          
          {/* Animated Progress Line */}
          <div 
            ref={progressLineRef}
            className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.75 bg-blue-600 origin-top z-0"
          ></div>

          <div className="space-y-24 relative z-10">
            {milestones.map((item, index) => (
              <div 
                key={index} 
                className={`milestone-${index} flex flex-col lg:flex-row items-center justify-between w-full ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className="w-full lg:w-[46%]">
                  <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100">
                      <span className="text-blue-700 font-bold text-lg">{item.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-left">{item.desc}</p>
                  </div>
                </div>

                {/* Center Icon Node */}
                <div className="hidden lg:flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)] border-4 border-white">
                  {item.icon}
                </div>

                <div className="hidden lg:block w-[46%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;