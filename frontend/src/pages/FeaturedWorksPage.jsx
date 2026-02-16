import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { useFeaturedWorks } from '../hooks/useApi';
import { Grid3X3, Square, ChevronDown, ArrowLeft } from 'lucide-react';
import { Skeleton } from '../components/ui/skeleton';
import BlackFooter from '../components/BlackFooter';
import ShareModule from '../components/ShareModule';

const FeaturedWorksPage = () => {
  const location = useLocation();
  const { featuredWorks, loading } = useFeaturedWorks();
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'full'
  const [selectedWork, setSelectedWork] = useState(null);
  const [selectedWorkFilter, setSelectedWorkFilter] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Reset state when navigating to this page
  useEffect(() => {
    setSelectedWork(null);
    setSelectedWorkFilter('all');
  }, [location.key]);

  // Build dropdown options from featuredWorks
  const dropdownOptions = useMemo(() => {
    const options = [{ value: 'all', label: 'All Works' }];
    featuredWorks.forEach(work => {
      options.push({
        value: work.id,
        label: `${work.title}, ${work.year}`
      });
    });
    return options;
  }, [featuredWorks]);

  // Filter works based on selection
  const filteredWorks = useMemo(() => {
    if (selectedWorkFilter === 'all') {
      return featuredWorks;
    }
    return featuredWorks.filter(w => w.id === selectedWorkFilter);
  }, [featuredWorks, selectedWorkFilter]);

  const handleWorkClick = (work) => {
    setSelectedWork(work);
  };

  const handleBack = () => {
    setSelectedWork(null);
    setSelectedWorkFilter('all');
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
                <div className={`overflow-hidden mb-4 bg-gray-50 ${viewMode === 'full' ? 'aspect-auto' : 'aspect-square'}`}>
                  <img
                    src={work.gallery_image || work.detail_image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
