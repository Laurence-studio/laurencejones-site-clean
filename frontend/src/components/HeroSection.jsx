import React from 'react';
import { useArtworks } from '../hooks/useApi';
import { Skeleton } from './ui/skeleton';

const HeroSection = () => {
  const { artworks, loading } = useArtworks();
  const heroArtwork = artworks[0];

  if (loading) {
    return (
      <section className="relative w-full pt-28 bg-white overflow-visible">
        <div className="relative flex justify-center px-4">
          <div className="relative w-full max-w-4xl">
            <Skeleton className="w-full aspect-[4/3]" />
          </div>
        </div>
        <div className="relative -mt-24 md:-mt-40 lg:-mt-56 pointer-events-none overflow-visible">
          <h1 
            className="font-black text-black leading-none tracking-tighter whitespace-nowrap"
            style={{ 
              fontSize: 'clamp(80px, 16vw, 260px)',
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              letterSpacing: '-0.02em',
              lineHeight: '0.85'
            }}
          >
            JEFF KOONS
          </h1>
        </div>
      </section>
    );
  }

  if (!heroArtwork) return null;

  return (
    <section className="relative w-full pt-28 bg-white overflow-visible">
      {/* Main Hero Image - Centered */}
      <div className="relative flex justify-center px-4">
        <div className="relative w-full max-w-4xl">
          <img
            src={heroArtwork.image}
            alt={heroArtwork.title}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Large Typography - Positioned to overlap bottom of image and extend below */}
      <div className="relative -mt-24 md:-mt-40 lg:-mt-56 pointer-events-none overflow-visible">
        <h1 
          className="font-black text-black leading-none tracking-tighter whitespace-nowrap"
          style={{ 
            fontSize: 'clamp(80px, 16vw, 260px)',
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            letterSpacing: '-0.02em',
            lineHeight: '0.85'
          }}
        >
          JEFF KOONS
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
