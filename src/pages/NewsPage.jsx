import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

// Pehle banaye gaye components import karein

// Data import karein

import NewsHero from "../components/News/NewsHero";
import FeaturedNews from "../components/News/FeaturedNews";
import NewsFilters from "../components/News/NewsFilters";
import NewsCard from "../components/News/NewsCard";
import { newsData } from "../data/newsData";

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredNews, setFilteredNews] = useState(newsData);
  const gridRef = useRef(null);

  // Filter Logic
  useEffect(() => {
    // Content change hone se pehle purana content fade out karein
    gsap.to(gridRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.2,
      onComplete: () => {
        if (activeCategory === "All") {
          setFilteredNews(newsData);
        } else {
          const filtered = newsData.filter(
            (item) => item.category === activeCategory,
          );
          setFilteredNews(filtered);
        }
        // Naya content fade in karein
        gsap.to(gridRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.1,
        });
      },
    });
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-white pb-20 font-sans">
      {/* 1. Header/Hero Section */}
      <NewsHero />

      {/* 2. Featured Section (Pehla item dikhane ke liye) */}
      <section className="-mt-12.5">
        <FeaturedNews news={newsData[0]} />
      </section>

      {/* 3. Filter Section */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <NewsFilters
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>

      {/* 4. News Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {filteredNews.length > 0 ? (
            filteredNews.map((item) => (
              <NewsCard
                key={item.id}
                image={item.image}
                title={item.title}
                category={item.category}
                date={item.date}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-gray-400">
              <p className="text-xl">No news found in this category.</p>
            </div>
          )}
        </div>
      </div>

      {/* 5. Pagination (Optional - Just for Look) */}
      <div className="mt-20 flex justify-center items-center gap-3">
        {/* Previous Button (Optional) */}
        <button className="px-4 h-10 rounded-md border-2 border-gray-200 text-gray-600 font-bold text-xs uppercase hover:border-emerald-500 hover:text-emerald-500 transition-all bg-white">
          Prev
        </button>

        {/* Active Page */}
        <button className="w-10 h-10 rounded-md border-2 border-emerald-500 bg-emerald-500 text-white font-bold shadow-lg shadow-emerald-500/20 transform scale-110">
          1
        </button>

        {/* Inactive Pages */}
        <button className="w-10 h-10 rounded-md border-2 border-gray-200 bg-white text-emerald-600 font-bold hover:border-emerald-500 transition-all">
          2
        </button>

        <button className="w-10 h-10 rounded-md border-2 border-gray-200 bg-white text-emerald-600 font-bold hover:border-emerald-500 transition-all">
          3
        </button>

        {/* Next Button */}
        <button className="px-4 h-10 rounded-md border-2 border-gray-200 text-gray-600 font-bold text-xs uppercase hover:border-emerald-500 hover:text-emerald-500 transition-all bg-white">
          Next
        </button>
      </div>
    </main>
  );
};

export default NewsPage;
