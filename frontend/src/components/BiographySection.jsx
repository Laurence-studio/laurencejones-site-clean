import React from 'react';
import { artistBio } from '../data/mockData';

const BiographySection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Portrait Image */}
          <div className="relative">
            <img
              src={artistBio.portrait}
              alt="Jeff Koons Portrait"
              className="w-full max-w-md h-auto object-cover"
            />
          </div>

          {/* Biography Text */}
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed text-base">
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
    </section>
  );
};

export default BiographySection;
