import React from 'react';
import { useArtworks } from '../hooks/useApi';
import { Skeleton } from './ui/skeleton';

const HeroGallery = () => {
  const { artworks = [], loading, error } = useArtworks();

  // Safe array access helper
  const getArtwork = (index) => artworks?.[index] || null;

  const ImageCard = ({ artwork, className = "" }) => {
    if (!artwork?.image) return null;
    return (
      <div className={`${className}`}>
        <div className="relative overflow-hidden bg-white">
          <img
            src={artwork.image}
            alt={artwork.title || 'Artwork'}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </div>
    );
  };

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

  // Show error state if data failed to load
  if (error || !artworks?.length) {
    return (
      <section className="relative min-h-screen bg-white pt-28">
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
          <div className="max-w-4xl mx-auto text-center text-gray-500">
            {error ? 'Unable to load gallery' : 'No artworks available'}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-white pt-28">
      {/* Fixed "LAURENCE JONES" Text - At Bottom, in front of images but behind bio section */}
      <div 
        className="fixed bottom-0 left-0 right-0 pointer-events-none z-20 overflow-hidden"
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
        {getArtwork(0) && (
          <div className="flex justify-center px-6 md:px-20 mb-20">
            <ImageCard 
              artwork={getArtwork(0)} 
              className="max-w-3xl w-full"
            />
          </div>
        )}

        {/* Section 2: Two images - Bunny left, Lips right (offset) */}
        <div className="relative px-6 md:px-12 mb-16">
          <div className="grid grid-cols-12 gap-6">
            {getArtwork(2) && (
              <div className="col-span-12 md:col-span-4 md:col-start-1">
                <ImageCard artwork={getArtwork(2)} />
              </div>
            )}
            {getArtwork(4) && (
              <div className="col-span-12 md:col-span-4 md:col-start-7 md:mt-16">
                <ImageCard artwork={getArtwork(4)} />
              </div>
            )}
          </div>
        </div>

        {/* Section 3: Small images top, Large tulips bottom left, Balloon flower right */}
        <div className="relative px-6 md:px-12 mb-16">
          {/* Top row - smaller images */}
          <div className="grid grid-cols-12 gap-4 mb-4">
            {getArtwork(5) && (
              <div className="col-span-6 md:col-span-3 md:col-start-1">
                <ImageCard artwork={getArtwork(5)} />
              </div>
            )}
            {getArtwork(1) && (
              <div className="col-span-6 md:col-span-3 md:col-start-7">
                <ImageCard artwork={getArtwork(1)} />
              </div>
            )}
          </div>
          
          {/* Bottom row - larger images with overlap */}
          <div className="grid grid-cols-12 gap-4 md:-mt-8">
            {getArtwork(3) && (
              <div className="col-span-12 md:col-span-5 md:col-start-1">
                <ImageCard artwork={getArtwork(3)} />
              </div>
            )}
            {getArtwork(8) && (
              <div className="col-span-12 md:col-span-4 md:col-start-7 md:mt-24">
                <ImageCard artwork={getArtwork(8)} />
              </div>
            )}
          </div>
        </div>

        {/* Section 4: Three images - Balloon flower, Metallic venus, Rabbit */}
        <div className="relative px-6 md:px-12 mb-16">
          <div className="grid grid-cols-12 gap-4">
            {getArtwork(6) && (
              <div className="col-span-12 md:col-span-3 md:col-start-1 md:mt-16">
                <ImageCard artwork={getArtwork(6)} />
              </div>
            )}
            {getArtwork(7) && (
              <div className="col-span-12 md:col-span-3 md:col-start-5">
                <ImageCard artwork={getArtwork(7)} />
              </div>
            )}
            {getArtwork(9) && (
              <div className="col-span-12 md:col-span-4 md:col-start-9 md:mt-8">
                <ImageCard artwork={getArtwork(9)} />
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroGallery;
