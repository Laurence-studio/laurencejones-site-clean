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
              Laurence Jones Studio ("we", "us", "our") respects your privacy and is committed to protecting your personal data.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, and safeguard your information when you visit this website.
            </p>

            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">1. Who We Are</h2>
              <p>This website is operated by Laurence Jones, a UK-based artist studio.</p>
              <p>
                For all privacy-related enquiries, contact:<br />
                <a href="mailto:studio@laurencejones.com" className="text-black hover:underline">
                  studio@laurencejones.com
                </a>
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">2. What Information We Collect</h2>
              <p>We may collect:</p>
              
              <div className="space-y-4">
                <div>
                  <p className="text-black font-medium">Information you provide directly</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Details included in contact or artwork enquiries</li>
                  </ul>
                </div>
                
                <div>
                  <p className="text-black font-medium">Automatically collected information</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Pages visited</li>
                    <li>Time spent on pages</li>
                    <li>Device and browser type</li>
                    <li>General geographic location (country level)</li>
                  </ul>
                </div>
              </div>
              
              <p>We do not collect payment information via this website.</p>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">3. How We Use Your Information</h2>
              <p>We use personal data to:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Respond to artwork enquiries</li>
                <li>Communicate with collectors and galleries</li>
                <li>Improve website usability</li>
                <li>Understand general audience engagement</li>
              </ul>
              <p>We do not sell or share personal data for marketing purposes.</p>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">4. Analytics</h2>
              <p>This website uses PostHog (EU data region) to collect anonymised website usage data.</p>
              <p>Analytics tracking only occurs after cookie consent is provided.</p>
              <p>PostHog may collect:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Page views</li>
                <li>Interaction events</li>
                <li>Session duration</li>
                <li>Device and browser information</li>
              </ul>
              <p>You may withdraw consent at any time by clearing cookies in your browser.</p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">5. Legal Basis</h2>
              <p>We process personal data under:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Legitimate interest (website performance and studio operations)</li>
                <li>Consent (analytics cookies)</li>
                <li>Contractual necessity (artwork enquiries and sales correspondence)</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">6. Data Retention</h2>
              <p>Enquiry correspondence is retained for professional record keeping.</p>
              <p>Analytics data is stored according to PostHog's EU data policies.</p>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">7. Your Rights</h2>
              <p>Under UK GDPR, you have the right to:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Access your personal data</li>
                <li>Request correction</li>
                <li>Request deletion</li>
                <li>Object to processing</li>
                <li>Withdraw consent</li>
              </ul>
              <p>
                To exercise these rights, contact:<br />
                <a href="mailto:studio@laurencejones.com" className="text-black hover:underline">
                  studio@laurencejones.com
                </a>
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">8. Changes to This Policy</h2>
              <p>This Privacy Policy may be updated periodically.</p>
              <p>The latest version will always be published on this page.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
