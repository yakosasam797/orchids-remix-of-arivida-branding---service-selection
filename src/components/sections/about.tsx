import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Phone } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden section-padding bg-[#010915]">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-[#7d41ff] opacity-[0.05] blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-[#ff9c22] opacity-[0.03] blur-[120px] rounded-full"></div>
      </div>

      <div className="container relative z-10">
        {/* Header Row */}
        <div className="row justify-center mb-12 sm:mb-16">
          <div className="col-lg-8 text-center">
            <div className="flex items-center justify-center gap-2 text-[#ff9c22] font-display font-semibold uppercase tracking-wider mb-4">
              <span className="w-10 h-[1px] bg-[#ff9c22]/30"></span>
              About Our Company
              <span className="w-10 h-[1px] bg-[#ff9c22]/30"></span>
            </div>
            <h2 className="text-[32px] md:text-[42px] font-extrabold leading-tight text-white mb-6">
              Best <span className="text-[#ff9c22]">Digital</span> Marketing Agency in <span className="text-[#ff9c22]">india</span> Boosting <span className="text-[#ff9c22]">Online</span> Growth
            </h2>
          </div>
        </div>

        {/* Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Collage Side */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/abt-img-3-8.webp" 
                    alt="Team meeting" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/abt-img-2-9.webp" 
                    alt="Professional discussion" 
                    width={300} 
                    height={300} 
                    className="w-full h-[200px] object-cover"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/abt-img-1-10.webp" 
                    alt="Workspace" 
                    width={300} 
                    height={300} 
                    className="w-full h-[200px] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Rotating Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative w-[130px] h-[130px] md:w-[150px] md:h-[150px] bg-[#010915] rounded-full border border-white/10 flex items-center justify-center p-2 shadow-2xl">
                {/* Rotating Text Container */}
                <div className="absolute inset-0 w-full h-full animate-spin-slow">
                  <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                    <path 
                      id="circlePath" 
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" 
                      fill="none"
                    />
                    <text className="fill-[#ff9c22] font-display font-bold text-[8.5px] uppercase tracking-[2px]">
                      <textPath href="#circlePath">
                        12+ YEARS EXPERIENCE • 12+ YEARS EXPERIENCE •
                      </textPath>
                    </text>
                  </svg>
                </div>
                {/* Center Logo */}
                <div className="relative w-16 h-16 md:w-20 md:h-20 bg-[#0a1425] rounded-full flex items-center justify-center border border-white/5 z-30">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/bwe-fav-11.webp" 
                    alt="Logo" 
                    width={40} 
                    height={40} 
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Side */}
          <div className="flex flex-col">
            <div className="text-[#a7adb9] font-display font-semibold text-lg md:text-xl mb-6 flex items-center gap-3">
              <span className="text-white">SEO | Google Ads | Social Media | Website</span>
            </div>
            
            <p className="text-[#a7adb9] text-base md:text-lg leading-relaxed mb-10">
              Battersea Web Expert is one-stop solution to all your web marketing needs. If you want to see an instant growth in your businesses through digital marketing strategies, give us an opportunity to help you. From SEO, content writing, graphic designing, website development to social media marketing, our team consists experts for everything. You will be amazed to know that through the services we provide, our clients received more than four million business leads with the help of which they could earn a revenue of billion of dollars.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <a 
                href="https://www.batterseawebexpert.com/about/" 
                className="group relative inline-flex items-center gap-2 bg-[#ff9c22] text-[#010915] px-8 py-4 rounded-full font-display font-bold tracking-tight transition-all hover:bg-white hover:scale-105"
              >
                Discover More
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#0a1425] rounded-full border border-white/10 flex items-center justify-center text-[#ff9c22] shadow-inner">
                  <Phone className="w-6 h-6 fill-current" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#a7adb9] text-sm font-medium">Call us anytime</span>
                  <a href="tel:+918826916476" className="text-white text-lg font-bold hover:text-[#ff9c22] transition-colors">
                    +91 8826 916 476
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;