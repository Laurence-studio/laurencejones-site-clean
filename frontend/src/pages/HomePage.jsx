import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ArtworkGallery from '../components/ArtworkGallery';
import BiographySection from '../components/BiographySection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ArtworkGallery />
        <BiographySection />
      </main>
    </div>
  );
};

export default HomePage;
