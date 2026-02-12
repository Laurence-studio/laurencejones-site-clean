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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-20">
        {/* Two-column scrolling layout */}
        <div className="flex flex-col lg:flex-row">
          {/* Left Column - Biography (scrolls normally) */}
          <div className="w-full lg:w-1/2 px-6 md:px-12 lg:pr-16">
            <h1 
              className="text-4xl md:text-5xl font-light text-black mb-12"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Laurence Jones
            </h1>

            <div className="space-y-6 text-gray-700 leading-relaxed max-w-xl">
              <p>
                Laurence Jones is a contemporary painter based in Los Angeles, creating hyper-realist works that explore the intersection of architecture and atmosphere. His paintings capture the quiet drama of California modernism—pools illuminated after dark, glass and concrete structures suspended in twilight, the precise geometry of built space dissolving into ambiguous light.
              </p>
              
              <p>
                Working with traditional oil and acrylic techniques, Jones builds each painting through careful observation and layered rendering. His practice examines how architecture mediates our experience of time, light, and solitude. The work is informed by literary influences including Joan Didion's examinations of California mythology and Emily Dickinson's meditations on interior space and consciousness.
              </p>
              
              <p>
                Jones' paintings have been exhibited at galleries including David Kordansky, Gagosian, and Almine Rech. His work is held in private collections across North America and Europe.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-12 max-w-xl"></div>

            {/* Artist Statement */}
            <div className="space-y-6 text-gray-700 leading-relaxed max-w-xl">
              <h2 className="text-2xl font-light text-black mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Artist Statement
              </h2>
              
              <p>
                My paintings investigate architectural space as a site of psychological and emotional resonance. I am interested in the liminal quality of dusk and night—moments when structures become less defined, when light sources shift from natural to artificial, and when the built environment takes on an ambiguous, almost cinematic character.
              </p>
              
              <p>
                California modernism provides both subject and conceptual framework. These buildings embody a specific promise—clarity, openness, rational order—yet they also function as backdrops for solitude and introspection. Swimming pools, in particular, serve as recurring motifs: they are symbols of leisure and aspiration, but also spaces of isolation and reflection.
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-12 space-y-2 text-gray-600 max-w-xl">
              <p>Based in Los Angeles, California</p>
              <p>
                <a href="mailto:studio@laurencejones.com" className="hover:text-black transition-colors">
                  studio@laurencejones.com
                </a>
              </p>
            </div>

            {/* Spacer for scroll effect */}
            <div className="h-32 lg:h-64"></div>
          </div>

          {/* Right Column - Timeline (sticky on desktop) */}
          <div className="w-full lg:w-1/2 px-6 md:px-12 lg:pl-16 border-t lg:border-t-0 lg:border-l border-gray-200 mt-12 lg:mt-0 pt-12 lg:pt-0">
            <div className="lg:sticky lg:top-32">
              <h2 
                className="text-2xl md:text-3xl font-light text-black mb-12"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Selected Exhibitions & Milestones
              </h2>

              <div className="space-y-10 max-h-[calc(100vh-200px)] overflow-y-auto pr-4 scrollbar-thin">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-8">
                    {/* Year */}
                    <div className="w-16 flex-shrink-0">
                      <span className="text-sm font-medium text-gray-400">{item.year}</span>
                    </div>
                    
                    {/* Events */}
                    <div className="flex-1 space-y-3">
                      {item.events.map((event, eventIndex) => (
                        <p key={eventIndex} className="text-gray-700 text-sm leading-relaxed">
                          {event}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* CV Link */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <a 
                  href="/cv" 
                  className="text-sm text-gray-600 hover:text-black transition-colors underline underline-offset-4"
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
