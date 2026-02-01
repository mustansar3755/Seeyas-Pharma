import { Mail } from "lucide-react";

const ContactHero = () => (
  <div className="relative overflow-hidden py-28 lg:py-36 bg-gray-900">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img 
      src="https://media.istockphoto.com/id/1349441051/photo/overhead-view-of-senior-asian-woman-feeling-sick-taking-medicines-in-hand-with-a-glass-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=O-rvxgApRSw7Pc0S3N_J73uKmD5WI4KBgAIpUcAucrA="
        alt="Pharmaceutical Research"
        className="w-full h-full object-cover opacity-40"
      />
      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-linear-to-b from-emerald-900/30 via-gray-900/20 to-gray-900/30"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="contact-header text-center text-white">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 px-4 py-2 rounded-full mb-8 font-medium text-emerald-400">
          <Mail className="w-4 h-4" />
          <span className="text-sm tracking-wider uppercase">Contact Our Team</span>
        </div>
        
        <h1 className="text-5xl lg:text-8xl font-extrabold mb-8 tracking-tight">
          Let's Start a <span className="text-emerald-400">Conversation</span>
        </h1>
        
        <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
          Whether you have a question about products, pricing, or partnerships, 
          our pharmaceutical experts are ready to assist you.
        </p>
      </div>
    </div>

    {/* Decorative Bottom Wave (Optional - for smooth transition to cards) */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-emerald-50 to-transparent opacity-30"></div>
  </div>
);

export default ContactHero;