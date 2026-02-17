import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CookiesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-[800px] mx-auto">
          {/* Page Title */}
          <h1 
            className="font-black text-black leading-none tracking-tighter mb-4"
            style={{ 
              fontSize: 'clamp(36px, 8vw, 72px)',
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              letterSpacing: '-0.03em'
            }}
          >
            Cookie Policy
          </h1>
          
          <p className="text-gray-500 text-sm mb-16">
            Last Updated: Tuesday 17th February 2026
          </p>

          {/* Content */}
          <div className="space-y-12 text-gray-600 leading-relaxed">
            <p>
              This website uses cookies to enhance user experience and understand site performance.
            </p>

            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">1. What Are Cookies?</h2>
              <p>Cookies are small text files stored on your device when visiting a website.</p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">2. Types of Cookies Used</h2>
              
              <div className="space-y-6">
                <div>
                  <p className="text-black font-medium">Essential Cookies</p>
                  <p className="mt-2">Required for basic functionality.</p>
                </div>
                
                <div>
                  <p className="text-black font-medium">Analytics Cookies (PostHog)</p>
                  <p className="mt-2">Used to understand:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Page views</li>
                    <li>Time on page</li>
                    <li>Interaction behaviour</li>
                  </ul>
                </div>
              </div>
              
              <p>Analytics cookies activate only after you click "ACCEPT" on the cookie banner.</p>
              <p>No advertising or marketing cookies are used.</p>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">3. Managing Cookies</h2>
              <p>You may:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Accept or decline analytics cookies via the banner</li>
                <li>Delete cookies at any time through your browser settings</li>
              </ul>
              <p>Disabling analytics cookies does not affect core site functionality.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiesPage;
