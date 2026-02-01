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
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-emerald-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          
          {/* Logo + Brand Name Section */}
          <Link to="/" className="flex items-center gap-4 group shrink-0">
            {/* Logo Image */}
            <div className="relative w-14 h-14 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img 
                src={assets.Logo} 
                alt="Seeyas Pharma Logo" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/60x60?text=SP'; }}
              />
            </div>

            {/* Brand Text */}
            <div className="flex flex-col">
              <h1 className="text-2xl font-black tracking-tighter bg-linear-to-r from-emerald-800 via-emerald-700 to-teal-600 bg-clip-text text-transparent leading-none">
                SEEYAS PHARMA
              </h1>
              <p className="text-[11px] font-bold text-emerald-600/80 uppercase tracking-[0.2em] mt-1.5">
                Member of Seeyas Group
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-bold transition-all duration-200 hover:text-emerald-600 tracking-wide ${
                  isActive(link.path) 
                  ? "text-emerald-600 border-b-2 border-emerald-600 pb-1" 
                  : "text-slate-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/apply"
              className="bg-linear-to-r from-emerald-600 to-teal-600 text-white px-7 py-3 rounded-xl font-extrabold text-sm hover:shadow-emerald-200 hover:shadow-2xl transition-all duration-300 active:scale-95 uppercase tracking-wider"
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 hover:bg-emerald-50 rounded-xl transition-colors"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`md:hidden absolute w-full bg-white border-b border-emerald-100 transition-all duration-500 ease-in-out ${isOpen ? "max-h-screen opacity-100 py-8 shadow-2xl" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="px-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-xl font-black px-4 py-3 rounded-2xl ${
                isActive(link.path) ? "bg-emerald-50 text-emerald-600" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/apply"
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-linear-to-r from-emerald-600 to-teal-600 text-white text-center py-5 rounded-2xl font-black text-lg shadow-emerald-200 shadow-xl uppercase"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;