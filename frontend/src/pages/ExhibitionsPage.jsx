import React from 'react';
import Header from '../components/Header';
import { exhibitions } from '../data/mockData';

const ExhibitionsPage = () => {
  const currentExhibitions = exhibitions.filter(e => e.status === 'Current');
  const pastExhibitions = exhibitions.filter(e => e.status === 'Past');

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

        {/* Current Exhibitions */}
        {currentExhibitions.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-light text-gray-800 mb-8 border-b border-gray-200 pb-4">
              Current
            </h2>
            <div className="space-y-8">
              {currentExhibitions.map((exhibition) => (
                <div key={exhibition.id} className="group cursor-pointer">
                  <h3 className="text-xl font-medium text-black mb-2 group-hover:underline">
                    {exhibition.title}
                  </h3>
                  <p className="text-gray-600">{exhibition.venue}</p>
                  <p className="text-gray-500 text-sm mt-1">{exhibition.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Past Exhibitions */}
        {pastExhibitions.length > 0 && (
          <div>
            <h2 className="text-2xl font-light text-gray-800 mb-8 border-b border-gray-200 pb-4">
              Past
            </h2>
            <div className="space-y-8">
              {pastExhibitions.map((exhibition) => (
                <div key={exhibition.id} className="group cursor-pointer">
                  <h3 className="text-xl font-medium text-black mb-2 group-hover:underline">
                    {exhibition.title}
                  </h3>
                  <p className="text-gray-600">{exhibition.venue}</p>
                  <p className="text-gray-500 text-sm mt-1">{exhibition.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ExhibitionsPage;
