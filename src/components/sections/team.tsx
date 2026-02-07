import React from 'react';
import Image from 'next/image';
import { Linkedin, ChevronRight } from 'lucide-react';

/**
 * Team Section Component
 * 
 * Clones the "Meet Our Professional Team" section with pixel-perfect accuracy.
 * Uses a dark theme with circular headshots, names, roles, and LinkedIn icons.
 */

const teamMembers = [
  {
    name: "Prashant Chhibber",
    role: "Founder & MD",
    image: "https://www.batterseawebexpert.com/wp-content/uploads/2025/11/abt-img-3.webp", // Mocked as asset list is empty, using related abt-img
    isFounder: true,
  },
  {
    name: "Vinay Kumar",
    role: "Lead Developer",
    image: "https://www.batterseawebexpert.com/wp-content/uploads/2025/11/abt-img-2.webp",
    isFounder: false,
  },
  {
    name: "Vikas Pandey",
    role: "Web Development Manager",
    image: "https://www.batterseawebexpert.com/wp-content/uploads/2025/11/abt-img-1.webp",
    isFounder: false,
  },
  {
    name: "Manpreet Kaur",
    role: "Content Head",
    image: "https://www.batterseawebexpert.com/wp-content/uploads/2025/11/abt-img-3.webp",
    isFounder: false,
  },
  {
    name: "Bhagwat Prasad",
    role: "Digital Marketing Manager",
    image: "https://www.batterseawebexpert.com/wp-content/uploads/2025/11/abt-img-2.webp",
    isFounder: false,
  },
  {
    name: "Meena",
    role: "HR Manager",
    image: "https://www.batterseawebexpert.com/wp-content/uploads/2025/11/abt-img-1.webp",
    isFounder: false,
  },
  {
    name: "Raqes Singh",
    role: "Content Marketing Manager",
    image: "https://www.batterseawebexpert.com/wp-content/uploads/2025/11/abt-img-3.webp",
    isFounder: false,
  }
];

const TeamMemberCard = ({ member }: { member: typeof teamMembers[0] }) => {
  if (member.isFounder) {
    return (
      <div className="relative group col-span-2 lg:col-span-1 flex flex-col items-center">
        <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-[#0a1425] bg-[#050d1a] shadow-xl">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
          {/* Experience Badge Overlay */}
          <div className="absolute top-4 right-4 z-10">
            <div className="relative w-20 h-20 bg-[#010915] rounded-full border border-primary/30 flex items-center justify-center animate-spin-slow">
               <svg className="absolute w-full h-full p-1" viewBox="0 0 100 100">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text className="text-[8px] font-bold fill-primary tracking-[2px]">
                  <textPath href="#circlePath">12+ YEARS EXPERIENCE • </textPath>
                </text>
              </svg>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-black font-bold text-[10px]">B</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <div className="inline-block px-6 py-2 bg-primary rounded-md mb-2">
            <h3 className="text-black text-xl font-bold font-display">{member.name}</h3>
            <p className="text-black/80 text-sm font-semibold">{member.role}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center group">
      <div className="relative w-[140px] h-[140px] md:w-[160px] md:h-[160px] rounded-full overflow-hidden border-2 border-border bg-[#0a1425] mb-4">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <a 
          href="#" 
          className="absolute top-2 left-2 w-8 h-8 bg-[#0a1425] rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary transition-colors z-20"
        >
          <Linkedin className="w-4 h-4" />
        </a>
      </div>
      <div className="text-center">
        <h4 className="text-white text-base font-bold font-display group-hover:text-primary transition-colors">{member.name}</h4>
        <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">{member.role}</p>
      </div>
    </div>
  );
};

export default function TeamSection() {
  const founder = teamMembers.find(m => m.isFounder);
  const others = teamMembers.filter(m => !m.isFounder);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-glow-purple opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-glow-blue opacity-20 pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex-1">
            <span className="text-muted-foreground text-sm font-semibold mb-2 block tracking-widest uppercase">
              // About Our Company
            </span>
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-white">
                Meet Our <span className="text-white font-extrabold">Professional</span> Team
              </h2>
            </div>
          </div>
          
          <div className="flex-shrink-0">
             <a 
              href="/team" 
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0a1425] border border-border rounded-full text-sm font-semibold text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
            >
              View All Members
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 items-start">
          {/* Left Column - Founder */}
          <div className="lg:col-span-1 flex justify-center lg:justify-start">
            {founder && <TeamMemberCard member={founder} />}
          </div>

          {/* Right Area - Team Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 gap-y-10">
              {others.map((member, idx) => (
                <TeamMemberCard key={idx} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}