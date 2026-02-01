import React from 'react';
import { Calendar, Tag, ArrowRight, Zap } from 'lucide-react';

const FeaturedNews = ({ news }) => {
  if (!news) return null;

  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 mb-16 -mt-20 z-20">
      <div className="flex flex-col lg:flex-row bg-gray-900 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10">
        
        {/* Image Side with Overlay */}
        <div className="lg:w-3/5 relative group overflow-hidden">
          <div className="absolute inset-0 bg-emerald-500/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          <img 
            src={news.image} 
            alt={news.title} 
            className="w-full h-100 lg:h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-6 left-6 z-20">
            <span className="bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2">
              <Zap size={14} fill="currentColor"/> FEATURED STORY
            </span>
          </div>
        </div>
        
        {/* Content Side - Dark Premium Look */}
        <div className="lg:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-linear-to-br from-gray-900 to-emerald-950 text-white border-l border-white/5">
          <div className="flex items-center gap-4 mb-6 text-emerald-400 text-sm font-medium">
            <span className="flex items-center gap-2">
              <Calendar size={16} className="text-emerald-500"/> {news.date}
            </span>
            <span className="h-4 w-px bg-white/20"></span>
            <span className="flex items-center gap-2">
              <Tag size={16} className="text-emerald-500"/> {news.tag}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight tracking-tight">
            {news.title}
          </h2>

          <p className="text-gray-300 mb-8 text-lg opacity-90 leading-relaxed font-light">
            {news.excerpt}
          </p>

          <button className="group flex items-center gap-3 bg-emerald-500 text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-emerald-400 transition-all self-start shadow-lg shadow-emerald-500/20">
            Read Full Report 
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNews;