import React from 'react';
import Header from '../components/Header';
import { useBiography } from '../hooks/useApi';
import { Skeleton } from '../components/ui/skeleton';

const BiographyPage = () => {
  const { biography, loading } = useBiography();

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

        {loading ? (
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <Skeleton className="w-full max-w-lg aspect-[3/4]" />
              <div className="space-y-6">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
          </div>
        ) : biography ? (
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Portrait Image */}
              <div className="relative">
                <img
                  src={biography.portrait}
                  alt={`${biography.name} Portrait`}
                  className="w-full max-w-lg h-auto object-cover"
                />
              </div>

              {/* Biography Text */}
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed text-lg">
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
        ) : null}
      </main>
    </div>
  );
};

export default BiographyPage;
