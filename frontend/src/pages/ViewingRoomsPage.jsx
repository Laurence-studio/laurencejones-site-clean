import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { ArrowLeft } from 'lucide-react';
import BlackFooter from '../components/BlackFooter';

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
      shortDescription: 'A landmark residential project in the Hollywood Hills, designed in collaboration with architect Jason Somers.',
      fullDescription: `The Californication House is a landmark residential project in the Hollywood Hills, designed in collaboration with architect Jason Somers. This modernist home features floor-to-ceiling windows that frame panoramic views of Los Angeles, creating an ideal setting for large-scale contemporary art.

The collection at Californication House includes works from the "Liminal Framework" series, carefully positioned to interact with the architecture's clean lines and the dramatic California light. Each painting was selected to complement the home's minimalist aesthetic while adding depth and visual interest to the living spaces.

This project represents an ongoing exploration of how art can transform domestic environments, blurring the boundaries between gallery and home, public and private space.`,
    },
    {
      id: 2,
      title: 'The Maybourne Hotel',
      location: 'Los Angeles',
      year: '2024',
      mainImage: 'https://customer-assets.emergentagent.com/job_2fb237eb-85b8-4e1a-abed-ad3be1f9478f/artifacts/leusg9v9_%27Night%20Pool%27%2C%20210x180cm%2C%20Acrylic%20on%20Linen%2C%202022%20copy.jpg',
      detailImage: 'https://customer-assets.emergentagent.com/job_2fb237eb-85b8-4e1a-abed-ad3be1f9478f/artifacts/9x1jt6zi_night%20pool%20copy.jpg',
      galleryImages: [
        'https://customer-assets.emergentagent.com/job_2fb237eb-85b8-4e1a-abed-ad3be1f9478f/artifacts/62afqw0r_MBH-EXTERIOR-08-jpg.webp',
        'https://customer-assets.emergentagent.com/job_2fb237eb-85b8-4e1a-abed-ad3be1f9478f/artifacts/nhdkfpsh_A4C1EA41-8014-4370-92D4-FB5DEEB4786B.JPG'
      ],
      shortDescription: 'A prestigious hospitality commission showcasing paintings throughout public spaces and private suites.',
      fullDescription: `The Maybourne Hotel, Beverly Hills commissioned a series of works to be displayed throughout their public spaces and private suites. This prestigious hospitality project showcases paintings that capture the essence of California modernism—the interplay of light, architecture, and landscape that defines the Los Angeles aesthetic.

Works on permanent display include pieces from the "Night Pool" series, which evoke the contemplative atmosphere of twilight hours. The paintings create moments of pause and reflection for guests, offering a counterpoint to the hotel's bustling energy.

The Maybourne collection demonstrates how contemporary art can enhance the hospitality experience, creating memorable encounters that resonate long after a guest's stay.`,
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
  };

  const handleBack = () => {
    setSelectedRoom(null);
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
                <div key={idx} className={`overflow-hidden ${selectedRoom.galleryImages.length === 2 ? 'aspect-[4/3]' : 'aspect-square'} bg-gray-100`}>
                  <img 
                    src={img} 
                    alt={`${selectedRoom.title} ${idx + 1}`}
                    className={`w-full h-full ${selectedRoom.galleryImages.length === 2 && idx === 1 ? 'object-contain' : 'object-cover'}`}
                    onError={(e) => {
                      // Retry loading the image once on error
                      if (!e.target.dataset.retried) {
                        e.target.dataset.retried = 'true';
                        e.target.src = img + '?' + Date.now();
                      }
                    }}
                    loading="lazy"
                  />
                </div>
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
