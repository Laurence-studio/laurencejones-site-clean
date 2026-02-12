import React, { useState } from 'react';
import { useArtworks } from '../hooks/useApi';
import { Dialog, DialogContent, DialogTitle } from './ui/dialog';
import { X } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

const ArtworkGallery = () => {
  const { artworks, loading } = useArtworks();
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  // Different groupings for the interleaved layout
  const row1 = artworks.slice(1, 4);
  const row2 = artworks.slice(4, 7);
  const row3 = artworks.slice(7, 10);

  const ArtworkRow = ({ artworksData, showTypography = true }) => (
    <div className="relative mb-4">
      {/* Large Typography */}
      {showTypography && (
        <div className="relative pointer-events-none">
          <h2 
            className="font-black text-black leading-none tracking-tighter whitespace-nowrap"
            style={{ 
              fontSize: 'clamp(60px, 14vw, 220px)',
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              letterSpacing: '-0.02em',
              lineHeight: '0.85'
            }}
          >
            JEFF KOONS
          </h2>
        </div>
      )}
      
      {/* Artwork Grid - Positioned to overlap with typography */}
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 px-6 md:px-12 ${showTypography ? '-mt-16 md:-mt-28 lg:-mt-40' : ''} relative z-10`}>
        {artworksData.map((artwork) => (
          <div 
            key={artwork.id}
            className="group cursor-pointer relative overflow-hidden"
            onClick={() => setSelectedArtwork(artwork)}
          >
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
          </div>
        ))}
      </div>
    </div>
  );

  const LoadingRow = () => (
    <div className="relative mb-4">
      <div className="relative pointer-events-none">
        <h2 
          className="font-black text-black leading-none tracking-tighter whitespace-nowrap"
          style={{ 
            fontSize: 'clamp(60px, 14vw, 220px)',
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            letterSpacing: '-0.02em',
            lineHeight: '0.85'
          }}
        >
          JEFF KOONS
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 md:px-12 -mt-16 md:-mt-28 lg:-mt-40 relative z-10">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="aspect-square" />
        ))}
      </div>
    </div>
  );

  if (loading) {
    return (
      <section className="relative bg-white pt-8 pb-12">
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
      </section>
    );
  }

  return (
    <section className="relative bg-white pt-8 pb-12">
      {row1.length > 0 && <ArtworkRow artworksData={row1} />}
      {row2.length > 0 && <ArtworkRow artworksData={row2} />}
      {row3.length > 0 && <ArtworkRow artworksData={row3} />}

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
