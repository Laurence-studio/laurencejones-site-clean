import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Copyright */}
          <div className="md:col-span-1">
            <p className="text-sm font-medium">© JEFF KOONS</p>
          </div>

          {/* Navigation Column 1 */}
          <div className="space-y-3">
            <Link to="/" className="block text-sm text-gray-600 hover:text-black transition-colors">
              Home
            </Link>
            <Link to="/artwork" className="block text-sm text-gray-600 hover:text-black transition-colors">
              Artwork
            </Link>
            <Link to="/biography" className="block text-sm text-gray-600 hover:text-black transition-colors">
              Biography
            </Link>
          </div>

          {/* Navigation Column 2 */}
          <div className="space-y-3">
            <Link to="/bibliography" className="block text-sm text-gray-600 hover:text-black transition-colors">
              Bibliography
            </Link>
            <Link to="/exhibitions" className="block text-sm text-gray-600 hover:text-black transition-colors">
              Exhibitions
            </Link>
            <Link to="/shop" className="block text-sm text-gray-600 hover:text-black transition-colors">
              Shop
            </Link>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-sm text-gray-600 hover:text-black transition-colors"
            >
              Facebook
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-sm text-gray-600 hover:text-black transition-colors"
            >
              Twitter
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-sm text-gray-600 hover:text-black transition-colors"
            >
              Instagram
            </a>
          </div>

          {/* Search */}
          <div>
            <input
              type="text"
              placeholder="Search"
              className="w-full border-b border-gray-300 pb-2 text-sm focus:outline-none focus:border-black transition-colors bg-transparent"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
