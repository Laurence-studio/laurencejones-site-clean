import React, { useState, useEffect, useRef } from 'react';
import { useArtworks } from '../hooks/useApi';
import { Dialog, DialogContent, DialogTitle } from './ui/dialog';
import { X } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

const HeroGallery = () => {
  const { artworks, loading } = useArtworks();
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [textOpacity, setTextOpacity] = useState(1);
  const galleryRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!galleryRef.current) return;
      
      const galleryRect = galleryRef.current.getBoundingClientRect();
      const galleryBottom = galleryRect.bottom;
      const windowHeight = window.innerHeight;
      
      // Start fading when gallery bottom approaches the bottom of viewport
      if (galleryBottom < windowHeight + 200) {
        const fadeStart = windowHeight + 200;
        const fadeEnd = windowHeight - 100;
        const progress = (galleryBottom - fadeEnd) / (fadeStart - fadeEnd);
        setTextOpacity(Math.max(0, Math.min(1, progress)));
      } else {
        setTextOpacity(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return (
      <section className="relative min-h-screen bg-white pt-28">
        {/* Fixed Text at Bottom */}
        <div className="fixed bottom-0 left-0 right-0 pointer-events-none z-20 pb-4">
          <h1 
            className="font-black text-black leading-none tracking-tighter whitespace-nowrap"
            style={{ 
              fontSize: 'clamp(80px, 18vw, 300px)',
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              letterSpacing: '-0.02em'
            }}
          >
            JEFF KOONS
          </h1>
        </div>
        
        {/* Loading Skeleton */}
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
        className="fixed bottom-0 left-0 right-0 pointer-events-none z-20 pb-4"
        style={{ opacity: textOpacity, transition: 'opacity 0.3s ease-out' }}
      >
        <h1 
          className="font-black text-black leading-none tracking-tighter whitespace-nowrap"
          style={{ 
            fontSize: 'clamp(80px, 18vw, 300px)',
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            letterSpacing: '-0.02em'
          }}
        >
          JEFF KOONS
        </h1>
      </div>
      
      {/* Scrolling Image Gallery - Behind the Text */}
      <div ref={galleryRef} className="relative z-10 px-6 md:px-12 lg:px-20 pt-4 pb-32">
        {/* Hero Image - Balloon Dog centered */}
        {artworks[0] && (
          <div className="flex justify-center mb-16">
            <div 
              className="max-w-3xl w-full cursor-pointer group"
              onClick={() => setSelectedArtwork(artworks[0])}
            >
              <div className="relative overflow-hidden bg-white">
                <img
                  src={artworks[0].image}
                  alt={artworks[0].title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        )}

        {/* Overlapping Gallery Grid */}
        <div className="relative" style={{ minHeight: '150vh' }}>
          {/* Row 1 - Two images with offset */}
          <div className="grid grid-cols-12 gap-4 mb-8">
            {artworks[1] && (
              <div 
                className="col-span-12 md:col-span-4 md:col-start-1 cursor-pointer group"
                onClick={() => setSelectedArtwork(artworks[1])}
              >
                <div className="relative overflow-hidden bg-white shadow-sm">
                  <img
                    src={artworks[1].image}
                    alt={artworks[1].title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            )}
            
            {artworks[2] && (
              <div 
                className="col-span-12 md:col-span-4 md:col-start-8 md:mt-24 cursor-pointer group"
                onClick={() => setSelectedArtwork(artworks[2])}
              >
                <div className="relative overflow-hidden bg-white shadow-sm">
                  <img
                    src={artworks[2].image}
                    alt={artworks[2].title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Row 2 - Three images with varied positions */}
          <div className="grid grid-cols-12 gap-4 mb-8 md:-mt-12">
            {artworks[3] && (
              <div 
                className="col-span-12 md:col-span-5 md:col-start-2 cursor-pointer group"
                onClick={() => setSelectedArtwork(artworks[3])}
              >
                <div className="relative overflow-hidden bg-white shadow-sm">
                  <img
                    src={artworks[3].image}
                    alt={artworks[3].title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            )}
            
            {artworks[4] && (
              <div 
                className="col-span-12 md:col-span-3 md:col-start-8 md:mt-32 cursor-pointer group"
                onClick={() => setSelectedArtwork(artworks[4])}
              >
                <div className="relative overflow-hidden bg-white shadow-sm">
                  <img
                    src={artworks[4].image}
                    alt={artworks[4].title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Row 3 - More overlapping images */}
          <div className="grid grid-cols-12 gap-4 mb-8 md:-mt-16">
            {artworks[5] && (
              <div 
                className="col-span-12 md:col-span-3 md:col-start-1 cursor-pointer group"
                onClick={() => setSelectedArtwork(artworks[5])}
              >
                <div className="relative overflow-hidden bg-white shadow-sm">
                  <img
                    src={artworks[5].image}
                    alt={artworks[5].title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            )}
            
            {artworks[6] && (
              <div 
                className="col-span-12 md:col-span-4 md:col-start-5 md:-mt-8 cursor-pointer group"
                onClick={() => setSelectedArtwork(artworks[6])}
              >
                <div className="relative overflow-hidden bg-white shadow-sm">
                  <img
                    src={artworks[6].image}
                    alt={artworks[6].title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            )}
            
            {artworks[7] && (
              <div 
                className="col-span-12 md:col-span-3 md:col-start-10 md:mt-20 cursor-pointer group"
                onClick={() => setSelectedArtwork(artworks[7])}
              >
                <div className="relative overflow-hidden bg-white shadow-sm">
                  <img
                    src={artworks[7].image}
                    alt={artworks[7].title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Row 4 - Final images */}
          <div className="grid grid-cols-12 gap-4 md:-mt-8">
            {artworks[8] && (
              <div 
                className="col-span-12 md:col-span-3 md:col-start-2 cursor-pointer group"
                onClick={() => setSelectedArtwork(artworks[8])}
              >
                <div className="relative overflow-hidden bg-white shadow-sm">
                  <img
                    src={artworks[8].image}
                    alt={artworks[8].title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            )}
            
            {artworks[9] && (
              <div 
                className="col-span-12 md:col-span-4 md:col-start-6 md:mt-16 cursor-pointer group"
                onClick={() => setSelectedArtwork(artworks[9])}
              >
                <div className="relative overflow-hidden bg-white shadow-sm">
                  <img
                    src={artworks[9].image}
                    alt={artworks[9].title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Artwork Modal */}
      <Dialog open={!!selectedArtwork} onOpenChange={() => setSelectedArtwork(null)}>
        <DialogContent className="max-w-4xl bg-white p-0 overflow-hidden">
          <DialogTitle className="sr-only">
            {selectedArtwork?.title || 'Artwork Details'}
          </DialogTitle>
          {selectedArtwork && (
            <div className="relative">
              <button 
                onClick={() => setSelectedArtwork(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              <img
                src={selectedArtwork.image}
                alt={selectedArtwork.title}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedArtwork.title}</h3>
                <p className="text-gray-600 mb-1">{selectedArtwork.year}</p>
                <p className="text-gray-600 mb-1">Series: {selectedArtwork.series}</p>
                <p className="text-gray-500 text-sm">{selectedArtwork.medium}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroGallery;
