import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import assets from "../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Innovation", path: "/innovation" },
    { name: "Global Presence", path: "/global" },
    { name: "News & Events", path: "/news" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-emerald-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex items-center justify-between">
          
          {/* Logo + Brand Name Section */}
          <Link to="/" className="flex items-center gap-4 group shrink-0">
            <div className="relative w-24 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img 
                src={assets.Logo} 
                alt="Seeyas Pharma Logo" 
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col">
              {/* Text Increase: text-xl -> text-2xl */}
              <h1 className="text-xl md:text-2xl font-black tracking-tighter bg-linear-to-r from-emerald-800 to-teal-600 bg-clip-text text-transparent leading-none">
                SEEYAS PHARMA
              </h1>
              {/* Text Increase: text-[9px] -> text-[11px] */}
              <p className="text-[10px] md:text-[11px] font-extrabold text-emerald-600/90 uppercase tracking-[0.18em] mt-1">
                Member of Seeyas Group
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[15px] font-bold transition-all duration-200 hover:text-emerald-600 tracking-tight ${
                  isActive(link.path) 
                  ? "text-emerald-600 border-b-2 border-emerald-600 pb-1" 
                  : "text-slate-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* Button Text Increase */}
            <Link
              to="/apply"
              className="bg-linear-to-r from-emerald-600 to-teal-600 text-white px-6 py-2.5 rounded-lg font-black text-sm hover:shadow-xl hover:shadow-emerald-200 transition-all active:scale-95 uppercase tracking-wide"
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 hover:bg-emerald-50 rounded-lg transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Text Increase */}
      <div className={`lg:hidden absolute w-full bg-white border-b border-emerald-100 transition-all duration-300 ${isOpen ? "max-h-screen opacity-100 py-6 shadow-2xl" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="px-8 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-extrabold px-4 py-3 rounded-xl ${
                isActive(link.path) ? "bg-emerald-50 text-emerald-600" : "text-slate-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;