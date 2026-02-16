import { MapPin, Navigation, ExternalLink } from "lucide-react";

const LocationSection = () => {
  // Replacement URL (Add your actual embed link here)
  const googleMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.411685324317!2d74.27092147530666!3d31.45785057424269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919016259f67a6d%3A0x6d90a19e58e0a7e0!2sAabpara%20Housing%20Society%20Lahore!5e0!3m2!1sen!2s!4v1700000000000";

  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left: Info Card */}
          <div className="w-full lg:w-1/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold mb-6 uppercase tracking-wider">
              <MapPin size={14} className="animate-pulse" /> Visit Our Office
            </div>
            
            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
              Where to <span className="text-emerald-600">Find Us</span>
            </h2>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-white shadow-md rounded-lg flex items-center justify-center text-emerald-600 border border-slate-100">
                  <Navigation size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Headquarters</h4>
                  <p className="text-slate-600 leading-relaxed mt-1">
                    T & T Aabpara Housing Society,<br />
                    Lahore, Punjab, Pakistan
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com" // Update with real share link
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-emerald-600 text-white py-4 px-10 rounded-2xl font-bold hover:bg-slate-900 transition-all duration-300 shadow-xl shadow-emerald-200 group w-full lg:w-fit"
            >
              Get Directions
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right: Map Display */}
          <div className="w-full lg:w-2/3 h-[450px] lg:h-[550px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white relative group">
            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-black/5 rounded-[1.8rem] z-10"></div>
            
            <iframe
              src={googleMapUrl}
              className="w-full h-full transition-transform duration-[2000ms] group-hover:scale-105"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Seeyas Pharma Location"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;