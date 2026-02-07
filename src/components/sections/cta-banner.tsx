import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

/**
 * CTABanner Component
 * Clones the dark-themed "Let's Build Your Digital Success Story!" call-to-action banner
 * as per the high-level design and screenshots.
 */
const CTABanner: React.FC = () => {
  return (
    <section className="section-padding px-6">
      <div className="container">
        {/* Main Banner Container with Glassmorphism and Background Treatment */}
        <div 
          className="relative overflow-hidden rounded-[20px] bg-[#0a1425] border border-white/10 px-8 py-12 md:px-16 md:py-20 lg:flex lg:items-center lg:justify-between lg:gap-12 group"
          style={{
            background: 'linear-gradient(135deg, #0a1425 0%, #010915 100%)',
          }}
        >
          {/* Subtle Background Glows (Visual Treatments) */}
          <div className="absolute top-[-50%] right-[-10%] w-[400px] h-[400px] bg-secondary/10 blur-[100px] pointer-events-none rounded-full" />
          <div className="absolute bottom-[-50%] left-[-10%] w-[400px] h-[400px] bg-primary/5 blur-[100px] pointer-events-none rounded-full" />

          {/* Text Content Area */}
          <div className="relative z-10 flex-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary font-display font-semibold text-sm tracking-widest uppercase">
                // Get In Touch
              </span>
            </div>
            
            <h2 className="text-white text-[32px] md:text-[42px] font-display font-extrabold leading-[1.2] mb-6">
              Let&apos;s Build Your <span className="text-primary">Digital Success</span> Story!
            </h2>
            
            <p className="text-muted-foreground text-base md:text-lg max-w-[600px] mb-8 leading-relaxed">
              Ready to elevate your online presence? Get in touch with us today for personalized solutions tailored to your business needs.
            </p>

            {/* Benefit Bullet Points */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-white/90 font-medium">50+ Team Members</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-white/90 font-medium">Award Winning Agency</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-white/90 font-medium">Affordable Pricing Plans</span>
              </div>
            </div>
          </div>

          {/* Action Button & Floating Element Area */}
          <div className="relative z-10 flex shrink-0 flex-col items-center lg:items-end">
            <a 
              href="https://www.batterseawebexpert.com/contact/"
              className="bg-primary hover:bg-[#ff8c00] text-primary-foreground btn-pill flex items-center gap-2 group/btn"
            >
              Book A Free Consultation
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </a>
            
            {/* Visual Decoration: Floating Svg/Graphic path (optional, matching motif) */}
            <div className="mt-8 hidden md:block">
              <svg 
                width="140" 
                height="80" 
                viewBox="0 0 140 80" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-20 transition-opacity duration-500 group-hover:opacity-40"
              >
                <path 
                  d="M10 70C30 70 40 10 70 10C100 10 110 70 130 70" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeDasharray="4 4" 
                  className="animate-pulse"
                />
                <circle cx="130" cy="70" r="4" fill="var(--color-primary)" />
              </svg>
            </div>
          </div>

          {/* Image/Character Mockup from reference (if any asset existed) */}
          <div className="absolute right-0 bottom-0 hidden lg:block opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
             {/* Character silhouette effect if asset wasn't found - using a placeholder container shape */}
             <div className="w-[300px] h-[300px] bg-gradient-to-t from-black to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;