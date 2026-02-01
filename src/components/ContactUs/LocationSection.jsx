import { MapPin, Navigation } from "lucide-react";

const LocationSection = () => {
  // Google Maps -> Share -> Embed Map -> src URL yahan paste karein
  const googleMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.520443900388!2d74.3411!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMxJzEzLjQiTiA3NMKwMjAnMjguMCJF!5e0!3m2!1sen!2s!4v1625560000000!5m2!1sen!2s";

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Left: Simple Address Card */}
          <div className="w-full lg:w-1/3 bg-gray-50 rounded-[2.5rem] p-10 flex flex-col justify-center border border-gray-100">
            <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-200">
              <MapPin className="text-white w-6 h-6" />
            </div>
            
            <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">
              Our <span className="text-emerald-600">Location</span>
            </h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed font-medium">
              Seeyas Group Headquarters <br />
              123 Business Avenue, Suite 450 <br />
              New York, NY 10001, USA
            </p>

            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white py-4 px-8 rounded-2xl font-bold hover:bg-emerald-600 transition-all group w-full lg:w-fit"
            >
              Open in Maps
              <Navigation className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Right: Full Google Map */}
          <div className="w-full lg:w-2/3 h-112.5 rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white relative">
            <iframe
              src={googleMapUrl}
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Seeyas Pharma Location"
            ></iframe>
          </div>

        </div>

      </div>
    </div>
  );
};

export default LocationSection;