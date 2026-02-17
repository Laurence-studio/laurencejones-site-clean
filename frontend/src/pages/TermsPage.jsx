import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsPage = () => {
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
            Terms & Conditions
          </h1>
          
          <p className="text-gray-500 text-sm mb-16">
            Last Updated: Tuesday 17th February 2026
          </p>

          {/* Content */}
          <div className="space-y-12 text-gray-600 leading-relaxed">
            <p>
              By using this website, you agree to the following terms.
            </p>

            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">1. Intellectual Property</h2>
              <p>All artworks, images, text, and content on this website are the intellectual property of Laurence Jones unless otherwise stated.</p>
              <p>No material may be reproduced without prior written permission.</p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">2. Artwork Availability</h2>
              <p>Works listed as:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>"Available via Studio" may be acquired directly</li>
                <li>"Private Collection" indicate sold works</li>
                <li>"Available via Gallery Partner" are managed by the relevant gallery</li>
              </ul>
              <p>Availability is subject to change.</p>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">3. Enquiries</h2>
              <p>Artwork purchases are handled via direct enquiry.</p>
              <p>Submission of an enquiry does not constitute a contract of sale.</p>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">4. Pricing & Sales</h2>
              <p>Prices are available upon request.</p>
              <p>Final sales agreements are confirmed separately in writing.</p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">5. Limitation of Liability</h2>
              <p>All information is provided in good faith.</p>
              <p>We do not guarantee completeness or error-free content.</p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">6. External Links</h2>
              <p>We are not responsible for the content or privacy practices of external sites.</p>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">7. Governing Law</h2>
              <p>These terms are governed by the laws of England and Wales.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
