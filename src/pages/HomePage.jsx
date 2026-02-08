import React, { useState } from "react";
import Hero from "../components/Home/Hero";


import Testimonials from "../components/Home/Testimonials";
import { Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Manufacturing from "../components/Home/Manufacturing";
import ProductShowcase from "../components/Home/ProductShowcase";
import HomeFAQS from "../components/Home/HomeFAQS";
import ContactFormSection from "../components/ContactUs/ContactFormSection";

const HomePage = () => {
  const navigate = useNavigate();

  // 1. State for the form (HomePage level par)
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // 2. Submit Handler
  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", contactForm);
    
    // Yahan aap API call ya Success alert dikha sakte hain
    alert("Thank you for reaching out! We will get back to you soon.");
    
    // Form Reset
    setContactForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Hero />
      {/* 2. Manufacturing Section (New) */}
      <Manufacturing />

      {/* 3. Product Showcase (New - Dark Section) */}
      <ProductShowcase />

      {/* 4. Testimonials */}
      <Testimonials />
      <HomeFAQS/>
      <ContactFormSection
        formData={contactForm}
        setFormData={setContactForm}
        onSubmit={handleContactSubmit}
      />

      {/* 5. Final CTA Section */}
      <section className="bg-emerald-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-emerald-100/70 mb-12 max-w-xl mx-auto">
            Join 500+ successful partners across the nation. Let's build a healthier future together.
          </p>
          <button
            onClick={() => navigate("/apply")}
            className="group inline-flex items-center gap-3 bg-white text-emerald-900 px-12 py-5 rounded-2xl font-black text-xl hover:bg-emerald-50 transition-all shadow-2xl active:scale-95"
          >
            Apply for Distribution
            <Send className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;