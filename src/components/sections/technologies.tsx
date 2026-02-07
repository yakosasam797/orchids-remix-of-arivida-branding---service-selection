import React from 'react';
import Image from 'next/image';

const techFirstCol = [
  { name: 'HTML5', icon: 'https://www.batterseawebexpert.com/wp-content/uploads/2024/05/html.png' },
  { name: 'CSS3', icon: 'https://www.batterseawebexpert.com/wp-content/uploads/2024/05/css.png' },
  { name: 'Bootstrap', icon: 'https://www.batterseawebexpert.com/wp-content/uploads/2024/05/bootstrap.png' },
  { name: 'JavaScript', icon: 'https://www.batterseawebexpert.com/wp-content/uploads/2024/05/js.png' },
  { name: 'jQuery', icon: 'https://www.batterseawebexpert.com/wp-content/uploads/2024/05/jquery.png' },
  { name: 'PHP', icon: 'https://www.batterseawebexpert.com/wp-content/uploads/2024/05/php.png' },
  { name: 'Node.js', icon: 'https://www.batterseawebexpert.com/wp-content/uploads/2024/05/node.png' },
  { name: 'Laravel', icon: 'https://www.batterseawebexpert.com/wp-content/uploads/2024/05/laravel.png' },
  { name: 'ExpressJS', icon: 'https://www.batterseawebexpert.com/wp-content/uploads/2024/03/ExpressJS-Icon.png' },
  { name: 'GitHub', icon: 'https://www.batterseawebexpert.com/wp-content/uploads/2024/05/github.png' },
];

const techSecondCol = [
  { name: 'Illustrator', icon: 'https://www.batterseawebexpert.com/wp-content/uploads/2024/03/Illustrator-Icon.png' },
  { name: 'AfterEffects', icon: 'https://www.batterseawebexpert.com/wp-content/uploads/2024/03/Aftereffects-Icon.png' },
  { name: 'PWA', icon: 'https://www.batterseawebexpert.com/wp-content/uploads/2024/03/PWA-Icon.png' },
  { name: 'AMP', icon: 'https://www.batterseawebexpert.com/wp-content/uploads/2024/03/AMP-Icon.png' },
  { name: 'GitLab', icon: 'https://www.batterseawebexpert.com/wp-content/uploads/2024/05/gitlab.png' },
  { name: 'MongoDB', icon: 'https://www.batterseawebexpert.com/wp-content/uploads/2024/05/mongodb.png' },
  { name: 'MySQL', icon: 'https://www.batterseawebexpert.com/wp-content/uploads/2024/05/mysql.png' },
  { name: 'WordPress', icon: 'https://www.batterseawebexpert.com/wp-content/uploads/2024/03/Wordpress-Icon.png' },
  { name: 'Photoshop', icon: 'https://www.batterseawebexpert.com/wp-content/uploads/2024/05/photoshop.png' },
  { name: 'Figma', icon: 'https://www.batterseawebexpert.com/wp-content/uploads/2024/03/Figma-Icon.png' },
];

const Technologies = () => {
  return (
    <section className="relative overflow-hidden bg-[#010915] py-[80px] lg:py-[100px]">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 h-[400px] w-[400px] bg-glow-blue opacity-30 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 h-[400px] w-[400px] bg-glow-purple opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-[60px]">
          <div className="flex items-center justify-center gap-2 mb-4">
             <span className="h-[1px] w-8 bg-primary/40"></span>
             <span className="text-muted-foreground uppercase tracking-widest text-sm font-semibold">Our Expertise</span>
             <span className="h-[1px] w-8 bg-primary/40"></span>
          </div>
          <h2 className="text-[32px] md:text-[42px] font-extrabold text-white leading-tight">
            Technologies We <span className="text-primary italic">Master</span> to Build Your Success
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-4 max-w-[1100px] mx-auto">
          {/* Left Column - Tech Grid */}
          <div className="lg:col-span-5 grid grid-cols-5 gap-y-10 gap-x-2">
            {techFirstCol.map((tech, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="w-[45px] h-[45px] relative transition-transform duration-300 group-hover:-translate-y-1">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[10px] text-muted-foreground mt-2 uppercase font-medium whitespace-nowrap opacity-60 group-hover:opacity-100">{tech.name}</span>
              </div>
            ))}
          </div>

          {/* Center Column - Rotating Experience Badge */}
          <div className="lg:col-span-2 flex justify-center py-6 px-4">
            <div className="relative w-[160px] h-[160px] flex items-center justify-center">
              {/* Inner Circle Logo */}
              <div className="absolute z-20 w-[100px] h-[100px] rounded-full bg-[#0a1425] border border-white/10 flex items-center justify-center shadow-xl">
                <div className="relative w-12 h-12">
                   <Image 
                     src="https://www.batterseawebexpert.com/wp-content/uploads/2025/12/bwe-fav.webp" 
                     alt="BWE Logo" 
                     fill 
                     className="object-contain"
                   />
                </div>
              </div>

              {/* Rotating Circular Text */}
              <div className="absolute z-10 w-full h-full animate-spin-slow">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                    />
                  </defs>
                  <text className="text-[9px] font-bold tracking-[0.2em] uppercase fill-white/80">
                    <textPath xlinkHref="#circlePath">
                      • 12+ YEARS EXPERIENCE • DIGITAL INNOVATION • WEB EXPERTISE
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column - Tech Grid */}
          <div className="lg:col-span-5 grid grid-cols-5 gap-y-10 gap-x-2">
            {techSecondCol.map((tech, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="w-[45px] h-[45px] relative transition-transform duration-300 group-hover:-translate-y-1">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[10px] text-muted-foreground mt-2 uppercase font-medium whitespace-nowrap opacity-60 group-hover:opacity-100">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-[80px] max-w-[1100px] mx-auto rounded-[24px] overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1425] via-[#0f1d36] to-[#0a1425] border border-white/10" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_right,_rgba(125,65,255,0.1),transparent)]" />
          
          <div className="relative px-8 py-10 lg:px-12 lg:py-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">// GET IN TOUCH</span>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Let&apos;s Build Your <span className="text-gradient-orange">Digital Success</span> Story!
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Ready to elevate your online presence? Get in touch with us today for personalized solutions tailored to your business needs.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-white/90">50+ Team Members</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-white/90">Award Winning Agency</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-white/90">Affordable Pricing</span>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0">
              <a 
                href="/contact" 
                className="btn-pill bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2 group/btn"
              >
                Book A Free Consultation
                <svg 
                  className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;