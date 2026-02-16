import { MapPin, Navigation } from "lucide-react";

const LocationSection = () => {
  // Google Maps -> Share -> Embed Map -> src URL yahan paste karein
  const googleMapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6810.065848310722!2d74.23814854333622!3d31.413218953396633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919004a448f0433%3A0x5b37dc3245308515!2sT%20%26%20T%20Aabpara%20Housing%20Society%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1771262425861!5m2!1sen!2sus";

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left: Simple Address Card */}
          <div className="w-full lg:h-1/4 bg-gray-50 rounded-xl p-10 flex flex-col justify-center border border-gray-100">
            <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-200">
              <MapPin className="text-white w-6 h-6" />
            </div>

            <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">
              Our <span className="text-emerald-600">Location</span>
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed font-medium">
              T & T Aabpara Housing Society Lahore
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
          <div className="w-full lg:w-3/4 h-112.5 rounded-xl overflow-hidden shadow-xl border-4 border-white relative">
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
