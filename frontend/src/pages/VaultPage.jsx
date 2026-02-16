import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { useVaultWorks } from '../hooks/useApi';
import { Grid3X3, Square, ChevronDown, ArrowLeft } from 'lucide-react';
import { Skeleton } from '../components/ui/skeleton';
import BlackFooter from '../components/BlackFooter';
import ShareModule from '../components/ShareModule';

// Placeholder exhibition data
const placeholderExhibitions = [
  "Solo Exhibition, Rebecca Hossack Art Gallery, London, 2024",
  "Group Show, Art Angels, Los Angeles, 2023",
  "Summer Exhibition, Royal Academy of Arts, London, 2023"
];

const VaultPage = () => {
  const location = useLocation();
  const { vaultWorks, loading } = useVaultWorks();
  const [viewMode, setViewMode] = useState('grid');
  const [selectedWork, setSelectedWork] = useState(null);
  const [selectedWorkFilter, setSelectedWorkFilter] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showLanding, setShowLanding] = useState(true);
  const [landingAnimated, setLandingAnimated] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isExhibitionOpen, setIsExhibitionOpen] = useState(false);

  // Reset state when navigating to this page
  useEffect(() => {
    setSelectedWork(null);
    setSelectedWorkFilter('all');
    setShowLanding(true);
    setLandingAnimated(false);
    setIsTransitioning(false);
    setIsExhibitionOpen(false);
  }, [location.key]);

  // Trigger landing animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLandingAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [showLanding]);

  const handleEnterVault = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowLanding(false);
    }, 500);
  };

  // Build dropdown options
  const dropdownOptions = useMemo(() => {
    const options = [{ value: 'all', label: 'All Works' }];
    vaultWorks.forEach(work => {
      options.push({
        value: work.id,
        label: `${work.title}, ${work.year}`
      });
    });
    return options;
  }, [vaultWorks]);

  // Filter works
  const filteredWorks = useMemo(() => {
    if (selectedWorkFilter === 'all') {
      return vaultWorks;
    }
    return vaultWorks.filter(w => w.id === selectedWorkFilter);
  }, [vaultWorks, selectedWorkFilter]);

  const handleWorkClick = (work) => {
    setSelectedWork(work);
    setIsExhibitionOpen(false);
  };

  const handleBack = () => {
    setSelectedWork(null);
    setSelectedWorkFilter('all');
  };

  const handleEnquire = () => {
    const subject = encodeURIComponent(`Enquiry: ${selectedWork.title}`);
    const body = encodeURIComponent(`I am interested in "${selectedWork.title}" (${selectedWork.year}).\n\nPlease provide more information about availability and pricing.`);
    window.location.href = `mailto:studio@laurencejones.com?subject=${subject}&body=${body}`;
  };

  // Landing Page
  if (showLanding) {
    return (
      <div 
        className={`min-h-screen bg-black flex flex-col items-center justify-center transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        style={{ backgroundColor: '#0a0a0a' }}
      >
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

  // Detail View
  if (selectedWork) {
    return (
      <div className="min-h-screen bg-black">
        <Header inverted />
        <main className="pt-32 pb-20 px-6 md:px-12">
          {/* Back button */}
          <div className="flex items-center justify-between mb-12">
            <button 
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              data-testid="back-to-vault"
            >
              <ArrowLeft size={20} />
              <span className="text-sm">Back to Vault</span>
            </button>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => { setViewMode('full'); handleBack(); }}
                className={`p-2 transition-colors ${viewMode === 'full' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
              >
                <Square size={20} />
              </button>
              <button
                onClick={() => { setViewMode('grid'); handleBack(); }}
                className={`p-2 transition-colors ${viewMode === 'grid' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
              >
                <Grid3X3 size={20} />
              </button>
            </div>
          </div>

          {/* Main Content - Image Left, Info Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Left - Main Artwork Image */}
            <div>
              <img
                src={selectedWork.main_image}
                alt={selectedWork.title}
                className="w-full h-auto"
                data-testid="vault-main-image"
              />
            </div>

            {/* Right - Info */}
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-medium text-white mb-2">{selectedWork.title}</h1>
                  <p className="text-xl text-gray-400">{selectedWork.year}</p>
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <p className="text-gray-400 mb-2">{selectedWork.dimensions}</p>
                  <p className="text-gray-500 text-sm">{selectedWork.medium}</p>
                </div>

                {/* Exhibition History Dropdown */}
                <div className="border-t border-gray-700 pt-6">
                  <button
                    onClick={() => setIsExhibitionOpen(!isExhibitionOpen)}
                    className="flex items-center justify-between w-full text-left"
                    data-testid="vault-exhibition-dropdown"
                  >
                    <span className="text-sm font-medium text-white">Exhibited</span>
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform text-gray-500 ${isExhibitionOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  {isExhibitionOpen && (
                    <div className="mt-4 space-y-3">
                      {(selectedWork.exhibitions?.length > 0 ? selectedWork.exhibitions : placeholderExhibitions).map((exhibition, index) => (
                        <p key={index} className="text-gray-400 text-sm">{exhibition}</p>
                      ))}
                      
                      <div className="pt-3 border-t border-gray-800">
                        <p className="text-gray-400 text-sm">
                          {selectedWork.collection || "Private Collection, London"}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Enquire Button */}
                <button
                  onClick={handleEnquire}
                  className="w-full border border-white bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-black hover:text-white transition-colors"
                  data-testid="enquire-button"
                >
                  ENQUIRE ABOUT THIS WORK
                </button>

                {/* Share Module */}
                <div className="pt-4">
                  <ShareModule artwork={selectedWork} inverted={true} />
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Wall View & Interior View - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Gallery Wall View (white wall) */}
            <div className="overflow-hidden">
              <img
                src={selectedWork.wall_image}
                alt={`${selectedWork.title} - Gallery View`}
                className="w-full h-auto object-cover"
                style={{ marginBottom: '-2px' }}
                data-testid="vault-wall-image"
              />
            </div>

            {/* Interior View */}
            <div className="overflow-hidden">
              <img
                src={selectedWork.interior_image}
                alt={`${selectedWork.title} - Interior View`}
                className="w-full h-auto object-cover"
                style={{ marginBottom: '-2px' }}
                data-testid="vault-interior-image"
              />
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
        {/* Header */}
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
                data-testid="vault-works-dropdown"
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

            {/* View Toggle */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setViewMode('full')}
                className={`p-2 transition-colors ${viewMode === 'full' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
              >
                <Square size={20} />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 transition-colors ${viewMode === 'grid' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
              >
                <Grid3X3 size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Grid - uses main_image */}
        {loading ? (
          <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 max-w-2xl'}`}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <Skeleton className="aspect-square mb-4 bg-gray-800" />
                <Skeleton className="h-4 w-3/4 mb-2 bg-gray-800" />
                <Skeleton className="h-3 w-1/2 bg-gray-800" />
              </div>
            ))}
          </div>
        ) : (
          <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 max-w-2xl mx-auto'}`}>
            {filteredWorks.map((work) => (
              <div 
                key={work.id}
                className="group cursor-pointer"
                onClick={() => handleWorkClick(work)}
                data-testid={`vault-work-${work.id}`}
              >
                <div className={`overflow-hidden mb-4 bg-gray-900 ${viewMode === 'full' ? 'aspect-auto' : 'aspect-square'}`}>
                  <img
                    src={work.main_image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-medium text-white mb-1">{work.title}</h3>
                  <p className="text-gray-400 text-sm mb-1">{work.year}</p>
                  <p className="text-gray-500 text-xs">{work.dimensions}</p>
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
