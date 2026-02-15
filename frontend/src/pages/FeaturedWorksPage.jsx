import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { useArtworks } from '../hooks/useApi';
import { Grid3X3, Square, ChevronDown, ArrowLeft } from 'lucide-react';
import { Skeleton } from '../components/ui/skeleton';
import BlackFooter from '../components/BlackFooter';
import ShareModule from '../components/ShareModule';

const FeaturedWorksPage = () => {
  const location = useLocation();
  const { artworks, loading } = useArtworks();
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'full'
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [selectedWorkFilter, setSelectedWorkFilter] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Reset state when navigating to this page
  useEffect(() => {
    setSelectedArtwork(null);
    setSelectedWorkFilter('all');
  }, [location.key]);

  // Build dropdown options from artworks
  const dropdownOptions = useMemo(() => {
    const options = [{ value: 'all', label: 'All Works' }];
    artworks.forEach(artwork => {
      options.push({
        value: artwork.id,
        label: `${artwork.title}, ${artwork.year}`
      });
    });
    return options;
  }, [artworks]);

  // Filter artworks based on selection
  const filteredArtworks = useMemo(() => {
    if (selectedWorkFilter === 'all') {
      return artworks;
    }
    return artworks.filter(a => a.id === selectedWorkFilter);
  }, [artworks, selectedWorkFilter]);

  const handleArtworkClick = (artwork) => {
    setSelectedArtwork(artwork);
  };

  const handleBack = () => {
    setSelectedArtwork(null);
    setSelectedWorkFilter('all');
  };

  // Single Artwork Detail View
  if (selectedArtwork) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-32 pb-20 px-6 md:px-12">
          {/* Back button and view toggles */}
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="text-sm">Back to Featured Works</span>
            </button>
            
            {/* View Toggle Icons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => { setViewMode('full'); handleBack(); }}
                className={`p-2 transition-colors ${viewMode === 'full' ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`}
                title="Full view"
              >
                <Square size={20} />
              </button>
              <button
                onClick={() => { setViewMode('grid'); handleBack(); }}
                className={`p-2 transition-colors ${viewMode === 'grid' ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`}
                title="Grid view"
              >
                <Grid3X3 size={20} />
              </button>
            </div>
          </div>

          {/* Artwork Detail Layout */}
          <div className="max-w-4xl mx-auto">
            {/* Large Image */}
            <div className="mb-8">
              <img
                src={selectedArtwork.image}
                alt={selectedArtwork.title}
                className="w-full h-auto"
              />
            </div>

            {/* Artwork Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-medium text-black mb-2">{selectedArtwork.title}</h1>
                <p className="text-gray-600">{selectedArtwork.year}</p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-gray-600 mb-2">{selectedArtwork.medium}</p>
                <p className="text-gray-500 text-sm">Series: {selectedArtwork.series}</p>
              </div>

              {/* Exhibition History Box */}
              <div className="border border-gray-200 p-6">
                <h3 className="text-sm font-medium tracking-wide mb-4">EXHIBITION HISTORY</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>Whitney Museum of American Art, New York, 2014</li>
                  <li>Centre Pompidou, Paris, 2015</li>
                  <li>Guggenheim Bilbao, Spain, 2015</li>
                </ul>
              </div>

              {/* Collection */}
              <div>
                <p className="text-gray-500 text-sm">Collection: Private</p>
              </div>

              {/* Share Module */}
              <div className="pt-2">
                <ShareModule artwork={selectedArtwork} inverted={false} />
              </div>
            </div>
          </div>
        </main>
        <BlackFooter />
      </div>
    );
  }

  // Gallery View
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-40 pb-20 px-6 md:px-12">
        {/* Header Row with Title, Dropdown and View Toggle */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <h1 
            className="font-black text-black leading-none tracking-tighter mb-6 md:mb-0"
            style={{ 
              fontSize: 'clamp(48px, 10vw, 120px)',
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              letterSpacing: '-0.03em'
            }}
          >
            FEATURED WORKS
          </h1>

          <div className="flex items-center gap-6">
            {/* Exhibited Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 text-sm border border-gray-300 px-4 py-2 hover:border-black transition-colors min-w-[280px] justify-between"
              >
                <span className="truncate">{dropdownOptions.find(e => e.value === selectedWorkFilter)?.label || 'All Works'}</span>
                <ChevronDown size={16} className={`transition-transform flex-shrink-0 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 shadow-lg z-50 max-h-80 overflow-y-auto">
                  {dropdownOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSelectedWorkFilter(option.value);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        selectedWorkFilter === option.value ? 'bg-gray-100' : ''
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* View Toggle Icons */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setViewMode('full')}
                className={`p-2 transition-colors ${viewMode === 'full' ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`}
                title="Full view"
              >
                <Square size={20} />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 transition-colors ${viewMode === 'grid' ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`}
                title="Grid view"
              >
                <Grid3X3 size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        {loading ? (
          <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 max-w-2xl'}`}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i}>
                <Skeleton className="aspect-square mb-4" />
                <Skeleton className="h-4 w-3/4 mb-2" />
                <Skeleton className="h-3 w-1/2 mb-1" />
                <Skeleton className="h-3 w-2/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 max-w-2xl mx-auto'}`}>
            {filteredArtworks.map((artwork) => (
              <div 
                key={artwork.id}
                className="group cursor-pointer"
                onClick={() => handleArtworkClick(artwork)}
              >
                <div className={`overflow-hidden mb-4 bg-gray-50 ${viewMode === 'full' ? 'aspect-auto' : 'aspect-square'}`}>
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-medium text-black mb-1">{artwork.title}</h3>
                  <p className="text-gray-500 text-sm mb-1">{artwork.year}</p>
                  <p className="text-gray-400 text-xs">{artwork.medium}</p>
                  {viewMode === 'full' && (
                    <p className="text-gray-400 text-xs mt-1">Series: {artwork.series}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <BlackFooter />
    </div>
  );
};

export default FeaturedWorksPage;
