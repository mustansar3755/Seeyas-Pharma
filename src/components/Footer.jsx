import { Crown, Facebook, Globe, Instagram, Link as LinkIcon, Linkedin, Mail, Phone, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-linear-to-br from-emerald-500 to-emerald-600 p-2 rounded-lg">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">SEEYAS PHARMA</h3>
                <p className="text-sm text-gray-400">Member of Seeyas Group</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner in pharmaceutical excellence and distribution. Committed to quality, reliability, and healthcare advancement.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-emerald-400">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-emerald-400 mt-1 shrink-0" />
                <a href="https://www.seeyaspharma.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  www.seeyaspharma.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-400 mt-1 shrink-0" />
                <a href="mailto:info@seeyaspharma.com" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  info@seeyaspharma.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-400 mt-1 shrink-0" />
                <span className="text-gray-300">Contact via website</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-emerald-400">Quick Links</h4>
            <div className="space-y-3">
              <Link to="/" className="block text-gray-300 hover:text-emerald-400 transition-colors">Home</Link>
              <Link to="/apply" className="block text-gray-300 hover:text-emerald-400 transition-colors">Apply for Distribution</Link>
              <a href="https://www.seeyaspharma.com" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-emerald-400 transition-colors"> Official Website </a>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-400 text-sm">© 2026 Seeyas Pharma. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Follow us on:</span>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="bg-gray-700 hover:bg-emerald-600 p-2 rounded-lg transition-colors">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;