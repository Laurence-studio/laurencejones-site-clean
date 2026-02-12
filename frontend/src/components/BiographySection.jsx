import React from 'react';
import { useBiography } from '../hooks/useApi';
import { Skeleton } from './ui/skeleton';

const BiographySection = () => {
  const { biography, loading } = useBiography();

  if (loading) {
    return (
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <Skeleton className="w-full max-w-md aspect-[3/4]" />
            <div className="space-y-6">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!biography) return null;

  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Portrait Image */}
          <div className="relative">
            <img
              src={biography.portrait}
              alt={`${biography.name} Portrait`}
              className="w-full max-w-md h-auto object-cover"
            />
          </div>

          {/* Biography Text */}
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed text-base">
              {biography.short_bio}
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              {biography.birth_info}
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              {biography.exhibitions}
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              {biography.recent_exhibitions}
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              {biography.famous_works}
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              {biography.awards}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
