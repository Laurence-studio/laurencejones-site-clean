import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { useArtworks } from '../hooks/useApi';
import { Grid3X3, Square, ChevronDown, ArrowLeft } from 'lucide-react';
import { Skeleton } from '../components/ui/skeleton';
import BlackFooter from '../components/BlackFooter';
import ShareModule from '../components/ShareModule';

const VaultPage = () => {
  const location = useLocation();
  const { artworks, loading } = useArtworks();
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'full'
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [selectedWorkFilter, setSelectedWorkFilter] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showLanding, setShowLanding] = useState(true);
  const [landingAnimated, setLandingAnimated] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Reset state when navigating to this page via main menu
  useEffect(() => {
    setSelectedArtwork(null);
    setSelectedWorkFilter('all');
    setShowLanding(true);
    setLandingAnimated(false);
    setIsTransitioning(false);
  }, [location.key]);

  // Trigger landing animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setLandingAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [showLanding]);

  // Handle enter vault click
  const handleEnterVault = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowLanding(false);
    }, 500);
  };

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

  const handleEnquire = () => {
    // Open email with pre-filled subject
    const subject = encodeURIComponent(`Enquiry: ${selectedArtwork.title}`);
    const body = encodeURIComponent(`I am interested in "${selectedArtwork.title}" (${selectedArtwork.year}).\n\nPlease provide more information about availability and pricing.`);
    window.location.href = `mailto:studio@laurencejones.com?subject=${subject}&body=${body}`;
  };

  // Landing Page View
  if (showLanding) {
    return (
      <div 
        className={`min-h-screen bg-black flex flex-col items-center justify-center transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        style={{ backgroundColor: '#0a0a0a' }}
      >
        {/* Title */}
        <h1 
          className={`text-white text-center leading-none tracking-tighter transition-all duration-500 ease-out ${
            landingAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
          style={{ 
            fontSize: 'clamp(40px, 12vw, 140px)',
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            marginTop: '5vh'
          }}
        >
          SILVER PALMS
          <br />
          <span style={{ fontSize: '0.85em' }}>VAULT</span>
        </h1>

        {/* Enter Link */}
        <button
          onClick={handleEnterVault}
          className={`mt-10 text-white/75 hover:text-white text-sm tracking-widest transition-all duration-300 ease-out hover:underline underline-offset-4 ${
            landingAnimated ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-2'
          }`}
          style={{ 
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontWeight: 400,
            transitionDelay: landingAnimated ? '200ms' : '0ms'
          }}
        >
          Enter Vault →
        </button>
      </div>
    );
  }

  // Single Artwork Detail View - Sales Presentation Layout
  if (selectedArtwork) {
    return (
      <div className="min-h-screen bg-black">
        <Header inverted />
        <main className="pt-32 pb-20 px-6 md:px-12">
          {/* Back button and view toggles */}
          <div className="flex items-center justify-between mb-12">
            <button 
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="text-sm">Back to Vault</span>
            </button>
            
            {/* View Toggle Icons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => { setViewMode('full'); handleBack(); }}
                className={`p-2 transition-colors ${viewMode === 'full' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
                title="Full view"
              >
                <Square size={20} />
              </button>
              <button
                onClick={() => { setViewMode('grid'); handleBack(); }}
                className={`p-2 transition-colors ${viewMode === 'grid' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
                title="Grid view"
              >
                <Grid3X3 size={20} />
              </button>
            </div>
          </div>

          {/* Main Content - Image Left, Info Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Left - Full Artwork Image */}
            <div>
              <img
                src={selectedArtwork.image}
                alt={selectedArtwork.title}
                className="w-full h-auto"
              />
            </div>

            {/* Right - Artwork Info and Enquire */}
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-medium text-white mb-2">{selectedArtwork.title}</h1>
                  <p className="text-xl text-gray-400">{selectedArtwork.year}</p>
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <p className="text-gray-400 mb-2">{selectedArtwork.medium}</p>
                  <p className="text-gray-500 text-sm">Series: {selectedArtwork.series}</p>
                </div>

                {/* Exhibition History Box */}
                <div className="border border-gray-700 p-6">
                  <h3 className="text-sm font-medium tracking-wide mb-4 text-white">EXHIBITION HISTORY</h3>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>Whitney Museum of American Art, New York, 2014</li>
                    <li>Centre Pompidou, Paris, 2015</li>
                    <li>Guggenheim Bilbao, Spain, 2015</li>
                  </ul>
                </div>

                {/* Collection */}
                <div>
                  <p className="text-gray-500 text-sm">Collection: Private</p>
                </div>

                {/* Enquire Button */}
                <button
                  onClick={handleEnquire}
                  className="w-full border border-white bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-black hover:text-white transition-colors rounded-none"
                >
                  ENQUIRE ABOUT THIS WORK
                </button>

                {/* Share Module */}
                <div className="pt-4">
                  <ShareModule artwork={selectedArtwork} inverted={true} />
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Install & Interior View - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Gallery Install View */}
            <div>
              <div className="bg-neutral-800 aspect-[4/5] flex items-center justify-center p-8">
                <div className="w-3/4 aspect-square border-8 border-neutral-700 shadow-2xl flex items-center justify-center overflow-hidden">
                  <img
                    src={selectedArtwork.image}
                    alt={`${selectedArtwork.title} - Gallery Install`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Interior View */}
            <div>
              <div className="bg-amber-50 aspect-[4/5] flex items-center justify-center relative overflow-hidden">
                {/* Interior room background placeholder */}
                <div className="absolute inset-0 bg-gradient-to-b from-amber-100 to-amber-50"></div>
                {/* Wall decoration */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-amber-200/50 to-transparent"></div>
                {/* Artwork on wall */}
                <div className="relative z-10 w-1/2 aspect-[3/4] border-4 border-neutral-800 shadow-xl overflow-hidden">
                  <img
                    src={selectedArtwork.image}
                    alt={`${selectedArtwork.title} - Interior View`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floor lamp silhouette */}
                <div className="absolute right-8 bottom-8 w-1 h-32 bg-neutral-400/30"></div>
                <div className="absolute right-6 bottom-40 w-6 h-4 bg-neutral-400/20 rounded-t-full"></div>
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
    <div className="min-h-screen bg-black">
      <Header inverted />
      <main className="pt-40 pb-20 px-6 md:px-12">
        {/* Header Row with Title, Dropdown and View Toggle */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h1 
              className="font-black text-white leading-none tracking-tighter"
              style={{ 
                fontSize: 'clamp(48px, 10vw, 120px)',
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                letterSpacing: '-0.03em'
              }}
            >
              VAULT
            </h1>
            <p className="text-white text-xl font-semibold mt-2">Silver Palms</p>
            <p className="text-gray-400 text-sm mt-1 mb-6 md:mb-0">Presented through the studio in coordination with gallery partners</p>
          </div>

          <div className="flex items-center gap-6">
            {/* Works Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 text-sm border border-gray-600 text-white px-4 py-2 hover:border-white transition-colors min-w-[280px] justify-between bg-black"
              >
                <span className="truncate">{dropdownOptions.find(e => e.value === selectedWorkFilter)?.label || 'All Works'}</span>
                <ChevronDown size={16} className={`transition-transform flex-shrink-0 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-black border border-gray-600 shadow-lg z-50 max-h-80 overflow-y-auto">
                  {dropdownOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSelectedWorkFilter(option.value);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-900 transition-colors ${
                        selectedWorkFilter === option.value ? 'bg-gray-800' : ''
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
                className={`p-2 transition-colors ${viewMode === 'full' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
                title="Full view"
              >
                <Square size={20} />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 transition-colors ${viewMode === 'grid' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
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
                <Skeleton className="aspect-square mb-4 bg-gray-800" />
                <Skeleton className="h-4 w-3/4 mb-2 bg-gray-800" />
                <Skeleton className="h-3 w-1/2 mb-1 bg-gray-800" />
                <Skeleton className="h-3 w-2/3 bg-gray-800" />
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
                <div className={`overflow-hidden mb-4 bg-gray-900 ${viewMode === 'full' ? 'aspect-auto' : 'aspect-square'}`}>
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-medium text-white mb-1">{artwork.title}</h3>
                  <p className="text-gray-400 text-sm mb-1">{artwork.year}</p>
                  <p className="text-gray-500 text-xs">{artwork.medium}</p>
                  {viewMode === 'full' && (
                    <p className="text-gray-500 text-xs mt-1">Series: {artwork.series}</p>
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

export default VaultPage;
