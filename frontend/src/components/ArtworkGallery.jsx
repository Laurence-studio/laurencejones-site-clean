import React, { useState } from 'react';
import { artworks } from '../data/mockData';
import { Dialog, DialogContent, DialogTitle } from './ui/dialog';
import { X } from 'lucide-react';

const ArtworkGallery = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  // Split artworks into sections for the interleaved layout
  const topRowArtworks = artworks.slice(1, 4); // Skip hero image, take next 3
  const middleRowArtworks = artworks.slice(4, 7);
  const bottomRowArtworks = artworks.slice(7);

  return (
    <section className="relative bg-white py-12">
      {/* First row with "JEFF KOONS" typography */}
      <div className="relative mb-8">
        <h2 
          className="font-black text-black leading-none tracking-tighter text-center mb-8"
          style={{ 
            fontSize: 'clamp(60px, 14vw, 220px)',
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            letterSpacing: '-0.03em'
          }}
        >
          JEFF KOONS
        </h2>
        
        {/* Artwork images overlapping with typography */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12 -mt-20 md:-mt-32 relative z-10">
          {topRowArtworks.map((artwork) => (
            <div 
              key={artwork.id}
              className="group cursor-pointer relative overflow-hidden"
              onClick={() => setSelectedArtwork(artwork)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Second row */}
      <div className="relative mb-8">
        <h2 
          className="font-black text-black leading-none tracking-tighter text-center mb-8"
          style={{ 
            fontSize: 'clamp(60px, 14vw, 220px)',
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            letterSpacing: '-0.03em'
          }}
        >
          JEFF KOONS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12 -mt-20 md:-mt-32 relative z-10">
          {middleRowArtworks.map((artwork) => (
            <div 
              key={artwork.id}
              className="group cursor-pointer relative overflow-hidden"
              onClick={() => setSelectedArtwork(artwork)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Third row */}
      <div className="relative">
        <h2 
          className="font-black text-black leading-none tracking-tighter text-center mb-8"
          style={{ 
            fontSize: 'clamp(60px, 14vw, 220px)',
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            letterSpacing: '-0.03em'
          }}
        >
          JEFF KOONS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12 -mt-20 md:-mt-32 relative z-10">
          {bottomRowArtworks.map((artwork) => (
            <div 
              key={artwork.id}
              className="group cursor-pointer relative overflow-hidden"
              onClick={() => setSelectedArtwork(artwork)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>
          ))}
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

export default ArtworkGallery;
