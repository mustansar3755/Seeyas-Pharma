import React from 'react';
import GlobalHero from '../components/GlobalPresence/GlobalHero';
import GlobalStats from '../components/GlobalPresence/GlobalStats';
import GlobalMap from '../components/GlobalPresence/GlobalMap';


const GlobalPresencePage = () => {
  return (
    <main className="bg-white min-h-screen">
      <GlobalHero />
      <GlobalStats />
      
      {/* Map aur Regions ka combined section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <GlobalMap />
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 bg-slate-50 border-t border-teal-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Expanding Our Reach, Enhancing Lives.</h2>
          <p className="text-slate-600 mb-10 max-w-xl mx-auto">We are constantly looking for strategic partners to bring our quality medicines to new markets.</p>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-teal-600/20">
            Contact Global Trade
          </button>
        </div>
      </section>
    </main>
  );
};

export default GlobalPresencePage;