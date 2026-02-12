import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Copyright */}
          <div className="md:col-span-1">
            <p className="text-sm font-medium">© 2024</p>
          </div>

          {/* Navigation Column 1 */}
          <div className="space-y-3">
            <Link to="/" className="block text-sm text-gray-600 hover:text-black transition-colors">
              Home
            </Link>
            <Link to="/featured-works" className="block text-sm text-gray-600 hover:text-black transition-colors">
              Featured Works
            </Link>
            <Link to="/viewing-rooms" className="block text-sm text-gray-600 hover:text-black transition-colors">
              Viewing Rooms
            </Link>
          </div>

          {/* Navigation Column 2 */}
          <div className="space-y-3">
            <Link to="/vault" className="block text-sm text-gray-600 hover:text-black transition-colors">
              Vault
            </Link>
            <Link to="/exhibitions" className="block text-sm text-gray-600 hover:text-black transition-colors">
              Exhibitions
            </Link>
            <Link to="/contact" className="block text-sm text-gray-600 hover:text-black transition-colors">
              Contact
            </Link>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-sm text-gray-600 hover:text-black transition-colors"
            >
              Instagram
            </a>
            <a 
              href="mailto:hello@example.com" 
              className="block text-sm text-gray-600 hover:text-black transition-colors"
            >
              Email
            </a>
            <a 
              href="https://artsy.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-sm text-gray-600 hover:text-black transition-colors"
            >
              Artsy
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
