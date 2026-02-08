import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Factory, Droplets, FlaskConical } from "lucide-react";
import assets from "../../assets/assets";

const Manufacturing = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".plant-img", {
      scrollTrigger: {
        trigger: ".plant-img",
        start: "top 80%",
      },
      x: -50,
      opacity: 0,
      duration: 1,
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 plant-img">
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-500/10 rounded-3xl -rotate-3"></div>
            <img 
              src={assets.PlantImg} // Manufacturing plant image
              alt="Seeyas Manufacturing" 
              className="relative rounded-2xl shadow-2xl w-full h-125 object-cover"
            />
          </div>
        </div>
        
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Advanced <span className="text-emerald-600">Manufacturing</span> Infrastructure
          </h2>
          <p className="text-gray-600 text-lg">
            Our state-of-the-art facility is equipped with high-precision machinery 
            and automated systems ensuring every product meets global standards.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="bg-emerald-100 p-3 rounded-lg h-fit text-emerald-600"><Factory size={24}/></div>
              <div>
                <h4 className="font-bold">Automated Units</h4>
                <p className="text-sm text-gray-500">Fully controlled environment</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-emerald-100 p-3 rounded-lg h-fit text-emerald-600"><Droplets size={24}/></div>
              <div>
                <h4 className="font-bold">Water Purification</h4>
                <p className="text-sm text-gray-500">Reverse Osmosis & UV systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manufacturing;