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
              This website uses limited technologies to ensure functionality and understand general engagement.
            </p>

            {/* Essential Functionality */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">Essential Functionality</h2>
              <p>Basic browser storage mechanisms may be used to ensure core website functionality, such as navigation and display preferences.
              
            These do not collect personally identifiable information..</p>
            </section>

            {/* Analytics */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">Analytics</h2>
              <p>This website uses Vercel Analytics, a privacy-focused analytics service provided by Vercel Inc.</p>
<p>Vercel Analytics collects anonymised and aggregated usage data to help improve website performance and user experience.</p>
<p>Analytics data may include page views, device type, browser type, and country-level geographic information.</p>
<p>Vercel Analytics does not use advertising cookies, sell personal data, or track users across other websites.</p>
            </section>

            {/* Managing Cookies */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">Managing Cookies</h2>
              <p>You may:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Manage or disable cookies through your browser settings</li>
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
