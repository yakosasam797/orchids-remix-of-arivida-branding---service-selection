import React from 'react';
import { Star } from 'lucide-react';

/**
 * StatsCounter Section: A 4-column grid displaying key metrics for the agency.
 * Features large numerical headers, descriptive text, and a star-rating system.
 * Designed to fit a high-contrast dark theme with accent colors.
 */
export default function StatsCounter() {
  return (
    <section className="bg-[#010915] border-y border-white/10">
      <div className="mx-auto max-w-[1320px]">
        {/* Main Grid Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center">
          
          {/* Item 1: Total Works */}
          <div className="flex flex-col items-center lg:items-start justify-center py-8 lg:py-10 px-6 border-b lg:border-b-0 md:border-r border-white/10 bg-[#ff9c22]/5 lg:bg-transparent">
            <div className="text-[14px] font-semibold text-[#ff9c22] uppercase tracking-wider mb-2 font-display">
              Total Works :
            </div>
            <div className="text-[42px] lg:text-[48px] font-extrabold text-white leading-none font-display">
              1,000+
            </div>
          </div>

          {/* Item 2: Years of Experience */}
          <div className="flex flex-row md:flex-col lg:flex-row items-center gap-4 py-8 lg:py-10 px-6 border-b md:border-b-0 md:border-r border-white/10 bg-[#050d1a]">
            <div className="text-[42px] lg:text-[48px] font-extrabold text-white leading-none font-display min-w-[80px]">
              12+
            </div>
            <div className="text-[13px] text-[#a7adb9] leading-relaxed font-sans">
              We’ve more than 12+ years of experiences<br />
              UI/UX & Web Development & SEO
            </div>
          </div>

          {/* Item 3: Clients Satisfaction */}
          <div className="flex flex-row md:flex-col lg:flex-row items-center gap-4 py-8 lg:py-10 px-6 border-b lg:border-b-0 md:border-r border-white/10 bg-[#050d1a]">
            <div className="text-[42px] lg:text-[48px] font-extrabold text-white leading-none font-display min-w-[110px]">
              96.6%
            </div>
            <div className="text-[13px] text-[#a7adb9] leading-relaxed font-sans">
              Clients Satisfaction<br />
              Rate Of (100%)
            </div>
          </div>

          {/* Item 4: Ratings */}
          <div className="flex flex-row md:flex-col lg:flex-row items-center gap-4 py-8 lg:py-10 px-6 bg-[#050d1a]">
            <div className="text-[42px] lg:text-[48px] font-extrabold text-white leading-none font-display min-w-[70px]">
              4.9
            </div>
            <div className="flex flex-col gap-1">
              <ul className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <li key={i}>
                    <Star 
                      size={16} 
                      fill="#ff9c22" 
                      stroke="#ff9c22" 
                      className="drop-shadow-[0_0_8px_rgba(255,156,34,0.3)]"
                    />
                  </li>
                ))}
              </ul>
              <div className="text-[13px] font-semibold text-[#a7adb9] uppercase tracking-wider font-display">
                Ratings
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        .font-display {
          font-family: var(--font-display), "Outfit", sans-serif;
        }
        .font-sans {
          font-family: var(--font-sans), "Inter", sans-serif;
        }
      `}</style>
    </section>
  );
}