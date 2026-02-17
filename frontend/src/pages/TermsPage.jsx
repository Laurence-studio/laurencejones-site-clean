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

            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">1. Intellectual Property</h2>
              <p>All artworks, images, texts, and materials presented on this website are the intellectual property of Laurence Jones unless otherwise stated.</p>
              <p>No content may be reproduced, distributed, or used for commercial or editorial purposes without prior written consent.</p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">2. Artwork Availability</h2>
              <p>Works listed on this website are presented for viewing and enquiry purposes.</p>
              <p>Availability statuses are defined as follows:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><span className="text-black">Available via Studio</span> — The work may be acquired directly through Laurence Jones Studio.</li>
                <li><span className="text-black">Private Collection</span> — The work has been placed and is no longer available.</li>
              </ul>
              <p>Availability is subject to change without notice.</p>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">3. Enquiries & Acquisition</h2>
              <p>All acquisitions are handled via direct correspondence with the studio.</p>
              <p>Submission of an enquiry does not constitute a contract of sale.</p>
              <p>A sale is confirmed only upon written agreement and receipt of agreed terms.</p>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">4. Pricing</h2>
              <p>Prices are available upon request.</p>
              <p>The studio reserves the right to amend pricing, availability, or placement information without prior notice.</p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">5. Website Accuracy</h2>
              <p>While care is taken to ensure accuracy, the studio makes no representations or warranties regarding completeness or timeliness of information.</p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-black font-semibold text-lg">6. Governing Law</h2>
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
