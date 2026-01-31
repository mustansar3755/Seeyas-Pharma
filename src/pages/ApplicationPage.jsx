import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
// 1. Correct GSAP Imports
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Crown, 
  Mail, 
  MapPin, 
  Phone, 
  Send,
  Building2,
  Globe,
  MessageSquare
} from "lucide-react";

const ApplicationPage = () => {
  // 2. Create a standard React Ref for the container
  const containerRef = useRef(null);

  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    experience: '',
    distributionArea: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // 3. GSAP Animation Logic
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".form-header", {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    .from(".form-field", {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.4");
    
  }, { scope: containerRef }); // 4. Scoping prevents "gsap is not a function" and Ref errors

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
        
        {/* Header Section */}
        <div className="form-header text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6 font-bold text-sm">
            <Crown className="w-4 h-4" />
            <span>Official Partner Program</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
            Distributor Application
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our global network of healthcare distributors and bring premium medical solutions to your region.
          </p>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Company Info */}
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
                  placeholder="contact@company.com"
                />
              </div>

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
                  placeholder="e.g. United Kingdom"
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
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            {/* Full Width Field */}
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
                placeholder="Tell us about your distribution experience..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="form-field pt-4">
              <button
                type="submit"
                className="group w-full bg-emerald-600 hover:bg-emerald-700 text-white py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-lg shadow-emerald-200"
              >
                Submit Partnership Request
                <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>

        {/* Footer Link */}
        <div className="text-center mt-12">
          <Link to="/" className="text-gray-500 hover:text-emerald-600 font-medium transition-colors">
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;