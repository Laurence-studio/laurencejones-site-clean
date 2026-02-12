import React from 'react';
import Header from '../components/Header';
import { useExhibitions } from '../hooks/useApi';
import { Skeleton } from '../components/ui/skeleton';

const ExhibitionsPage = () => {
  const { exhibitions, loading } = useExhibitions();
  
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

        {loading ? (
          <div className="space-y-16">
            <div>
              <Skeleton className="h-8 w-32 mb-8" />
              <div className="space-y-8">
                {[1, 2].map((i) => (
                  <div key={i}>
                    <Skeleton className="h-6 w-64 mb-2" />
                    <Skeleton className="h-4 w-48 mb-1" />
                    <Skeleton className="h-3 w-32" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
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
          </>
        )}
      </main>
    </div>
  );
};

export default ExhibitionsPage;
