import React from 'react';
import Image from 'next/image';

/**
 * PartnersScroller Component
 * 
 * An infinite horizontal logo scroller section showcasing corporate partners.
 * Implements a "pixel perfect" clone based on provided design instructions, 
 * assets, and computed styles.
 */

const partners = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/appslure-18.webp", alt: "Appslure" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/kashmirholidaypackage-19.webp", alt: "Kashmir Holiday Package" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/hop-on-hop-off-20.webp", alt: "Hop On Hop Off" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/apollohospitals-21.webp", alt: "Apollo Hospitals" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/visualsclipping-22.webp", alt: "Visuals Clipping" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/thevijayenterprises-23.webp", alt: "The Vijay Enterprises" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/getassist-1-24.webp", alt: "Get Assist" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/triphippies-25.webp", alt: "Trip Hippies" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/haveznz-26.webp", alt: "Havez NZ" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/haxor-27.webp", alt: "Haxor" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/godroom-28.webp", alt: "Godroom" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/naturecaresayurveda-29.webp", alt: "Nature Cares Ayurveda" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/secrettemptation-30.webp", alt: "Secret Temptation" },
];

const PartnersScroller = () => {
  return (
    <section className="bg-[#010915] py-[80px] overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center">
          <h2 className="text-white text-[32px] md:text-[42px] font-bold font-display uppercase tracking-tight">
            Trusted by Corporate Partners
          </h2>
          <div className="w-[80px] h-[3px] bg-[#ff9c22] mx-auto mt-4 rounded-full"></div>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Infinite Scroller Container */}
        <div className="flex animate-marquee whitespace-nowrap py-10">
          {partners.map((partner, index) => (
            <div 
              key={`partner-1-${index}`} 
              className="mx-8 flex items-center justify-center min-w-[150px] grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-none md:pointer-events-auto"
            >
              <div className="relative h-[50px] w-full max-w-[180px]">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 150px, 180px"
                />
              </div>
            </div>
          ))}
          {/* Duplicate for seamless looping */}
          {partners.map((partner, index) => (
            <div 
              key={`partner-2-${index}`} 
              className="mx-8 flex items-center justify-center min-w-[150px] grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-none md:pointer-events-auto"
            >
              <div className="relative h-[50px] w-full max-w-[180px]">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 150px, 180px"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Second Row for variation or faster scroll - based on screenshot logic, single row is primary but double row helps feel richer */}
        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap py-10" style={{ animationDelay: '15s' }}>
          {/* This is a helper for the CSS-only marquee effect */}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 40s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 25s;
          }
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PartnersScroller;