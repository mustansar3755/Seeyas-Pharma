import { Phone, Mail, Globe } from "lucide-react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    icon: <Phone className="w-5 h-5 text-emerald-600" />,
    title: "Call Us",
    desc: "Direct support line",
    link: "tel:+1234567890",
    linkText: "Click to call",
    bgColor: "bg-emerald-50",
  },
  {
    icon: <Mail className="w-5 h-5 text-cyan-600" />,
    title: "Email Us",
    desc: "24/7 Inquiry desk",
    link: "mailto:info@seeyaspharma.com",
    linkText: "info@seeyaspharma.com",
    bgColor: "bg-cyan-50",
  },
  {
    icon: <Globe className="w-5 h-5 text-blue-600" />,
    title: "Website",
    desc: "Digital catalog",
    link: "https://www.seeyaspharma.com",
    linkText: "Visit site",
    bgColor: "bg-blue-50",
  },
];

const InfoCards = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".info-card-item", {
      opacity: 0,
      x: -20, // Ab side se slide hoga
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 relative z-10 mb-16">
      <div className="grid md:grid-cols-3 gap-4">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="info-card-item bg-white rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-50 
                       flex items-center gap-4 group hover:shadow-lg transition-all duration-300"
          >
            {/* Icon - Size chota aur circular background */}
            <div className={`${card.bgColor} w-12 h-12 shrink-0 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
              {card.icon}
            </div>

            {/* Content - Left aligned for better width usage */}
            <div className="flex flex-col min-w-0">
              <h3 className="text-sm font-bold text-gray-900 leading-none mb-1">
                {card.title}
              </h3>
              <p className="text-xs text-gray-500 truncate mb-1">
                {card.desc}
              </p>
              <a
                href={card.link}
                className="text-emerald-600 font-semibold text-xs hover:underline truncate"
              >
                {card.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCards;