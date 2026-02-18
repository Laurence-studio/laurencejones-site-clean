import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { useFeaturedWorks } from '../hooks/useApi';
import { Grid3X3, Square, ChevronDown, ArrowLeft } from 'lucide-react';
import { Skeleton } from '../components/ui/skeleton';
import BlackFooter from '../components/BlackFooter';
import ShareModule from '../components/ShareModule';

// Artwork metadata - collection status and exhibition history
const artworkMetadata = {
  'A Quiet Heat': {
    status: 'Private Collection',
    exhibitions: ['Rebecca Hossack Art Gallery, London, 2024']
  },
  'A Quartz-Clear Dusk': {
    status: 'Private Collection',
    exhibitions: ['Art Miami, Rebecca Hossack Art Gallery, December 5–10, 2023']
  },
  'Liminal Framework - An Evening Reverie': {
    status: 'Available via Studio',
    exhibitions: ['Art Toronto, Rebecca Hossack Art Gallery, October 27–30, 2022']
  },
  'Memories In Sapphire': {
    status: 'Private Collection',
    exhibitions: ['Silver Palms, Rebecca Hossack Miami Project, Miami, 2024']
  },
  'Night Pool I': {
    status: 'Private Collection',
    exhibitions: [
      'Silver Palms, Rebecca Hossack Miami Project, Miami, 2024',
      'LA Art Show, Rebecca Hossack Art Gallery, February 19–23, 2025'
    ]
  },
  'Night Pool II': {
    status: 'Available via Studio',
    exhibitions: []
  },
  'Twilight Reflections': {
    status: 'Private Collection',
    exhibitions: ['Seattle Art Fair, Rebecca Hossack Art Gallery, July 27–30, 2023']
  },
  'Pool with Orange Float': {
    status: 'Private Collection',
    exhibitions: [
      'Spotlight On: Laurence Jones, Rebecca Hossack Art Gallery, 2021',
      'Art Toronto, Rebecca Hossack Art Gallery, October 27–30, 2019'
    ]
  },
  'Black Palms': {
    status: 'Private Collection',
    exhibitions: ['Seattle Art Fair, Rebecca Hossack Art Gallery, August 3–5, 2018']
  },
  'The Californication House': {
    status: 'Available via Studio',
    exhibitions: []
  },
  'A Light Exists In Spring': {
    status: 'Available via Studio',
    exhibitions: []
  },
  'The Mind Is Wider Than The Sky': {
    status: 'Available via Studio',
    exhibitions: []
  },
  'A World Beyond View (study)': {
    status: 'Available via Studio',
    exhibitions: []
  },
  'Echoes Of The Hills': {
    status: 'Available via Studio',
    exhibitions: []
  }
};

// Helper to get metadata for a work (handles title variations)
const getWorkMetadata = (title) => {
  // Direct match
  if (artworkMetadata[title]) {
    return artworkMetadata[title];
  }
  // Try matching with different dash types
  const normalizedTitle = title.replace(/–/g, '-').replace(/—/g, '-');
  if (artworkMetadata[normalizedTitle]) {
    return artworkMetadata[normalizedTitle];
  }
  // Default fallback
  return { status: 'Available via Studio', exhibitions: [] };
};

