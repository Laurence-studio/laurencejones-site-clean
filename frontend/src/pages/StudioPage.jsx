import React from 'react';
import Header from '../components/Header';
import BlackFooter from '../components/BlackFooter';

const StudioPage = () => {
  // Selected Exhibitions & Milestones data
  const exhibitionsAndMilestones = {
    selectedExhibitions: [
      'Rebecca Hossack Gallery, London',
      'Rebecca Hossack Gallery, Miami',
      'Selected presentations in Los Angeles and Palm Desert'
    ],
    milestones: [
      'Maybourne Hotel, Beverly Hills - Night Pool installation',
      'Architectural dialogues within the Hollywood Hills residential context',
      'Works placed in private collections across the UK, US, Continental Europe and Asia'
    ]
  };

  // Studio portrait
  const studioPortrait = 'https://customer-assets.emergentagent.com/job_2fb237eb-85b8-4e1a-abed-ad3be1f9478f/artifacts/k9aspqak__DSC5558.jpg';

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
                Laurence Jones is a British contemporary painter whose work explores the psychological and architectural language of modern space. Working primarily in acrylic on linen at large scale, his paintings focus on light, horizon, glass, water and built form; capturing moments where architecture becomes atmosphere.
              </p>
              
              <p>
                Rooted in a dialogue with mid-century modernism and contemporary residential design, the work operates between hyper-real precision and cinematic stillness. From Los Angeles hillside houses to coastal horizons and liminal interiors, each painting holds tension between structure and openness, clarity and distance.
              </p>
              
              <p>
                Jones' practice considers architecture not as backdrop, but as emotional framework; a way of understanding how we inhabit space, memory and place. His recent works extend this dialogue further, positioning painting in conversation with the built environment and the evolving cultural narratives of modern living.
              </p>

              <p>
                He lives and works in the United Kingdom.
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-10 space-y-2 text-gray-500">
              <p>
                <a href="mailto:studio@laurencejones.com" className="hover:text-black transition-colors">
                  studio@laurencejones.com
                </a>
              </p>
            </div>

            {/* Spacer for scroll effect */}
            <div className="h-32 lg:h-48"></div>
          </div>

          {/* Right Column - Exhibitions & Milestones (sticky on desktop) */}
          <div className="w-full lg:w-1/2 border-t lg:border-t-0 lg:border-l border-gray-200 pt-10 lg:pt-0 lg:pl-16">
            <div className="lg:sticky lg:top-40">
              <h2 
                className="text-lg font-medium tracking-wide text-black mb-10"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                SELECTED EXHIBITIONS & MILESTONES
              </h2>

              <div className="space-y-10">
                {/* Selected Exhibitions */}
                <div>
                  <h3 className="text-sm font-medium text-black mb-4 tracking-wide">Selected Exhibitions</h3>
                  <div className="space-y-2">
                    {exhibitionsAndMilestones.selectedExhibitions.map((exhibition, index) => (
                      <p key={index} className="text-gray-600 text-sm leading-relaxed">
                        {exhibition}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Milestones */}
                <div>
                  <h3 className="text-sm font-medium text-black mb-4 tracking-wide">Milestones</h3>
                  <div className="space-y-2">
                    {exhibitionsAndMilestones.milestones.map((milestone, index) => (
                      <p key={index} className="text-gray-600 text-sm leading-relaxed">
                        {milestone}
                      </p>
                    ))}
                  </div>
                </div>
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
