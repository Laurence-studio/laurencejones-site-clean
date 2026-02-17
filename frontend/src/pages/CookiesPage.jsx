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
              This website uses limited cookies to ensure functionality and understand general engagement.
            </p>

            {/* Essential Cookies */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">Essential Cookies</h2>
              <p>Required for core website functionality.</p>
            </section>

            {/* Analytics Cookies */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">Analytics Cookies</h2>
              <p>With consent, analytics cookies collect anonymised usage information to help improve user experience.</p>
              <p>We use PostHog (EU data region).</p>
              <p>Analytics tracking activates only after clicking "ACCEPT" in the cookie banner.</p>
            </section>

            {/* Managing Cookies */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">Managing Cookies</h2>
              <p>You may:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Accept or decline analytics cookies via the banner</li>
                <li>Remove cookies at any time through your browser settings</li>
              </ul>
              <p>Disabling analytics cookies does not affect site access.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiesPage;
