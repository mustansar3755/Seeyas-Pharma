import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Crown, 
  Mail, 
  Phone, 
  Send,
  Building2,
  Globe,
  MessageSquare,
  User,
  MapPin
} from "lucide-react";

const ApplicationPage = () => {
  const containerRef = useRef(null);

  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '', // Added
    email: '',
    phone: '',
    city: '', // Now a dropdown
    country: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Example City List - You can expand this
  const cities = [
    "New York", "London", "Dubai", "Singapore", "Berlin", "Toronto", "Sydney", "Mumbai"
  ];

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".form-header", { y: -50, opacity: 0, duration: 0.8, ease: "power3.out" })
      .from(".form-field", { y: 20, opacity: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }, "-=0.4");
  }, { scope: containerRef });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl text-center border border-emerald-100">
          <div className="bg-emerald-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Received!</h2>
          <p className="text-gray-600 mb-8">Thank you for your interest. Our partnership team will review your details and reach out within 48 hours.</p>
          <Link to="/" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-700 transition-all">
            Return to Homepage <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        <div className="form-header text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6 font-bold text-sm">
            <Crown className="w-4 h-4" />
            <span>Official Partner Program</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">Distributor Application</h1>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Company Name */}
              <div className="form-field space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">
                  <Building2 className="w-4 h-4 text-emerald-600" /> Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50 outline-none transition-all"
                  placeholder="e.g. MedGlobal Ltd"
                />
              </div>

              {/* Contact Person - NEW FIELD */}
              <div className="form-field space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">
                  <User className="w-4 h-4 text-emerald-600" /> Contact Person *
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  required
                  value={formData.contactPerson}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50 outline-none transition-all"
                  placeholder="Full Name"
                />
              </div>

              <div className="form-field space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">
                  <Mail className="w-4 h-4 text-emerald-600" /> Business Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50 outline-none transition-all"
                />
              </div>

              <div className="form-field space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">
                  <Phone className="w-4 h-4 text-emerald-600" /> Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50 outline-none transition-all"
                />
              </div>

              {/* Country */}
              <div className="form-field space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">
                  <Globe className="w-4 h-4 text-emerald-600" /> Country *
                </label>
                <input
                  type="text"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50 outline-none transition-all"
                />
              </div>

              {/* City - DROPDOWN UPDATE */}
              <div className="form-field space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">
                  <MapPin className="w-4 h-4 text-emerald-600" /> City *
                </label>
                <div className="relative">
                  <select
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50 outline-none transition-all appearance-none bg-white"
                  >
                    <option value="" disabled>Select a city</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                    <option value="Other">Other...</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    ▼
                  </div>
                </div>
              </div>
            </div>

            <div className="form-field space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">
                <MessageSquare className="w-4 h-4 text-emerald-600" /> Additional Details
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <div className="form-field pt-4">
              <button
                type="submit"
                className="group w-full cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-lg shadow-emerald-200"
              >
                Submit Partnership Request
                <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;