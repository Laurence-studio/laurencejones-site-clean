import React from 'react';
import { useBiography } from '../hooks/useApi';
import { Skeleton } from './ui/skeleton';

const BiographySection = () => {
  const { biography, loading } = useBiography();

  // New biography content for Laurence Jones
  const bioContent = {
    paragraph1: "Laurence Jones (b. 1991, Reading, UK) is a British painter whose work examines the relationship between architecture, light and the mediated image. Working at the intersection of fiction and reality, his paintings translate modern residential space into cinematic compositions that explore how we inhabit and project meaning onto built environments.",
    paragraph2: "Drawing from personal photographs, architectural references and mass-media imagery, Jones recontextualises source material through a precise, layered acrylic technique. Narrative emerges through addition and removal; forms displaced, reframed and reconstructed - producing scenes that feel both hyper-real and subtly estranged. Pools, glass facades and horizon lines recur as motifs, creating a suspended atmosphere that oscillates between intimacy and spectacle.",
    paragraph3: "Executed through multiple layers of glazes and controlled surfaces, the paintings possess a heightened, almost synthetic clarity; at once convincing and deliberately constructed. The work situates itself within a lineage that includes Pop Art's engagement with the mediated image, while remaining grounded in contemporary architectural culture.",
    paragraph4: "Jones studied Fine Art at Kingston University, London (2010–2013). He lives and works in London."
  };

  if (loading) {
    return (
      <section className="bg-white py-20 px-6 md:px-12 min-h-[600px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <Skeleton className="w-full max-w-md aspect-[3/4]" />
            <div className="space-y-6">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-20 px-6 md:px-12 min-h-[600px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Portrait Image */}
          <div className="relative">
            <img
              src={biography?.portrait || "https://customer-assets.emergentagent.com/job_2fb237eb-85b8-4e1a-abed-ad3be1f9478f/artifacts/hlwext05__DSC0422.jpg"}
              alt="Laurence Jones Portrait"
              className="w-full max-w-md h-auto object-cover"
            />
          </div>

          {/* Biography Text */}
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed text-base">
              {bioContent.paragraph1}
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              {bioContent.paragraph2}
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              {bioContent.paragraph3}
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              {bioContent.paragraph4}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
