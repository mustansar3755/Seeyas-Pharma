import { Award, Shield } from "lucide-react";

const MissionVision = () => (
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div className="grid md:grid-cols-2 gap-8">
      
      {/* Mission Card */}
      <div className="group bg-white hover:bg-emerald-600 rounded-2xl p-10 shadow-lg 
        hover:shadow-2xl hover:shadow-emerald-200/50 border border-gray-100 
        transition-all duration-500 ease-out cursor-default hover:-translate-y-2">
        
        <div className="flex items-center gap-5 mb-6">
          <div className="w-14 h-14 bg-emerald-50 group-hover:bg-white/20 rounded-2xl 
            flex items-center justify-center shrink-0 transition-all duration-500 
            group-hover:scale-110 group-hover:rotate-3">
            <Award className="w-7 h-7 text-emerald-600 group-hover:text-white 
              transition-all duration-500 group-hover:scale-125" />
          </div>
          <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 group-hover:text-white transition-colors duration-500">
            Our Mission
          </h3>
        </div>
        
        <p className="text-gray-500 group-hover:text-emerald-50 leading-relaxed text-lg transition-colors duration-500">
          To provide seamless access to high-quality pharmaceutical products through efficient distribution networks, ensuring healthcare providers have the resources they need.
        </p>
      </div>

      {/* Vision Card */}
      <div className="group bg-white hover:bg-emerald-600 rounded-2xl p-10 shadow-lg 
        hover:shadow-2xl hover:shadow-emerald-200/50 border border-gray-100 
        transition-all duration-500 ease-out cursor-default hover:-translate-y-2">
        
        <div className="flex items-center gap-5 mb-6">
          <div className="w-14 h-14 bg-emerald-50 group-hover:bg-white/20 rounded-2xl 
            flex items-center justify-center shrink-0 transition-all duration-500 
            group-hover:scale-110 group-hover:-rotate-3">
            <Shield className="w-7 h-7 text-emerald-600 group-hover:text-white 
              transition-all duration-500 group-hover:scale-125" />
          </div>
          <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 group-hover:text-white transition-colors duration-500">
            Our Vision
          </h3>
        </div>
        
        <p className="text-gray-500 group-hover:text-emerald-50 leading-relaxed text-lg transition-colors duration-500">
          To become the most trusted and innovative pharmaceutical distribution partner globally, setting new standards for quality and efficiency.
        </p>
      </div>

    </div>
  </div>
);

export default MissionVision;