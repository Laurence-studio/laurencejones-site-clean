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
      hasMonograph: false,
      images: [
        'https://customer-assets.emergentagent.com/job_2fb237eb-85b8-4e1a-abed-ad3be1f9478f/artifacts/p57rqxgr_IMG_2822%20copy.jpg',
        'https://customer-assets.emergentagent.com/job_2fb237eb-85b8-4e1a-abed-ad3be1f9478f/artifacts/x8gfj5hg_%27Whispers%20Of%20Nature%27s%20Melody%27%2C%20150x110cm%2C%20Acrylic%20On%20Belgian%20Linen%20copy%203.jpg',
        'https://customer-assets.emergentagent.com/job_2fb237eb-85b8-4e1a-abed-ad3be1f9478f/artifacts/6c8lfv2d_%27A%20Certain%20Slant%20Of%20Light%27%2C%20130x110cm%2C%20Acrylic%20On%20Belgian%20Linen%20copy%203.jpg'
      ]
    },
    {
      id: 2,
      year: '2021',
      title: 'Imago',
      venue: 'Rebecca Hossack Gallery X Citi Virtual Salon',
      hasMonograph: false,
      images: [
        'https://customer-assets.emergentagent.com/job_2fb237eb-85b8-4e1a-abed-ad3be1f9478f/artifacts/pmczf5uw_%E2%80%98A%20Midnight%20Moment%20%28Night%20Pool%29%E2%80%99%2C%20180%20x%20155cm%2C%20Acrylic%20on%20Linen%2C%202021%20%20copy.jpg',
        'https://customer-assets.emergentagent.com/job_2fb237eb-85b8-4e1a-abed-ad3be1f9478f/artifacts/154kw0fu_E98D1561-8314-4D93-B20E-9AB5A5428CA8.jpg',
        'https://customer-assets.emergentagent.com/job_2fb237eb-85b8-4e1a-abed-ad3be1f9478f/artifacts/98lgojlp_IMG_2732.jpg'
      ]
    },
    {
      id: 3,
      year: '2021',
      title: 'Spotlight On: Laurence Jones',
      venue: 'Rebecca Hossack Gallery, London',
      hasMonograph: false,
      images: []
    },
    {
      id: 4,
      year: '2019',
      title: 'How To Live In Los Angeles',
      venue: 'Rebecca Hossack Gallery, London',
      hasMonograph: true,
      images: []
    },
    {
      id: 5,
      year: '2017',
      title: 'Night Works',
      venue: 'Rebecca Hossack Gallery, London',
      hasMonograph: true,
      images: []
    }
  ];

  // Placeholder image component
  const PlaceholderImage = () => (
    <div className="w-24 h-24 bg-gray-100 flex items-center justify-center">
      <span className="text-gray-300 text-xs"></span>
    </div>
  );

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
          EXHIBITIONS
        </h1>

        <div className="space-y-16">
          {exhibitions.map((exhibition) => (
            <div key={exhibition.id} className="border-t border-gray-200 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Year - left column */}
                <div className="md:col-span-2">
                  <p className="text-gray-400 text-sm">{exhibition.year}</p>
                </div>

                {/* Exhibition Info - middle column */}
                <div className="md:col-span-4">
                  <h3 className="text-lg font-bold text-black mb-1">
                    {exhibition.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{exhibition.venue}</p>
                </div>

                {/* Image Placeholders - right column */}
                <div className="md:col-span-6">
                  <div className="flex gap-2">
                    {exhibition.images && exhibition.images.length > 0 ? (
                      exhibition.images.map((img, idx) => (
                        <div key={idx} className="w-24 h-24 overflow-hidden bg-gray-100">
                          <img 
                            src={img} 
                            alt={`${exhibition.title} ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))
                    ) : (
                      <>
                        <PlaceholderImage />
                        <PlaceholderImage />
                        <PlaceholderImage />
                      </>
                    )}
                    {exhibition.hasMonograph && (
                      <div className="ml-6">
                        <PlaceholderImage />
                      </div>
                    )}
                  </div>
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

export default ExhibitionsPage;
