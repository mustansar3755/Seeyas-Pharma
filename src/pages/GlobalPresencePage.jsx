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

     
    </main>
  );
};

export default GlobalPresencePage;