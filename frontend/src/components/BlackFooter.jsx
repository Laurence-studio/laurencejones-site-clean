import React, { useState } from 'react';

const BlackFooter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 - Studio Info */}
          <div>
            <h3 className="text-sm font-medium tracking-wide mb-6">STUDIO</h3>
            <p className="text-gray-400 text-sm mb-2">Contemporary Art</p>
            <p className="text-gray-400 text-sm">London, UK</p>
          </div>

          {/* Column 2 - Mailing List */}
          <div>
            <h3 className="text-sm font-medium tracking-wide mb-6">MAILING LIST</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border border-gray-600 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors mb-4"
              />
              <button 
                type="submit"
                className="w-full border border-gray-600 px-4 py-3 text-sm font-medium tracking-wide hover:bg-white hover:text-black transition-colors"
              >
                JOIN
              </button>
            </form>
          </div>

          {/* Column 3 - Information */}
          <div>
            <h3 className="text-sm font-medium tracking-wide mb-6">INFORMATION</h3>
            <div className="space-y-3">
              <a href="/privacy" className="block text-gray-400 text-sm hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/cookies" className="block text-gray-400 text-sm hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="/terms" className="block text-gray-400 text-sm hover:text-white transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-sm font-medium tracking-wide mb-6">CONTACT</h3>
            <a 
              href="mailto:studio@example.com" 
              className="block text-gray-400 text-sm hover:text-white transition-colors mb-8"
            >
              studio@example.com
            </a>
            
            <h4 className="text-sm font-medium tracking-wide mb-4">REPRESENTED BY</h4>
            <div className="space-y-2">
              <a 
                href="https://www.rebeccahossack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-400 text-sm hover:text-white transition-colors"
              >
                Rebecca Hossack Art Gallery
              </a>
              <a 
                href="https://artangels.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-400 text-sm hover:text-white transition-colors"
              >
                Art Angels
              </a>
              <a 
                href="https://jwillott.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-400 text-sm hover:text-white transition-colors"
              >
                J Willott
              </a>
            </div>
          </div>
        </div>

        {/* Social Links Row */}
        <div className="flex flex-wrap gap-6 mb-12 pt-8 border-t border-gray-800">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm tracking-wide hover:text-gray-400 transition-colors"
          >
            INSTAGRAM
          </a>
          <a 
            href="mailto:studio@example.com"
            className="text-sm tracking-wide hover:text-gray-400 transition-colors"
          >
            EMAIL
          </a>
          <a 
            href="https://artsy.net" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm tracking-wide hover:text-gray-400 transition-colors"
          >
            ARTSY
          </a>
          <a 
            href="https://artnet.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm tracking-wide hover:text-gray-400 transition-colors"
          >
            ARTNET
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            © 2026 Laurence Jones. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BlackFooter;
