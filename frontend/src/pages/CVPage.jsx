import React from 'react';
import Header from '../components/Header';
import BlackFooter from '../components/BlackFooter';

const CVPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-40 pb-20 px-6 md:px-12">
        {/* Bold Header */}
        <h1 
          className="font-black text-black leading-none tracking-tighter mb-12"
          style={{ 
            fontSize: 'clamp(48px, 10vw, 120px)',
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            letterSpacing: '-0.03em'
          }}
        >
          LAURENCE JONES
        </h1>

        <div className="max-w-3xl">
          {/* Birth Info */}
          <div className="mb-16 text-gray-600">
            <p>Born 1991, Reading, UK</p>
            <p>Currently lives and works in London</p>
          </div>

          {/* Education */}
          <section className="mb-16">
            <h2 className="text-sm font-medium tracking-wide text-black mb-6">EDUCATION</h2>
            <p className="text-gray-600">2010 - 2013 BA (hons) Fine Art, Kingston University, London</p>
          </section>

          {/* Solo Exhibitions */}
          <section className="mb-16">
            <h2 className="text-sm font-medium tracking-wide text-black mb-6">SOLO EXHIBITIONS</h2>
            <div className="space-y-2 text-gray-600">
              <p>2024 Silver Palms, Rebecca Hossack Miami Project, Miami</p>
              <p>2021 Imago, Rebecca Hossack Gallery X Citi Virtual Salon</p>
              <p>2021 Spotlight Exhibition, Rebecca Hossack Gallery, London</p>
              <p>2019 How To Live In Los Angeles, Rebecca Hossack Gallery, London</p>
              <p>2017 Night Works, Rebecca Hossack Gallery, London</p>
            </div>
          </section>

          {/* Group Exhibitions */}
          <section className="mb-16">
            <h2 className="text-sm font-medium tracking-wide text-black mb-6">GROUP EXHIBITIONS</h2>
            <div className="space-y-2 text-gray-600">
              <p>2026 Off The Page In Visual Dialogue, The Poppy, Georgetown, DC</p>
              <p>2019 RA Summer Exhibition, Royal Academy, London</p>
              <p>2019 Some Sunny Day, Rebecca Hossack Gallery, London</p>
              <p>2017 Water, Rebecca Hossack Gallery, London</p>
              <p>2017 Janus, Rebecca Hossack Gallery, London</p>
              <p>2016 Wilderness: Reading The Landscape, Rebecca Hossack Gallery, London</p>
              <p>2016 To Spring, Rebecca Hossack Gallery, London</p>
              <p>2015 20 X 15: The Postcard Show, Rebecca Hossack Gallery, London</p>
              <p>2012 Artifice, Catto Gallery, London</p>
            </div>
          </section>

          {/* Art Fairs */}
          <section className="mb-16">
            <h2 className="text-sm font-medium tracking-wide text-black mb-6">ART FAIRS</h2>
            <div className="space-y-6 text-gray-600">
              {/* 2026 */}
              <div>
                <p className="text-gray-400 text-sm mb-2">2026</p>
                <p>Art Palm Beach</p>
                <p>LA Art Show</p>
              </div>

              {/* 2025 */}
              <div>
                <p className="text-gray-400 text-sm mb-2">2025</p>
                <p>Seattle Art Fair</p>
              </div>

              {/* 2024 */}
              <div>
                <p className="text-gray-400 text-sm mb-2">2024</p>
                <p>Seattle Art Fair</p>
                <p>Art Palm Beach</p>
                <p>LA Art Show</p>
              </div>

              {/* 2023 */}
              <div>
                <p className="text-gray-400 text-sm mb-2">2023</p>
                <p>Art Miami</p>
                <p>Art Toronto</p>
                <p>Seattle Art Fair</p>
                <p>Art Wynwood</p>
                <p>LA Art Show</p>
                <p>Art Palm Beach</p>
                <p>London Art Fair</p>
              </div>

              {/* 2022 */}
              <div>
                <p className="text-gray-400 text-sm mb-2">2022</p>
                <p>Art Miami</p>
                <p>AAF Singapore</p>
                <p>Art Toronto</p>
                <p>AAF Melbourne</p>
                <p>Seattle Art Fair</p>
                <p>AAF Battersea</p>
                <p>LA Art Show</p>
              </div>

              {/* 2021 */}
              <div>
                <p className="text-gray-400 text-sm mb-2">2021</p>
                <p>CONTEXT Art Miami</p>
                <p>Art Toronto</p>
                <p>Art Paris</p>
                <p>LA Art Show</p>
              </div>

              {/* 2020 */}
              <div>
                <p className="text-gray-400 text-sm mb-2">2020</p>
                <p>Art Paris (Online)</p>
                <p>LA Art Show</p>
              </div>

              {/* 2019 */}
              <div>
                <p className="text-gray-400 text-sm mb-2">2019</p>
                <p>Aqua Miami (Solo Presentation)</p>
                <p>CONTEXT Art Miami</p>
                <p>Art Toronto</p>
                <p>Seattle Art Fair</p>
                <p>Art Market San Francisco</p>
                <p>Art Paris</p>
                <p>LA Art Show</p>
              </div>

              {/* 2018 */}
              <div>
                <p className="text-gray-400 text-sm mb-2">2018</p>
                <p>CONTEXT Art Miami</p>
                <p>Art Toronto</p>
                <p>AAF New York</p>
                <p>Seattle Art Fair</p>
                <p>Art Hamptons</p>
                <p>Art Market San Francisco</p>
                <p>Art Paris</p>
                <p>Art Palm Springs</p>
                <p>London Art Fair</p>
                <p>LA Art Show</p>
              </div>

              {/* 2017 */}
              <div>
                <p className="text-gray-400 text-sm mb-2">2017</p>
                <p>CONTEXT Art Miami</p>
                <p>AAF Singapore</p>
                <p>Art Toronto</p>
                <p>AAF Battersea</p>
                <p>AAF New York</p>
                <p>Seattle Art Fair</p>
                <p>AAF Hampstead</p>
                <p>AAF Hong Kong</p>
                <p>Art New York</p>
                <p>Art Paris</p>
                <p>AAF New York</p>
                <p>AAF Battersea</p>
                <p>Art Palm Springs</p>
                <p>AAF Milan</p>
                <p>LA Art Show</p>
              </div>

              {/* 2016 */}
              <div>
                <p className="text-gray-400 text-sm mb-2">2016</p>
                <p>Miami Project</p>
                <p>Art Toronto</p>
                <p>LAPADA</p>
                <p>Seattle Art Fair</p>
                <p>Art Market Hamptons</p>
                <p>AAF Hampstead</p>
                <p>Art16</p>
                <p>Art Market San Francisco</p>
                <p>AAF Singapore</p>
                <p>Art Paris</p>
                <p>AAF Battersea</p>
                <p>Art Palm Springs</p>
              </div>
            </div>
          </section>

          {/* Awards, Commissions & Residencies */}
          <section className="mb-16">
            <h2 className="text-sm font-medium tracking-wide text-black mb-6">AWARDS, COMMISSIONS & RESIDENCIES</h2>
            <div className="space-y-2 text-gray-600">
              <p>2025 Can Rudayla Residency, Ibiza</p>
              <p>2025 Californication House, Los Angeles</p>
            </div>
          </section>

          {/* Collections */}
          <section className="mb-16">
            <p className="text-gray-600">
              Work is held in public, private and corporate collections worldwide, including the collection of The Maybourne Group.
            </p>
          </section>

          {/* Press, Publications & Selected Interviews */}
          <section className="mb-16">
            <h2 className="text-sm font-medium tracking-wide text-black mb-6">PRESS, PUBLICATIONS & SELECTED INTERVIEWS</h2>
            <div className="space-y-2 text-gray-600">
              <p>2024 Country & Town House</p>
              <p>2021 FAD Magazine</p>
              <p>2020 Create Magazine (Interview)</p>
              <p>2019 Create Magazine (Cover, Art Miami Edition)</p>
              <p>2019 The Verbose (Interview)</p>
              <p>2018 World Of Interiors</p>
              <p>2017 Create Magazine</p>
              <p>2016 LAPADA Exhibition Catalogue</p>
              <p>2016 The Telegraph</p>
              <p>2016 Fresh Paint Magazine</p>
              <p>2016 Palm Springs Fine Art Fair Exhibition Catalogue</p>
            </div>
          </section>
        </div>
      </main>
      <BlackFooter />
    </div>
  );
};

export default CVPage;