const FeaturedWorksPage = () => {
  const location = useLocation();
  const { featuredWorks = [], loading, error } = useFeaturedWorks();
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'full'
  const [selectedWork, setSelectedWork] = useState(null);
  const [selectedWorkFilter, setSelectedWorkFilter] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isExhibitionOpen, setIsExhibitionOpen] = useState(false);

  // Reset state when navigating to this page and scroll to top
  useEffect(() => {
    setSelectedWork(null);
    setSelectedWorkFilter('all');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.key]);

  // Build dropdown options from featuredWorks - safely handle empty array
  const dropdownOptions = useMemo(() => {
    const options = [{ value: 'all', label: 'All Works' }];
    if (Array.isArray(featuredWorks)) {
      featuredWorks.forEach(work => {
        if (work?.id && work?.title) {
          options.push({
            value: work.id,
            label: `${work.title}, ${work.year || ''}`
          });
        }
      });
    }
    return options;
  }, [featuredWorks]);

  // Filter works based on selection and swap Night Pool I/II thumbnail images only
  const filteredWorks = useMemo(() => {
    if (!Array.isArray(featuredWorks)) return [];
    
    let works = featuredWorks;
    
    if (selectedWorkFilter !== 'all') {
      works = featuredWorks.filter(w => w?.id === selectedWorkFilter);
    }
    
    // Swap only the gallery_image between Night Pool I and Night Pool II for grid display
    const result = works.map(w => ({ ...w })); // Create shallow copies
    const nightPool1Index = result.findIndex(w => w?.title === 'Night Pool I');
    const nightPool2Index = result.findIndex(w => w?.title === 'Night Pool II');
    
    if (nightPool1Index !== -1 && nightPool2Index !== -1) {
      // Swap only the gallery images
      const tempImage = result[nightPool1Index].gallery_image;
      result[nightPool1Index].gallery_image = result[nightPool2Index].gallery_image;
      result[nightPool2Index].gallery_image = tempImage;
    }
    
    return result;
  }, [featuredWorks, selectedWorkFilter]);

  const handleWorkClick = (work) => {
    setSelectedWork(work);
    // Use setTimeout to ensure scroll happens after state update and render
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);
  };

  const handleBack = () => {
    setSelectedWork(null);
    setSelectedWorkFilter('all');
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);
  };

  // Single Work Detail View - uses detail_image
  if (selectedWork) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-32 pb-20 px-6 md:px-12">
          {/* Back button and view toggles */}
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
              data-testid="back-to-featured-works"
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
            {/* Large Detail Image */}
            <div className="mb-8">
              <img
                src={selectedWork.detail_image}
                alt={selectedWork.title}
                className="w-full h-auto"
                data-testid="detail-image"
              />
            </div>

            {/* Artwork Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-medium text-black mb-2">{selectedWork.title}</h1>
                <p className="text-gray-600">{selectedWork.year}</p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-gray-600 mb-2">{selectedWork.dimensions}</p>
                <p className="text-gray-500 text-sm">{selectedWork.medium}</p>
              </div>

              {/* Exhibition History Dropdown */}
              <div className="border-t border-gray-200 pt-6">
                <button
                  onClick={() => setIsExhibitionOpen(!isExhibitionOpen)}
                  className="flex items-center justify-between w-full text-left"
                  data-testid="exhibition-dropdown"
                >
                  <span className="text-sm font-medium text-black">Exhibition History</span>
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform text-gray-500 ${isExhibitionOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                {isExhibitionOpen && (
                  <div className="mt-4 space-y-3">
                    {/* Exhibition List */}
                    {getWorkMetadata(selectedWork.title).exhibitions.length > 0 ? (
                      getWorkMetadata(selectedWork.title).exhibitions.map((exhibition, index) => (
                        <p key={index} className="text-gray-500 text-sm">{exhibition}</p>
                      ))
                    ) : (
                      <p className="text-gray-400 text-sm italic">No exhibition history</p>
                    )}
                  </div>
                )}
              </div>

              {/* Collection Status - displayed below dropdown */}
              <div className="pt-4">
                <p className="text-gray-500 text-sm">
                  {getWorkMetadata(selectedWork.title).status}
                </p>
              </div>

              {/* Share Module */}
              <div className="pt-2">
                <ShareModule artwork={selectedWork} inverted={false} />
              </div>
            </div>
          </div>
        </main>
        <BlackFooter />
      </div>
    );
  }

  // Gallery View - uses gallery_image
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
            {/* Works Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 text-sm border border-gray-300 px-4 py-2 hover:border-black transition-colors min-w-[280px] justify-between"
                data-testid="works-dropdown"
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
            {filteredWorks.map((work) => (
              <div 
                key={work.id}
                className="group cursor-pointer"
                onClick={() => handleWorkClick(work)}
                data-testid={`featured-work-${work.id}`}
              >
                <div 
                  className={`overflow-hidden mb-4 bg-gray-50 ${viewMode === 'full' ? 'aspect-auto' : 'aspect-square'}`}
                  style={{ lineHeight: 0, fontSize: 0 }}
                >
                  <img
                    src={work.gallery_image || work.detail_image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 block"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-medium text-black mb-1">{work.title}</h3>
                  <p className="text-gray-500 text-sm mb-1">{work.year}</p>
                  <p className="text-gray-400 text-xs">{work.dimensions}</p>
                  {viewMode === 'full' && (
                    <p className="text-gray-400 text-xs mt-1">{work.medium}</p>
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
