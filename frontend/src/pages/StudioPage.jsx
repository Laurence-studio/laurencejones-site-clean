import React from 'react';
import Header from '../components/Header';
import BlackFooter from '../components/BlackFooter';

const StudioPage = () => {
  // Timeline data for exhibitions and milestones
  const timeline = [
    {
      year: '2025',
      events: [
        '"Night Pool", Solo exhibition, David Kordansky Gallery, Los Angeles',
        '"Californication House", Solo exhibition, Almine Rech, Paris',
        'Californication House collaboration with architect Jason Somers',
        'Echoes Of The Hills series commenced'
      ]
    },
    {
      year: '2024',
      events: [
        '"Three Latitudes", Group exhibition, White Cube, London',
        'Completed major works: A Light Exists In Spring, The Mind Is Wider Than The Sky',
        'Studio residency, Joshua Tree, California'
      ]
    },
    {
      year: '2023',
      events: [
        '"Liminal Spaces", Solo exhibition, Gagosian, New York',
        '"Contemporary Visions", Group exhibition, MOCA, Los Angeles',
        'Work acquired by private collections in Europe and North America'
      ]
    },
    {
      year: '2022',
      events: [
        '"Atmospheric Studies", Solo exhibition, Hauser & Wirth, Los Angeles',
        'Liminal Framework series development',
        'Featured in Artforum "Artists to Watch"'
      ]
    },
    {
      year: '2021',
      events: [
        'Established Los Angeles studio',
        'First major commission completed',
        'Representation by David Kordansky Gallery'
      ]
    },
    {
      year: '2020',
      events: [
        'MFA, Yale School of Art',
        'Thesis exhibition: "Threshold Geometries"'
      ]
    },
    {
      year: '2018',
      events: [
        'BFA, Rhode Island School of Design',
        'Merit scholarship recipient'
      ]
    }
  ];

  // Placeholder portrait - will be replaced with actual image
  const studioPortrait = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face';

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-40 pb-20 px-6 md:px-12">
        {/* Bold Header - consistent with other pages */}
        <h1 
          className="font-black text-black leading-none tracking-tighter mb-16"
          style={{ 
            fontSize: 'clamp(48px, 10vw, 120px)',
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            letterSpacing: '-0.03em'
          }}
        >
          STUDIO
        </h1>

        {/* Two-column scrolling layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Portrait and Biography (scrolls normally) */}
          <div className="w-full lg:w-1/2">
            {/* Studio Portrait */}
            <div className="mb-10">
              <img
                src={studioPortrait}
                alt="Laurence Jones"
                className="w-full max-w-md h-auto object-cover"
              />
            </div>

            {/* Biography Text */}
            <div className="space-y-6 text-gray-600 leading-relaxed max-w-xl">
              <p>
                Laurence Jones is a contemporary painter based in Los Angeles, creating hyper-realist works that explore the intersection of architecture and atmosphere. His paintings capture the quiet drama of California modernism—pools illuminated after dark, glass and concrete structures suspended in twilight, the precise geometry of built space dissolving into ambiguous light.
              </p>
              
              <p>
                Working with traditional oil and acrylic techniques, Jones builds each painting through careful observation and layered rendering. His practice examines how architecture mediates our experience of time, light, and solitude. The work is informed by literary influences including Joan Didion's examinations of California mythology and Emily Dickinson's meditations on interior space and consciousness.
              </p>
              
              <p>
                Jones' paintings have been exhibited at galleries including David Kordansky, Gagosian, and Almine Rech. His work is held in private collections across North America and Europe.
              </p>

              <p>
                The studio maintains an ongoing archive documenting works, exhibitions, and placements.
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-10 space-y-2 text-gray-500">
              <p>Based in Los Angeles, California</p>
              <p>
                <a href="mailto:studio@laurencejones.com" className="hover:text-black transition-colors">
                  studio@laurencejones.com
                </a>
              </p>
            </div>

            {/* Spacer for scroll effect */}
            <div className="h-32 lg:h-48"></div>
          </div>

          {/* Right Column - Timeline (sticky on desktop) */}
          <div className="w-full lg:w-1/2 border-t lg:border-t-0 lg:border-l border-gray-200 pt-10 lg:pt-0 lg:pl-16">
            <div className="lg:sticky lg:top-40">
              <h2 
                className="text-lg font-medium tracking-wide text-black mb-10"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                SELECTED EXHIBITIONS & MILESTONES
              </h2>

              <div className="space-y-8 max-h-[calc(100vh-220px)] overflow-y-auto pr-4">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-8">
                    {/* Year */}
                    <div className="w-14 flex-shrink-0">
                      <span className="text-sm text-gray-400">{item.year}</span>
                    </div>
                    
                    {/* Events */}
                    <div className="flex-1 space-y-2">
                      {item.events.map((event, eventIndex) => (
                        <p key={eventIndex} className="text-gray-600 text-sm leading-relaxed">
                          {event}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* CV Link - opens in new window */}
              <div className="mt-10 pt-6 border-t border-gray-200">
                <a 
                  href="/cv" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-black transition-colors"
                >
                  View CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <BlackFooter />
    </div>
  );
};

export default StudioPage;
