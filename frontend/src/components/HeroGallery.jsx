import React, { useState, useEffect, useRef } from 'react';
import { useArtworks } from '../hooks/useApi';
import { Skeleton } from './ui/skeleton';

const HeroGallery = () => {
  const { artworks, loading } = useArtworks();
  const [textOpacity, setTextOpacity] = useState(1);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    // Use Intersection Observer for smooth fade - more performant than scroll events
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Sentinel is visible - fade out the text based on how visible it is
          // intersectionRatio: 0 = just entering, 1 = fully visible
          const newOpacity = 1 - entry.intersectionRatio;
          setTextOpacity(Math.max(0, Math.min(1, newOpacity)));
        } else {
          // Sentinel not visible
          const rect = entry.boundingClientRect;
          if (rect.top < window.innerHeight) {
            // We've scrolled past - hide text completely
            setTextOpacity(0);
          } else {
            // Haven't reached sentinel yet - show text fully
            setTextOpacity(1);
          }
        }
      },
      {
        threshold: Array.from({ length: 21 }, (_, i) => i / 20), // 0, 0.05, 0.1, ... 1.0
        rootMargin: '0px'
      }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, [loading]);

  const ImageCard = ({ artwork, className = "" }) => (
    <div className={`${className}`}>
      <div className="relative overflow-hidden bg-white">
        <img
          src={artwork.image}
          alt={artwork.title}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );

  if (loading) {
    return (
      <section className="relative min-h-screen bg-white pt-28">
        {/* Fixed text at bottom */}
        <div className="fixed bottom-0 left-0 right-0 pointer-events-none z-20 overflow-hidden">
          <h1 
            className="font-black text-black leading-none tracking-tighter"
            style={{ 
              fontSize: 'clamp(60px, 13vw, 250px)',
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              letterSpacing: '-0.02em',
              marginBottom: '-0.1em',
              width: '100%'
            }}
          >
            LAURENCE JONES
          </h1>
        </div>
        <div className="relative z-10 px-8 md:px-16 pt-20 pb-40">
          <div className="max-w-4xl mx-auto">
            <Skeleton className="w-full aspect-[4/3]" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-white pt-28">
      {/* Fixed "LAURENCE JONES" Text - At Bottom, fades out near end of gallery */}
      <div 
        className="fixed bottom-0 left-0 right-0 pointer-events-none z-20 overflow-hidden"
        style={{ 
          opacity: textOpacity,
          transition: 'opacity 0.15s ease-out',
          willChange: 'opacity'
        }}
      >
        <h1 
          className="font-black text-black leading-none tracking-tighter"
          style={{ 
            fontSize: 'clamp(60px, 13vw, 250px)',
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            letterSpacing: '-0.02em',
            marginBottom: '-0.1em',
            width: '100%'
          }}
        >
          LAURENCE JONES
        </h1>
      </div>
      
      {/* Scrolling Image Gallery */}
      <div className="relative z-10 pb-16">
        
        {/* Section 1: Hero Balloon Dog - Centered */}
        {artworks[0] && (
          <div className="flex justify-center px-6 md:px-20 mb-20">
            <ImageCard 
              artwork={artworks[0]} 
              className="max-w-3xl w-full"
            />
          </div>
        )}

        {/* Section 2: Two images - Bunny left, Lips right (offset) */}
        <div className="relative px-6 md:px-12 mb-16">
          <div className="grid grid-cols-12 gap-6">
            {artworks[2] && (
              <div className="col-span-12 md:col-span-4 md:col-start-1">
                <ImageCard artwork={artworks[2]} />
              </div>
            )}
            {artworks[4] && (
              <div className="col-span-12 md:col-span-4 md:col-start-7 md:mt-16">
                <ImageCard artwork={artworks[4]} />
              </div>
            )}
          </div>
        </div>

        {/* Section 3: Small images top, Large tulips bottom left, Balloon flower right */}
        <div className="relative px-6 md:px-12 mb-16">
          {/* Top row - smaller images */}
          <div className="grid grid-cols-12 gap-4 mb-4">
            {artworks[5] && (
              <div className="col-span-6 md:col-span-3 md:col-start-1">
                <ImageCard artwork={artworks[5]} />
              </div>
            )}
            {artworks[1] && (
              <div className="col-span-6 md:col-span-3 md:col-start-7">
                <ImageCard artwork={artworks[1]} />
              </div>
            )}
          </div>
          
          {/* Bottom row - larger images with overlap */}
          <div className="grid grid-cols-12 gap-4 md:-mt-8">
            {artworks[3] && (
              <div className="col-span-12 md:col-span-5 md:col-start-1">
                <ImageCard artwork={artworks[3]} />
              </div>
            )}
            {artworks[8] && (
              <div className="col-span-12 md:col-span-4 md:col-start-7 md:mt-24">
                <ImageCard artwork={artworks[8]} />
              </div>
            )}
          </div>
        </div>

        {/* Section 4: Three images - Balloon flower, Metallic venus, Rabbit */}
        <div className="relative px-6 md:px-12 mb-16">
          <div className="grid grid-cols-12 gap-4">
            {artworks[6] && (
              <div className="col-span-12 md:col-span-3 md:col-start-1 md:mt-16">
                <ImageCard artwork={artworks[6]} />
              </div>
            )}
            {artworks[7] && (
              <div className="col-span-12 md:col-span-3 md:col-start-5">
                <ImageCard artwork={artworks[7]} />
              </div>
            )}
            {artworks[9] && (
              <div className="col-span-12 md:col-span-4 md:col-start-9 md:mt-8">
                <ImageCard artwork={artworks[9]} />
              </div>
            )}
          </div>
        </div>

        {/* Sentinel element - IntersectionObserver watches this to fade out the fixed text */}
        <div 
          ref={sentinelRef} 
          className="h-32 w-full pointer-events-none" 
          aria-hidden="true"
        />

      </div>
    </section>
  );
};

export default HeroGallery;
