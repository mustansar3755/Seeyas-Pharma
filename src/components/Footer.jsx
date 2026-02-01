import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  Youtube,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-emerald-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src={assets.Logo}
                alt="Seeyas Pharma"
                className="w-14 h-14 object-contain"
              />
              <div>
                <h3 className="text-xl font-black text-slate-900 leading-none">
                  SEEYAS PHARMA
                </h3>
                <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-1">
                  Member of Seeyas Group
                </p>
              </div>
            </Link>
            <p className="text-slate-600 leading-relaxed mb-6">
              Leading the way in pharmaceutical excellence with a commitment to
              global healthcare standards and innovative distribution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-7 text-slate-900 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-teal-500 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Innovation", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-slate-600 hover:text-teal-600 flex items-center gap-2 transition-colors font-medium group"
                  >
                    <ChevronRight
                      size={14}
                      className="text-teal-400 group-hover:translate-x-1 transition-transform"
                    />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold mb-7 text-slate-900 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-teal-500 rounded-full"></span>
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-2 rounded-lg text-teal-700">
                  <Globe size={18} />
                </div>
                <a
                  href="https://www.seeyaspharma.com"
                  className="text-slate-600 hover:text-teal-600 transition-colors pt-1"
                >
                  www.seeyaspharma.com
                </a>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-2 rounded-lg text-teal-700">
                  <Mail size={18} />
                </div>
                <a
                  href="mailto:info@seeyaspharma.com"
                  className="text-slate-600 hover:text-teal-600 transition-colors pt-1"
                >
                  info@seeyaspharma.com
                </a>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-2 rounded-lg text-teal-700">
                  <Phone size={18} />
                </div>
                <span className="text-slate-600 pt-1">+92 (Your Number)</span>
              </div>
            </div>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h4 className="text-lg font-bold mb-7 text-slate-900 relative inline-block">
              Global Presence
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-teal-500 rounded-full"></span>
            </h4>
            <p className="text-slate-600 mb-6 italic">
              Stay connected with our global healthcare network.
            </p>
            <div className="flex gap-3">
              {[Facebook, Linkedin, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 text-teal-600 border
                   border-slate-200 hover:bg-teal-600
                    hover:text-white hover:border-teal-600
                    hover:-translate-y-2
                     rounded-xl flex items-center justify-center
                      transition-all duration-700 shadow-sm"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
            <p className="text-slate-500 font-medium">
              © {new Date().getFullYear()}{" "}
              <span className="text-teal-600 font-bold">Seeyas Pharma</span>.
              All rights reserved.
            </p>
            <div className="flex gap-8 text-slate-400 font-medium">
              <a href="#" className="hover:text-teal-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-teal-600 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
