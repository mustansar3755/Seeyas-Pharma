import { Crown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-linear-to-br from-emerald-600 to-emerald-700 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-linear-to-r from-emerald-700 to-cyan-600 bg-clip-text text-transparent">
                SEEYAS PHARMA
              </h1>
              <p className="text-xs text-gray-600">Member of Seeyas Group</p>
            </div>
          </Link>

          <nav className="flex items-center gap-6">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-emerald-600 font-semibold transition-colors hidden sm:block"
            >
              Home
            </Link>
            <Link 
              to="/apply" 
              className="bg-linear-to-r from-emerald-600 to-emerald-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Apply Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;