import React, { useEffect, useRef } from 'react';
import NewsCard from './NewsCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NewsGrid = () => {
  const gridRef = useRef(null);

  const newsData = [
    { id: 1, title: "Cervical Cancer: What Every Woman Should Know", category: "Health", image: "https://via.placeholder.com/400x250" },
    { id: 2, title: "World Diabetes Day 2025: Getz Pharma's Commitment", category: "Events", image: "https://via.placeholder.com/400x250" },
    { id: 3, title: "Health & Fitness: A Public Service Initiative", category: "CSR", image: "https://via.placeholder.com/400x250" },
  ];

  useEffect(() => {
    const cards = gridRef.current.children;
    gsap.from(cards, {
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out"
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map(news => (
          <NewsCard key={news.id} {...news} />
        ))}
      </div>
    </div>
  );
};

export default NewsGrid;