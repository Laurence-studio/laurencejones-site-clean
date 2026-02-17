import React from 'react';
import { Link } from 'react-router-dom';

const BlackFooter = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 - Studio Info */}
          <div>
            <h3 className="text-sm font-medium tracking-wide mb-6">LAURENCE JONES STUDIO</h3>
            <p className="text-gray-400 text-sm">London, UK</p>
          </div>

          {/* Column 2 - Mailing List */}
          <div>
            <h3 className="text-sm font-medium tracking-wide mb-6">MAILING LIST</h3>
            <form 
              action="https://laurencejones.us5.list-manage.com/subscribe/post?u=64f5984306703bd9fe86be9cc&amp;id=9e98b13d4c&amp;f_id=005c99e0f0" 
              method="POST" 
              target="_blank"
            >
              <input type="hidden" name="redirect" value="https://jones-gallery-dev.preview.emergentagent.com/subscribed" />
              <input
                type="email"
                name="EMAIL"
                placeholder="Email address"
                required
                className="w-full bg-transparent border border-gray-600 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors mb-4"
              />
              {/* Honeypot field for bot protection */}
              <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                <input type="text" name="b_64f5984306703bd9fe86be9cc_9e98b13d4c" tabIndex="-1" defaultValue="" />
              </div>
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
              <Link to="/privacy" className="block text-gray-400 text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="block text-gray-400 text-sm hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link to="/terms" className="block text-gray-400 text-sm hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-sm font-medium tracking-wide mb-6">CONTACT</h3>
            <a 
              href="mailto:studio@laurencejones.com" 
              className="block text-gray-400 text-sm hover:text-white transition-colors mb-8"
            >
              studio@laurencejones.com
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
                J.Willott Gallery
              </a>
            </div>
          </div>
        </div>

        {/* Social Links Row */}
        <div className="flex flex-wrap gap-6 mb-12 pt-8 border-t border-gray-800">
          <a 
            href="https://www.instagram.com/laurencejonesartist" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm tracking-wide hover:text-gray-400 transition-colors"
          >
            INSTAGRAM
          </a>
          <a 
            href="mailto:studio@laurencejones.com"
            className="text-sm tracking-wide hover:text-gray-400 transition-colors"
          >
            EMAIL
          </a>
          <a 
            href="https://www.artsy.net/artist/laurence-jones" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm tracking-wide hover:text-gray-400 transition-colors"
          >
            ARTSY
          </a>
          <a 
            href="https://www.artnet.com/artists/laurence-jones/" 
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
