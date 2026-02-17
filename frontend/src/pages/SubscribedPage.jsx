import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SubscribedPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 md:px-12">
        <div className="text-center">
          <p 
            className="text-gray-600 text-lg mb-8"
            style={{ 
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            Thank you — you're subscribed.
          </p>
          <Link 
            to="/"
            className="inline-block border border-gray-800 px-6 py-3 text-sm font-medium tracking-wide hover:bg-black hover:text-white transition-colors"
          >
            Return to site
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SubscribedPage;
