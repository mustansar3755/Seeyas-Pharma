import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

const NewsCard = ({ image, title, category, date }) => {
  return (
    <div className="group bg-white rounded-md overflow-hidden border border-gray-200 hover:border-emerald-500 transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-md">
      {/* Image Container */}
      <div className="relative h-52 overflow-hidden">
        <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        {/* Category Badge over Image */}
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-sm tracking-widest uppercase">
            {category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col grow bg-white">
        {/* Date */}
        <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
          <Calendar size={14} className="text-emerald-500" />
          <span>{date || "Feb 01, 2026"}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-emerald-600 transition-colors cursor-pointer mb-4">
          {title}
        </h3>
        
        {/* Spacer to push button to bottom */}
        <div className="mt-auto">
          <button className="flex items-center text-xs font-black text-emerald-600 tracking-tighter group-hover:gap-3 transition-all uppercase">
            Explore Story 
            <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;