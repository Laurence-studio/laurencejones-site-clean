import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigation } from '../data/mockData';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="bg-black text-white text-xs py-2.5 px-4 flex justify-between items-center">
          <p className="flex-1 pr-4 leading-relaxed">
            Select "Accept all" to agree to our use of cookies and similar technologies to enhance your browsing experience, security, analytics and customization. Select "Manage cookies" to make more choices or opt out.
          </p>
          <div className="flex items-center gap-4 flex-shrink-0">
            <button 
              className="text-gray-400 hover:text-white transition-colors text-sm whitespace-nowrap"
              onClick={() => setShowCookieBanner(false)}
            >
              Manage cookies
            </button>
            <button 
              className="bg-white text-black px-4 py-1.5 text-sm font-medium hover:bg-gray-100 transition-colors whitespace-nowrap"
              onClick={() => setShowCookieBanner(false)}
            >
              ACCEPT
            </button>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white">
        {/* Logo - Text */}
        <Link to="/" className="flex items-center">
          <span 
            className="text-black tracking-tight"
            style={{ 
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              letterSpacing: '-0.01em'
            }}
          >
            Laurence Jones
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm tracking-wide transition-opacity hover:opacity-60 ${
                location.pathname === item.path ? 'font-medium' : 'font-normal'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-6 py-4 text-sm hover:bg-gray-50 transition-colors border-b border-gray-50 ${
                location.pathname === item.path ? 'font-medium' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
