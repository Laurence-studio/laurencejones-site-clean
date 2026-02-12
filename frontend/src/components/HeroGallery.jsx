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
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!galleryRef.current || !textRef.current) return;
      
      const galleryRect = galleryRef.current.getBoundingClientRect();
      const galleryBottom = galleryRect.bottom;
      const windowHeight = window.innerHeight;
      
      // Start fading when gallery bottom is 200px from viewport bottom
      if (galleryBottom < windowHeight + 100) {
        const fadeStart = windowHeight + 100;
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
        {/* Fixed Text */}
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
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
        
        {/* Loading Skeleton Grid */}
        <div className="relative z-10 px-8 md:px-16 pt-20 pb-40">
          <div className="grid grid-cols-12 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={`col-span-6 md:col-span-4 ${i % 3 === 0 ? 'md:col-span-6' : ''}`}>
                <Skeleton className="w-full aspect-square" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-white pt-28">
      {/* Fixed "JEFF KOONS" Text - Centered and stationary */}
      <div 
        ref={textRef}
        className="fixed inset-0 flex items-center justify-center pointer-events-none z-0"
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
      
      {/* Scrolling Overlapping Image Gallery */}
      <div ref={galleryRef} className="relative z-10 px-6 md:px-12 lg:px-20 pt-16 pb-32">
        {/* Masonry-style overlapping grid */}
        <div className="relative" style={{ minHeight: '200vh' }}>
          {/* Row 1 */}
          <div className="grid grid-cols-12 gap-4 mb-4">
            {/* Left large image */}
            {artworks[0] && (
              <div 
                className="col-span-12 md:col-span-5 cursor-pointer group"
                onClick={() => setSelectedArtwork(artworks[0])}
              >
                <div className="relative overflow-hidden bg-white shadow-sm">
                  <img
                    src={artworks[0].image}
                    alt={artworks[0].title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            )}
            
            {/* Right column with two stacked images */}
            <div className="col-span-12 md:col-span-4 md:col-start-8 space-y-4 md:-mt-12">
              {artworks[1] && (
                <div 
                  className="cursor-pointer group"
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
                  className="cursor-pointer group md:ml-8"
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
          </div>

          {/* Row 2 - Overlapping */}
          <div className="grid grid-cols-12 gap-4 mb-4 md:-mt-24">
            {artworks[3] && (
              <div 
                className="col-span-12 md:col-span-6 md:col-start-2 cursor-pointer group"
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
                className="col-span-12 md:col-span-4 md:col-start-8 md:mt-32 cursor-pointer group"
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

          {/* Row 3 - More overlap */}
          <div className="grid grid-cols-12 gap-4 mb-4 md:-mt-20">
            {artworks[5] && (
              <div 
                className="col-span-12 md:col-span-3 cursor-pointer group"
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
                className="col-span-12 md:col-span-5 md:col-start-5 md:-mt-16 cursor-pointer group"
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
          <div className="grid grid-cols-12 gap-4 md:-mt-12">
            {artworks[8] && (
              <div 
                className="col-span-12 md:col-span-4 md:col-start-2 cursor-pointer group"
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
                className="col-span-12 md:col-span-4 md:col-start-7 md:mt-24 cursor-pointer group"
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
