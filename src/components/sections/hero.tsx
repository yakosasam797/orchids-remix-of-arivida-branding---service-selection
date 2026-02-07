import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Megaphone } from 'lucide-react';

/**
 * HeroSection Component
 * Clones the hero section of Battersea Web Expert with pixel-perfect accuracy.
 * Features: Overlapping ribbons, Welcome badge, H1 with highlights, Lead generation form, and Partner logos.
 */
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#010915] pt-[120px] pb-[80px] lg:pt-[150px] lg:pb-[100px]">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-glow-purple opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Column: Content */}
          <div className="w-full lg:w-7/12">
            <div className="flex flex-col space-y-8">
              
              {/* Overlapping Ribbons */}
              <div className="flex items-center -space-x-4">
                <div className="bg-[#ff9c22] text-white px-6 py-2 rounded-full font-display font-semibold transition-transform hover:-translate-y-1 rotate-[-2deg] z-20 shadow-lg">
                  <span className="text-sm md:text-base">Have an idea</span>
                </div>
                <div className="bg-[#7d41ff] text-white px-8 py-2 rounded-full font-display font-semibold transition-transform hover:-translate-y-1 rotate-[3deg] z-10 shadow-lg">
                  <span className="text-sm md:text-base">or project?</span>
                </div>
              </div>

              {/* Welcome Badge */}
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 w-fit px-4 py-2 rounded-full text-white font-display text-sm backdrop-blur-md">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/hero-speaker-3.webp"
                  alt="Speaker icon"
                  width={25}
                  height={25}
                  className="object-contain"
                />
                <span className="font-medium">Welcome To BatterseaWebExpert</span>
              </div>

              {/* Headline */}
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-[1.15]">
                #1 <span className="text-[#ff9c22]">AI-Powered</span> Digital Marketing <span className="text-[#ff9c22]">That Drives</span> Real Business Growth
              </h1>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="https://www.batterseawebexpert.com/digital-marketing-packages/" 
                  className="bg-[#ff9c22] text-[#010915] px-8 py-4 rounded-full font-bold font-display flex items-center gap-2 hover:bg-[#ff9c22]/90 transition-all hover:scale-105"
                >
                  Audit My Web Presence
                  <ArrowUpRight size={18} />
                </a>
                <a 
                  href="https://www.batterseawebexpert.com/our-portfolio/" 
                  className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold font-display flex items-center gap-2 hover:bg-white/20 transition-all hover:scale-105 backdrop-blur-sm"
                >
                  View Our Work
                  <ArrowUpRight size={18} />
                </a>
              </div>

              {/* Partner Logos Bar */}
              <div className="flex flex-wrap items-center gap-8 pt-8 opacity-80 border-t border-white/10">
                <div className="relative h-[45px] w-[80px]">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/hero-logo-1-4.webp"
                    alt="Google Partner"
                    fill
                    className="object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
                <div className="relative h-[35px] w-[100px]">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/hero-logo-2-5.webp"
                    alt="Meta Business Partner"
                    fill
                    className="object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
                <div className="relative h-[45px] w-[70px]">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/hero-logo-3-6.webp"
                    alt="Clutch"
                    fill
                    className="object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
                <div className="relative h-[30px] w-[180px]">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/hero-logo-4-7.webp"
                    alt="Trusted Agency"
                    fill
                    className="object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="w-full lg:w-5/12">
            <div className="glass-card p-8 rounded-[24px] shadow-2xl relative">
              {/* Form Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold font-display text-white mb-2">Connect with our Digital Marketing Experts</h3>
                <div className="w-16 h-1 bg-[#ff9c22] rounded-full" />
              </div>

              {/* Form */}
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Enter Your Name" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-[#ff9c22] transition-all"
                  />
                  <input 
                    type="email" 
                    placeholder="Enter Your Email" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-[#ff9c22] transition-all"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="tel" 
                    placeholder="Your Phone Number" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-[#ff9c22] transition-all"
                  />
                  <input 
                    type="text" 
                    placeholder="Enter Your Company" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-[#ff9c22] transition-all"
                  />
                </div>
                <div>
                  <select className="w-full bg-[#0a1425] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-[#ff9c22] appearance-none cursor-pointer">
                    <option className="bg-[#0a1425]">--Choose Services--</option>
                    <option className="bg-[#0a1425]">Search Engine Optimization</option>
                    <option className="bg-[#0a1425]">Pay Per Click</option>
                    <option className="bg-[#0a1425]">Web Designing</option>
                    <option className="bg-[#0a1425]">Web Development</option>
                    <option className="bg-[#0a1425]">Social Media Marketing</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-[#7d41ff] text-white py-4 rounded-lg font-bold font-display flex items-center justify-center gap-2 hover:bg-[#7d41ff]/90 transition-all shadow-lg hover:shadow-[#7d41ff]/20 mt-4"
                >
                  Enquire Now
                  <ArrowUpRight size={20} />
                </button>
              </form>

              {/* Decorative Sparkle */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#ff9c22] rounded-full flex items-center justify-center animate-pulse">
                <ArrowUpRight className="text-[#010915]" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Counter Bar (Placeholder for visual context) */}
      <div className="mt-20 bg-[#0a1425]/80 backdrop-blur-sm border-y border-white/5">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <div className="text-2xl md:text-4xl font-extrabold text-[#ff9c22] font-display">1,000+</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">Total Works</div>
            </div>
            <div className="text-center md:text-left border-l border-white/10 pl-0 md:pl-8">
              <div className="text-2xl md:text-4xl font-extrabold text-white font-display">12+</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">Years Experience</div>
            </div>
            <div className="text-center md:text-left border-l border-white/10 pl-0 md:pl-8">
              <div className="text-2xl md:text-4xl font-extrabold text-white font-display">96.6%</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">Client Satisfaction</div>
            </div>
            <div className="text-center md:text-left border-l border-white/10 pl-0 md:pl-8">
              <div className="text-2xl md:text-4xl font-extrabold text-white font-display">4.9</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">Google Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}