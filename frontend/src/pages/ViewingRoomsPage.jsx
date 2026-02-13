import React, { useState } from 'react';
import Header from '../components/Header';
import { ArrowLeft } from 'lucide-react';
import BlackFooter from '../components/BlackFooter';

const ViewingRoomsPage = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  // Viewing rooms data
  const rooms = [
    {
      id: 1,
      title: 'The Californication House',
      location: 'Los Angeles',
      year: '2025',
      mainImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
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
      mainImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
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
                src={selectedRoom.mainImage}
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PlaceholderImage className="aspect-[4/3]" />
            <PlaceholderImage className="aspect-[4/3]" />
            <PlaceholderImage className="aspect-[4/3]" />
          </div>
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
        <h1 
          className="font-black text-black leading-none tracking-tighter mb-20"
          style={{ 
            fontSize: 'clamp(48px, 10vw, 120px)',
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            letterSpacing: '-0.03em'
          }}
        >
          VIEWING ROOMS
        </h1>

        {/* Rooms - Vertical stacked with info on left, image on right */}
        <div className="space-y-24">
          {rooms.map((room) => (
            <div 
              key={room.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 cursor-pointer group"
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
          ))}
        </div>
      </main>
      <BlackFooter />
    </div>
  );
};

export default ViewingRoomsPage;
