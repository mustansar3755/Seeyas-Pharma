import React from 'react';

const categories = ["All", "Corporate News", "Events", "CSR", "Distribution"];

const NewsFilters = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 my-12 px-6 relative z-30">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`px-8 py-2.5 rounded-md text-sm font-bold tracking-wide transition-all duration-200 uppercase border-2
            ${activeCategory === cat 
              ? "bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/20 scale-105" 
              : "bg-white border-white text-emerald-600 hover:border-emerald-500 hover:text-emerald-500 shadow-sm"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default NewsFilters;