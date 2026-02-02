import { Link } from "react-router-dom";
import { ArrowRight, Send } from "lucide-react";
import AboutHero from "../components/AboutUs/AboutHero";
import CompanyOverview from "../components/AboutUs/CompanyOverview";
import MissionVision from "../components/AboutUs/MissionVision";
import StatsSection from "../components/AboutUs/StatsSection";
import CoreValues from "../components/AboutUs/CoreValues";


const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <AboutHero />
      <CompanyOverview />
      <MissionVision />
      <StatsSection />
      <CoreValues />
      

      {/* CTA Section */}
      <div className="bg-emerald-900 py-20 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -mr-32 -mt-32"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg text-emerald-100 mb-10 opacity-80 max-w-xl mx-auto">
            Join our network of successful pharmaceutical distributors and
            elevate your healthcare reach.
          </p>
          <button
            onClick={() => navigate("/apply")}
            className="group w-full cursor-pointer sm:w-auto bg-white text-emerald-900
                   px-10 py-5 rounded-2xl font-bold text-xl hover:bg-emerald-50 transition-all
                    duration-300 shadow-xl flex items-center justify-center gap-3 mx-auto -translate-y-2"
          >
            Apply Now
            <Send className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-12" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
