import React from 'react';
import Header from '../components/Header';
import { useBibliography } from '../hooks/useApi';
import { Skeleton } from '../components/ui/skeleton';

const BibliographyPage = () => {
  const { bibliography, loading } = useBibliography();

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
          BIBLIOGRAPHY
        </h1>

        <div className="max-w-4xl">
          <h2 className="text-2xl font-light text-gray-800 mb-8 border-b border-gray-200 pb-4">
            Selected Publications
          </h2>
          
          {loading ? (
            <div className="space-y-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="border-b border-gray-100 pb-6">
                  <Skeleton className="h-3 w-16 mb-2" />
                  <Skeleton className="h-5 w-64 mb-1" />
                  <Skeleton className="h-4 w-48" />
                  <Skeleton className="h-3 w-40 mt-1" />
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {bibliography.map((item) => (
                <div key={item.id} className="border-b border-gray-100 pb-6">
                  <p className="text-sm text-gray-500 mb-2">{item.year}</p>
                  <h3 className="text-lg font-medium text-black mb-1 italic">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.publisher}</p>
                  <p className="text-gray-500 text-sm mt-1">{item.authors}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default BibliographyPage;
