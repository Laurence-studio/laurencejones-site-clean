import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Handle Home click - scroll to top if already on homepage
  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative z-20 bg-white border-t border-gray-200 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Copyright spacer */}
          <div className="md:col-span-1">
            <p className="text-sm font-medium">&nbsp;</p>
          </div>

          {/* Navigation - 3 columns of 3 items */}
          <div className="space-y-3">
            <Link 
              to="/" 
              onClick={handleHomeClick}
              className="block text-sm text-gray-600 hover:text-black transition-colors"
            >
              Home
            </Link>
            <Link to="/featured-works" className="block text-sm text-gray-600 hover:text-black transition-colors">
              Featured Works
            </Link>
            <Link to="/viewing-rooms" className="block text-sm text-gray-600 hover:text-black transition-colors">
              Viewing Rooms
            </Link>
          </div>

          <div className="space-y-3">
            <Link to="/vault" className="block text-sm text-gray-600 hover:text-black transition-colors">
              Vault
            </Link>
            <Link to="/studio" className="block text-sm text-gray-600 hover:text-black transition-colors">
              Studio
            </Link>
            <Link to="/exhibitions" className="block text-sm text-gray-600 hover:text-black transition-colors">
              Exhibitions
            </Link>
          </div>

          <div className="space-y-3">
            <Link to="/contact" className="block text-sm text-gray-600 hover:text-black transition-colors">
              Contact
            </Link>
            <a 
              href="https://www.instagram.com/laurencejonesartist" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-sm text-gray-600 hover:text-black transition-colors"
            >
              Instagram
            </a>
            <a 
              href="mailto:studio@laurencejones.com" 
              className="block text-sm text-gray-600 hover:text-black transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            © 2026 Laurence Jones. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
