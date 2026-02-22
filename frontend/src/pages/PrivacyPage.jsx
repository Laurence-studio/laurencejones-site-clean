import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPage = () => {
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
            Privacy Policy
          </h1>
          
          <p className="text-gray-500 text-sm mb-16">
            Last Updated: Tuesday 17th February 2026
          </p>

          {/* Content */}
          <div className="space-y-12 text-gray-600 leading-relaxed">
            <p>
              Laurence Jones Studio is committed to respecting and safeguarding your privacy.
            </p>
            <p>
              This policy outlines how personal information is collected, used, and protected when visiting this website.
            </p>

            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">1. Data We Collect</h2>
              <p>We may collect:</p>
              
              <div className="space-y-4">
                <div>
                  <p className="text-black font-medium">Information you provide directly</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Correspondence relating to artwork enquiries</li>
                  </ul>
                </div>
                
                <div>
                  <p className="text-black font-medium">Technical and usage data</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Pages visited</li>
                    <li>Time spent on pages</li>
                    <li>Device and browser information</li>
                    <li>Country-level location data</li>
                  </ul>
                </div>
              </div>
              
              <p>We do not collect payment information through this website.</p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">2. Use of Information</h2>
              <p>Information is used solely to:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Respond to enquiries</li>
                <li>Manage collector and gallery correspondence</li>
                <li>Improve website experience</li>
                <li>Understand general audience engagement</li>
              </ul>
              <p>Personal data is never sold or shared for marketing purposes.</p>
            </section>

            {/* Section 3 */}
<section className="space-y-4">
  <h2 className="text-black font-semibold text-lg">3. Analytics</h2>

  <p>
    This website uses Vercel Analytics, a privacy-focused analytics service provided by Vercel Inc.
  </p>

  <p>
    Vercel Analytics collects anonymised and aggregated usage data to help improve website performance and user experience.
  </p>

  <p>Analytics data may include:</p>

  <ul className="list-disc list-inside space-y-1">
    <li>Page views</li>
    <li>Interaction metrics</li>
    <li>Session duration</li>
    <li>Device and browser information</li>
    <li>Country-level geographic data</li>
  </ul>

  <p>
    Vercel Analytics does not use advertising cookies, sell personal data, track users across other websites, or collect personally identifiable information.
  </p>
</section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">4. Legal Basis</h2>
              <p>Data processing is based on:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Legitimate interest (studio operations and website functionality)</li>
                <li>Consent (analytics tracking)</li>
                <li>Contractual necessity (where applicable)</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">5. Data Rights</h2>
              <p>Under UK GDPR, you may request:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Access to your data</li>
                <li>Correction</li>
                <li>Deletion</li>
                <li>Withdrawal of consent</li>
              </ul>
              <p className="mt-4">
                Contact:<br />
                <a href="mailto:studio@laurencejones.com" className="text-black hover:underline">
                  studio@laurencejones.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
