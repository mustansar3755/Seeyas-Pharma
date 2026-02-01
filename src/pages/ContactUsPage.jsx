import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactHero from "../components/ContactUs/ContactHero";
import InfoCards from "../components/ContactUs/InfoCards";
import ContactFormSection from "../components/ContactUs/ContactFormSection";
import LocationSection from "../components/ContactUs/LocationSection";

// Sub-components

gsap.registerPlugin(ScrollTrigger);

const ContactUsPage = () => {
  const containerRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Animation Logic
  useGSAP(
    () => {
      gsap.from(".contact-header", {
        duration: 1.2,
        y: -50,
        opacity: 0,
        ease: "power3.out",
      });

      gsap.from(".contact-card", {
        duration: 0.8,
        y: 60,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".contact-card-container",
          start: "top 85%",
        },
      });
    },
    { scope: containerRef },
  );

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setContactForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 5000);
  };

  if (submitted) return <SuccessScreen onReset={() => setSubmitted(false)} />;

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-cyan-50"
    >
      <ContactHero />
      <div className="contact-card-container">
        {/* <InfoCards /> */}
      </div>
      <ContactFormSection
        formData={contactForm}
        setFormData={setContactForm}
        onSubmit={handleContactSubmit}
      />
      <LocationSection />
    </div>
  );
};

export default ContactUsPage;
