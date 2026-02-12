import React from 'react';
import Header from '../components/Header';
import { artistBio } from '../data/mockData';

const BiographyPage = () => {
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
          BIOGRAPHY
        </h1>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Portrait Image */}
            <div className="relative">
              <img
                src={artistBio.portrait}
                alt="Jeff Koons Portrait"
                className="w-full max-w-lg h-auto object-cover"
              />
            </div>

            {/* Biography Text */}
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                {artistBio.shortBio}
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                {artistBio.birthInfo}
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                {artistBio.exhibitions}
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                {artistBio.recentExhibitions}
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                {artistBio.famousWorks}
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                {artistBio.awards}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BiographyPage;
