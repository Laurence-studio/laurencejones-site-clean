import React from 'react';
import Header from '../components/Header';
import BlackFooter from '../components/BlackFooter';

const ExhibitionsPage = () => {
  // Static exhibitions data
  const exhibitions = [
    {
      id: 1,
      year: '2024',
      title: 'Silver Palms',
      venue: 'Rebecca Hossack Miami Project, Miami',
      hasMonograph: false
    },
    {
      id: 2,
      year: '2021',
      title: 'Imago',
      venue: 'Rebecca Hossack Gallery X Citi Virtual Salon',
      hasMonograph: false
    },
    {
      id: 3,
      year: '2021',
      title: 'Spotlight On: Laurence Jones',
      venue: 'Rebecca Hossack Gallery, London',
      hasMonograph: false
    },
    {
      id: 4,
      year: '2019',
      title: 'How To Live In Los Angeles',
      venue: 'Rebecca Hossack Gallery, London',
      hasMonograph: true
    },
    {
      id: 5,
      year: '2017',
      title: 'Night Works',
      venue: 'Rebecca Hossack Gallery, London',
      hasMonograph: true
    }
  ];

  // Placeholder image component
  const PlaceholderImage = () => (
    <div className="w-20 h-20 bg-gray-200 flex items-center justify-center">
      <span className="text-gray-400 text-xs"></span>
    </div>
  );

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
          EXHIBITIONS
        </h1>

        <div className="space-y-12">
          {exhibitions.map((exhibition) => (
            <div key={exhibition.id} className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
              {/* Exhibition Info */}
              <div className="flex-1">
                <p className="text-gray-500 text-sm mb-1">{exhibition.year}</p>
                <h3 className="text-xl font-bold text-black mb-1">
                  {exhibition.title}
                </h3>
                <p className="text-gray-600">{exhibition.venue}</p>
              </div>

              {/* Image Placeholders */}
              <div className="flex gap-3">
                <PlaceholderImage />
                <PlaceholderImage />
                <PlaceholderImage />
                {exhibition.hasMonograph && (
                  <div className="ml-4">
                    <PlaceholderImage />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
      <BlackFooter />
    </div>
  );
};

export default ExhibitionsPage;
