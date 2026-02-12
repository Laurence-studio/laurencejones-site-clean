import React from 'react';
import Header from '../components/Header';
import HeroGallery from '../components/HeroGallery';
import BiographySection from '../components/BiographySection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroGallery />
        <BiographySection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
