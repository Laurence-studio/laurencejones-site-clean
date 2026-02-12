import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navigation } from '../data/mockData';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      {/* Cookie Banner */}
      <div className="bg-black text-white text-xs py-2 px-4 flex justify-between items-center">
        <p className="flex-1">
          Select "Accept all" to agree to our use of cookies and similar technologies to enhance your browsing experience, security, analytics and customization. Select "Manage cookies" to make more choices or opt out.
        </p>
        <div className="flex items-center gap-4 ml-4">
          <button className="text-gray-300 hover:text-white transition-colors text-sm">
            Manage cookies
          </button>
          <button className="bg-white text-black px-4 py-1.5 text-sm font-medium hover:bg-gray-100 transition-colors">
            ACCEPT
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <svg 
            width="50" 
            height="50" 
            viewBox="0 0 100 100" 
            className="hover:opacity-70 transition-opacity"
          >
            {/* Stylized balloon flower logo */}
            <circle cx="50" cy="30" r="15" fill="none" stroke="black" strokeWidth="2" />
            <circle cx="35" cy="45" r="15" fill="none" stroke="black" strokeWidth="2" />
            <circle cx="65" cy="45" r="15" fill="none" stroke="black" strokeWidth="2" />
            <circle cx="40" cy="65" r="15" fill="none" stroke="black" strokeWidth="2" />
            <circle cx="60" cy="65" r="15" fill="none" stroke="black" strokeWidth="2" />
            <path d="M50 75 Q50 90 50 95" fill="none" stroke="black" strokeWidth="2" />
            <path d="M45 92 Q50 98 55 92" fill="none" stroke="black" strokeWidth="2" />
          </svg>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-black text-sm font-normal hover:opacity-60 transition-opacity tracking-wide"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block px-6 py-3 text-black text-sm hover:bg-gray-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
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
