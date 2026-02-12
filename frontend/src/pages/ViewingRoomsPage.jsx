import React from 'react';
import Header from '../components/Header';
import { useArtworks } from '../hooks/useApi';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '../components/ui/dialog';
import { X } from 'lucide-react';
import { Skeleton } from '../components/ui/skeleton';
import BlackFooter from '../components/BlackFooter';

const ViewingRoomsPage = () => {
  const { artworks, loading } = useArtworks();
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  // Group artworks by series
  const seriesGroups = artworks.reduce((acc, artwork) => {
    if (!acc[artwork.series]) {
      acc[artwork.series] = [];
    }
    acc[artwork.series].push(artwork);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-40 pb-20 px-6 md:px-12">
        <h1 
          className="font-black text-black leading-none tracking-tighter mb-16"
          style={{ 
            fontSize: 'clamp(48px, 10vw, 120px)',
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            letterSpacing: '-0.03em'
          }}
        >
          VIEWING ROOMS
        </h1>

        {loading ? (
          <div className="space-y-16">
            {[1, 2].map((i) => (
              <div key={i}>
                <Skeleton className="h-8 w-48 mb-8" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3].map((j) => (
                    <div key={j}>
                      <Skeleton className="aspect-square mb-4" />
                      <Skeleton className="h-4 w-3/4 mb-2" />
                      <Skeleton className="h-3 w-1/4" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          Object.entries(seriesGroups).map(([series, works]) => (
            <div key={series} className="mb-16">
              <h2 className="text-2xl font-light text-gray-800 mb-8 border-b border-gray-200 pb-4">
                {series}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {works.map((artwork) => (
                  <div 
                    key={artwork.id}
                    className="group cursor-pointer"
                    onClick={() => setSelectedArtwork(artwork)}
                  >
                    <div className="aspect-square overflow-hidden mb-4">
                      <img
                        src={artwork.image}
                        alt={artwork.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-medium text-black mb-1">{artwork.title}</h3>
                    <p className="text-gray-500 text-sm">{artwork.year}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}

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
      </main>
    </div>
  );
};

export default ViewingRoomsPage;
