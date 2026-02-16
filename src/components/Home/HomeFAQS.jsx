import React, { useState, useRef } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const faqs = [
  {
    question: "How can I apply for a Seeyas Pharma distribution partnership?",
    answer: "You can apply by clicking the 'Apply Now' button and filling out our partnership form. Our business development team will review your application and contact you within 24-48 hours.",
  },
  {
    question: "What quality certifications do your products hold?",
    answer: "All our products are manufactured in WHO-GMP certified facilities. We adhere to stringent international standards and provide a Certificate of Analysis (COA) with every batch.",
  },
  {
    question: "Do you offer cold-chain logistics for sensitive medicines?",
    answer: "Yes, we have a specialized cold-chain infrastructure that maintains a temperature-controlled environment (2°C to 8°C) throughout the storage and transit process.",
  },
  {
    question: "What is the typical delivery turnaround time?",
    answer: "We prioritize efficiency. Most orders are dispatched within 24 hours. For major healthcare hubs, we offer same-day or next-day delivery services.",
  },
  {
    question: "Do you support contract manufacturing (P2P)?",
    answer: "Yes, Seeyas Pharma provides comprehensive contract manufacturing services, from formulation development to final packaging, tailored to your brand's requirements.",
  },
];

const FAQItem = ({ faq, isOpen, toggle }) => {
  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.to(contentRef.current, {
      height: isOpen ? "auto" : 0,
      opacity: isOpen ? 1 : 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
  }, [isOpen]);

  return (
    <div className={`mb-4 border rounded-2xl transition-all duration-300 ${isOpen ? 'border-emerald-500 bg-emerald-50/30' : 'border-slate-200 bg-white'}`}>
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
      >
        <span className={`font-bold text-lg ${isOpen ? 'text-emerald-700' : 'text-slate-800'}`}>
          {faq.question}
        </span>
        <div className={`p-2 rounded-full transition-transform duration-300 ${isOpen ? 'bg-emerald-500 text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <div ref={contentRef} className="overflow-hidden px-5">
        <p className="pb-5 text-slate-600 leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

const HomeFAQS = () => {
  const [openIndex, setOpenIndex] = useState(0); 

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold mb-4">
            <HelpCircle size={18} /> Support Center
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-4">
            Frequently Asked <span className="text-emerald-600">Questions</span>
          </h2>
          <p className="text-slate-500">
            Have questions about our distribution, quality standards, or services? 
            Find the answers you need below.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFAQS;