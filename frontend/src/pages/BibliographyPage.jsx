import React from 'react';
import Header from '../components/Header';

const bibliographyData = [
  {
    year: "2014",
    title: "Jeff Koons: A Retrospective",
    publisher: "Whitney Museum of American Art",
    authors: "Scott Rothkopf"
  },
  {
    year: "2012",
    title: "Jeff Koons: The Painter & The Sculptor",
    publisher: "Hatje Cantz",
    authors: "Matthias Ulrich, Vinzenz Brinkmann"
  },
  {
    year: "2009",
    title: "Jeff Koons: Versailles",
    publisher: "Xavier Barral",
    authors: "Jeff Koons, Edouard de Broglie"
  },
  {
    year: "2008",
    title: "Jeff Koons",
    publisher: "Taschen",
    authors: "Katy Siegel, Ingrid Sischy"
  },
  {
    year: "2006",
    title: "Jeff Koons: Celebration",
    publisher: "Gagosian Gallery",
    authors: "Jeff Koons"
  },
  {
    year: "1992",
    title: "The Jeff Koons Handbook",
    publisher: "Rizzoli",
    authors: "Anthony d'Offay Gallery"
  }
];

const BibliographyPage = () => {
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
          <div className="space-y-8">
            {bibliographyData.map((item, index) => (
              <div key={index} className="border-b border-gray-100 pb-6">
                <p className="text-sm text-gray-500 mb-2">{item.year}</p>
                <h3 className="text-lg font-medium text-black mb-1 italic">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.publisher}</p>
                <p className="text-gray-500 text-sm mt-1">{item.authors}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BibliographyPage;
