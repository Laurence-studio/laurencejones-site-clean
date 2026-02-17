import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { ArrowLeft } from 'lucide-react';
import BlackFooter from '../components/BlackFooter';

// Gallery image component with loading state and retry logic
const GalleryImage = ({ src, alt, aspectClass, objectFit }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setRetryCount(0);
    setCurrentSrc(src);
  }, [src]);

  const handleError = () => {
    if (retryCount < 2) {
      // Retry with cache-busting query param
      setRetryCount(prev => prev + 1);
      setCurrentSrc(`${src}?retry=${Date.now()}`);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  const handleLoad = () => {
    setLoading(false);
    setError(false);
  };

  return (
    <div className={`overflow-hidden ${aspectClass} bg-gray-100 relative`}>
      {loading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
        </div>
      )}
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <button 
            onClick={() => {
              setError(false);
              setLoading(true);
              setRetryCount(0);
              setCurrentSrc(`${src}?reload=${Date.now()}`);
            }}
            className="text-gray-500 hover:text-gray-700 text-sm underline"
          >
            Click to reload
          </button>
        </div>
      ) : (
        <img 
          src={currentSrc} 
          alt={alt}
          className={`w-full h-full ${objectFit} ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onError={handleError}
          onLoad={handleLoad}
        />
      )}
    </div>
  );
};

const ViewingRoomsPage = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const location = useLocation();

  // Reset to main view when navigating to this page via nav link
  useEffect(() => {
    setSelectedRoom(null);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.key, location.state?.reset]);

  // Viewing rooms data
  const rooms = [
    {
      id: 1,
      title: 'The Californication House',
      location: 'Los Angeles',
      year: '2025',
      mainImage: 'https://customer-assets.emergentagent.com/job_2fb237eb-85b8-4e1a-abed-ad3be1f9478f/artifacts/nnlp2vh7_%27The%20Californication%20House%27%2C%20180x140cm%2C%20Acrylic%20%26%20Specularite%20On%20Belgian%20Linen%2C%202025.jpg',
      detailImage: 'https://customer-assets.emergentagent.com/job_2fb237eb-85b8-4e1a-abed-ad3be1f9478f/artifacts/id9pq380_laurencejones-californicationhouse%20copy.jpg',
      galleryImages: [
        'https://customer-assets.emergentagent.com/job_2fb237eb-85b8-4e1a-abed-ad3be1f9478f/artifacts/aewpx9gn_IMG_3238.jpg',
        'https://customer-assets.emergentagent.com/job_2fb237eb-85b8-4e1a-abed-ad3be1f9478f/artifacts/s951cn27_IMG_3249.jpg',
        'https://customer-assets.emergentagent.com/job_2fb237eb-85b8-4e1a-abed-ad3be1f9478f/artifacts/kmqk019u_IMG_3202.jpg',
        'https://customer-assets.emergentagent.com/job_2fb237eb-85b8-4e1a-abed-ad3be1f9478f/artifacts/9ycebg4r_IMG_3222%20copy.jpg'
      ],
      shortDescription: 'The Californication House is a residential project situated in the Hollywood Hills, conceived in dialogue with architect Jason Somers. The paintings were developed in response to the home\'s elevated position and panoramic views; works that extend the architecture outward into the nocturnal city.',
      fullDescription: `The collection draws primarily from the Liminal Framework and Night Pool bodies of work, where glass, water and reflected light become compositional devices. Installed within floor-to-ceiling glazing and open-plan living spaces, the works operate as continuations of the structure itself, framing the city while subtly destabilising it.

The paintings were developed to heighten the tension between inside and outside, intimacy and spectacle. In this setting, the domestic becomes cinematic; the skyline becomes both backdrop and subject.

This project marks an ongoing exploration into how painting can inhabit architectural space - not as ornament, but as an extension of atmosphere.`,
    },
    {
      id: 2,
      title: 'The Maybourne Hotel',
      location: 'Los Angeles',
      year: '2023',
      mainImage: 'https://customer-assets.emergentagent.com/job_2fb237eb-85b8-4e1a-abed-ad3be1f9478f/artifacts/leusg9v9_%27Night%20Pool%27%2C%20210x180cm%2C%20Acrylic%20on%20Linen%2C%202022%20copy.jpg',
      detailImage: 'https://customer-assets.emergentagent.com/job_2fb237eb-85b8-4e1a-abed-ad3be1f9478f/artifacts/9x1jt6zi_night%20pool%20copy.jpg',
      galleryImages: [
        'https://customer-assets.emergentagent.com/job_2fb237eb-85b8-4e1a-abed-ad3be1f9478f/artifacts/62afqw0r_MBH-EXTERIOR-08-jpg.webp',
        'https://customer-assets.emergentagent.com/job_2fb237eb-85b8-4e1a-abed-ad3be1f9478f/artifacts/nhdkfpsh_A4C1EA41-8014-4370-92D4-FB5DEEB4786B.JPG'
      ],
      shortDescription: 'A placement at The Maybourne Hotel, Beverly Hills, this project introduced a major work into public hospitality space, situating contemporary painting within an environment defined by movement, transience and light.',
      fullDescription: `Work from the Night Pool series was selected for its contemplative tonal range and architectural clarity. Installed within a communal area, the work provides a moment of pause; built from reflected light, glass planes and distant topographies.

The dialogue between painting and hospitality is deliberate. In contrast to the velocity of the hotel environment, the work operates slowly. It rewards distance, shifting between abstraction and image depending on the viewer's position.

Within this context, the painting becomes a spatial anchor; a quiet intervention that alters perception without overwhelming it.`,
    }
  ];

  // Placeholder image component
  const PlaceholderImage = ({ className = '' }) => (
    <div className={`bg-gray-100 flex items-center justify-center ${className}`}>
      <span className="text-gray-300 text-xs"></span>
    </div>
  );

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    // Scroll to top when opening detail view
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);
  };

  const handleBack = () => {
    setSelectedRoom(null);
    // Scroll to top when going back to main view
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);
  };

  // Detail View
  if (selectedRoom) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-32 pb-20 px-6 md:px-12">
          {/* Back button */}
          <div className="mb-12">
            <button 
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="text-sm">Back to Viewing Rooms</span>
            </button>
          </div>

          {/* Main Content - Image Left, Info Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left - Main Image */}
            <div>
              <img
                src={selectedRoom.detailImage || selectedRoom.mainImage}
                alt={selectedRoom.title}
                className="w-full h-auto"
              />
            </div>

            {/* Right - Room Info */}
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-black mb-2">{selectedRoom.title}</h1>
                  <p className="text-xl text-gray-500">{selectedRoom.location}</p>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    {selectedRoom.fullDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Images */}
          {selectedRoom.galleryImages && selectedRoom.galleryImages.length > 0 ? (
            <div className={`grid gap-6 ${selectedRoom.galleryImages.length === 4 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2'}`}>
              {selectedRoom.galleryImages.map((img, idx) => (
                <GalleryImage 
                  key={idx}
                  src={img}
                  alt={`${selectedRoom.title} ${idx + 1}`}
                  aspectClass={selectedRoom.galleryImages.length === 2 ? 'aspect-[4/3]' : 'aspect-square'}
                  objectFit={selectedRoom.galleryImages.length === 2 && idx === 1 ? 'object-contain' : 'object-cover'}
                />
              ))}
            </div>
          ) : selectedRoom.id === 1 ? (
            /* Californication House - 4 placeholder boxes */
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <PlaceholderImage className="aspect-square" />
              <PlaceholderImage className="aspect-square" />
              <PlaceholderImage className="aspect-square" />
              <PlaceholderImage className="aspect-square" />
            </div>
          ) : (
            /* Maybourne Hotel - 2 placeholder boxes */
            <div className="grid grid-cols-2 gap-6">
              <PlaceholderImage className="aspect-square" />
              <PlaceholderImage className="aspect-square" />
            </div>
          )}
        </main>
        <BlackFooter />
      </div>
    );
  }

  // Gallery View - Vertical stacked layout
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-40 pb-20 px-6 md:px-12">
        <div className="mb-20">
          <h1 
            className="font-black text-black leading-none tracking-tighter"
            style={{ 
              fontSize: 'clamp(48px, 10vw, 120px)',
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              letterSpacing: '-0.03em'
            }}
          >
            VIEWING ROOMS
          </h1>
          <p className="text-black text-xl font-semibold mt-2">Architectural Dialogues</p>
          <p className="text-gray-500 text-sm mt-1">Paintings conceived in conversation with built space</p>
        </div>

        {/* Rooms - Vertical stacked with info on left, image on right */}
        <div className="space-y-0">
          {rooms.map((room, index) => (
            <div key={room.id}>
              {/* Divider line */}
              <div className="border-t border-gray-200 mb-12"></div>
              
              <div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 cursor-pointer group mb-16"
                onClick={() => handleRoomClick(room)}
              >
                {/* Left - Project Info */}
                <div className="flex flex-col justify-center order-2 lg:order-1">
                  <p className="text-gray-400 text-sm mb-4">{room.year}</p>
                  <h2 
                    className="font-black text-black leading-none tracking-tight mb-2 group-hover:underline"
                    style={{ 
                      fontSize: 'clamp(32px, 5vw, 56px)',
                      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {room.title}
                  </h2>
                  <p className="text-gray-400 text-lg mb-6">{room.location}</p>
                  <p className="text-gray-600 leading-relaxed max-w-md">
                    {room.shortDescription}
                  </p>
                </div>

                {/* Right - Main Image */}
                <div className="overflow-hidden order-1 lg:order-2">
                  <img
                    src={room.mainImage}
                    alt={room.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <BlackFooter />
    </div>
  );
};

export default ViewingRoomsPage;
