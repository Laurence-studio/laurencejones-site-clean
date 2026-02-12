import React from 'react';
import { artworks } from '../data/mockData';

const HeroSection = () => {
  const heroArtwork = artworks[0]; // Balloon Dog Blue

  return (
    <section className="relative w-full min-h-screen pt-32 pb-20 bg-white overflow-hidden">
      {/* Main Hero Image */}
      <div className="relative max-w-5xl mx-auto px-4">
        <div className="relative">
          <img
            src={heroArtwork.image}
            alt={heroArtwork.title}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Large Typography Overlay */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <h1 
          className="font-black text-black leading-none tracking-tighter"
          style={{ 
            fontSize: 'clamp(80px, 18vw, 280px)',
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            letterSpacing: '-0.03em'
          }}
        >
          JEFF KOONS
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
