import { useState, useRef, useEffect } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import gsap from "gsap";

const faqs = [
  {
    q: "What exactly is Pharmacovigilance (PV)?",
    a: "Pharmacovigilance is the pharmacological science relating to the detection, assessment, understanding, and prevention of adverse effects or any other drug-related problems. At Seeyas Pharma, our PV department ensures that the risk-benefit balance of our medicines remains favorable throughout their lifecycle."
  },
  {
    q: "How do I report a side effect or adverse event?",
    a: "You can report any suspected side effects through three channels: 1) Our 24/7 dedicated safety hotline, 2) The online reporting form on this page, or 3) By emailing pv.safety@seeyaspharma.com. Please provide the product name, a description of the reaction, and patient initials."
  },
  {
    q: "What information is required for an effective safety report?",
    a: "To process a report, we ideally need four elements: An identifiable reporter (you), an identifiable patient (initials/age), the name of the Seeyas Pharma product involved, and a description of the adverse event or side effect experienced."
  },
  {
    q: "How does Seeyas Pharma use the reported safety data?",
    a: "Reported data is anonymized and analyzed by our medical experts to identify potential new safety signals. This information is then shared with global health authorities (like the WHO and local DRAPs) to update product labels and improve patient safety worldwide."
  },
  {
    q: "Is my personal identity protected when I report?",
    a: "Yes, absolutely. Seeyas Pharma strictly adheres to Global Data Protection Regulations (GDPR). All reporter and patient identities are kept confidential and are only used for medical follow-up if you give explicit consent."
  },
  {
    q: "Can I report a side effect even if I am not 100% sure it was caused by the medicine?",
    a: "Yes, you should report it even if a causal relationship is not certain. Early reporting of any 'suspected' reaction helps us monitor patterns that might only become clear when multiple reports are compared."
  }
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 text-teal-600 mb-4 font-bold tracking-widest uppercase text-xs bg-teal-50 px-4 py-2 rounded-full">
            <HelpCircle className="w-4 h-4" />
            Safety Knowledge Base
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-6">
            Drug Safety <span className="text-teal-600">FAQ</span>
          </h2>
          <p className="text-slate-600 leading-relaxed font-light text-lg max-w-2xl">
            Everything you need to know about our commitment to patient vigilance and how we handle safety data globally.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <FaqItem 
              key={index} 
              item={item} 
              isOpen={openIndex === index} 
              onClick={() => setOpenIndex(openIndex === index ? null : index)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FaqItem = ({ item, isOpen, onClick }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.set(contentRef.current, { display: "block" });
      gsap.to(contentRef.current, { 
        height: "auto", 
        opacity: 1, 
        duration: 0.5, 
        ease: "power3.out" 
      });
    } else {
      gsap.to(contentRef.current, { 
        height: 0, 
        opacity: 0, 
        duration: 0.3, 
        ease: "power3.in",
        onComplete: () => gsap.set(contentRef.current, { display: "none" })
      });
    }
  }, [isOpen]);

  return (
    <div className={`transition-all duration-300 rounded-2xl border ${
      isOpen ? 'bg-teal-50/50 border-teal-200 shadow-md' : 'bg-white border-slate-200 hover:border-teal-300'
    }`}>
      <button onClick={onClick} className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
        <span className={`text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-teal-700' : 'text-slate-800'}`}>
          {item.q}
        </span>
        <div className={`p-1.5 rounded-full transition-all duration-300 ${isOpen ? 'bg-teal-600 text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>

      <div ref={contentRef} className="overflow-hidden" style={{ height: 0, opacity: 0, display: 'none' }}>
        <div className="px-6 pb-6 text-slate-600 leading-relaxed font-normal border-t border-teal-100/50 pt-4">
          {item.a}
        </div>
      </div>
    </div>
  );
};