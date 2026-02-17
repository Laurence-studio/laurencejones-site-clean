import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useArtworks } from '../hooks/useApi';
import { Skeleton } from './ui/skeleton';

const HeroGallery = () => {
  const { artworks, loading } = useArtworks();
  const [textOpacity, setTextOpacity] = useState(1);
  const galleryRef = useRef(null);
  const rafRef = useRef(null);

  const handleScroll = useCallback(() => {
    // Cancel any pending animation frame
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    // Use requestAnimationFrame to throttle scroll updates
    rafRef.current = requestAnimationFrame(() => {
      if (!galleryRef.current) return;
      
      const galleryRect = galleryRef.current.getBoundingClientRect();
      const galleryBottom = galleryRect.bottom;
      const windowHeight = window.innerHeight;
      
      // Start fading when gallery bottom approaches the bottom of viewport
      if (galleryBottom < windowHeight + 200) {
        const fadeStart = windowHeight + 200;
        const fadeEnd = windowHeight - 100;
        const progress = (galleryBottom - fadeEnd) / (fadeStart - fadeEnd);
        const newOpacity = Math.max(0, Math.min(1, progress));
        setTextOpacity(prev => {
          // Only update if change is significant
          if (Math.abs(prev - newOpacity) > 0.01) {
            return newOpacity;
          }
          return prev;
        });
      } else {
        setTextOpacity(prev => prev !== 1 ? 1 : prev);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll]);

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
        <div className="fixed bottom-0 left-0 right-0 pointer-events-none z-20 overflow-hidden">
          <h1 
            className="font-black text-black leading-none tracking-tighter"
            style={{ 
              fontSize: 'clamp(60px, 13vw, 250px)',
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              letterSpacing: '-0.02em',
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
      {/* Fixed "JEFF KOONS" Text - At Bottom, In Front of Images */}
      <div 
        className="fixed bottom-0 left-0 right-0 pointer-events-none z-20 overflow-hidden"
        style={{ opacity: textOpacity, transition: 'opacity 0.3s ease-out' }}
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
      <div ref={galleryRef} className="relative z-10 pb-32">
        
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

      </div>
    </section>
  );
};

export default HeroGallery;
