import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      id: 1,
      name: "SEO Agency of the Year",
      img: "https://www.batterseawebexpert.com/wp-content/uploads/2025/11/award-1.webp",
    },
    {
      id: 2,
      name: "Top Web Developers",
      img: "https://www.batterseawebexpert.com/wp-content/uploads/2025/11/award-2.webp",
    },
    {
      id: 3,
      name: "Digital Excellence Award",
      img: "https://www.batterseawebexpert.com/wp-content/uploads/2025/11/award-3.webp",
    },
    {
      id: 4,
      name: "Clutch Verified",
      img: "https://www.batterseawebexpert.com/wp-content/uploads/2025/11/award-4.webp",
    },
    {
      id: 5,
      name: "Google Partner",
      img: "https://www.batterseawebexpert.com/wp-content/uploads/2025/11/award-5.webp",
    },
    {
      id: 6,
      name: "Manifest Top Company",
      img: "https://www.batterseawebexpert.com/wp-content/uploads/2025/11/award-6.webp",
    },
    {
      id: 7,
      name: "GoodFirms Certified",
      img: "https://www.batterseawebexpert.com/wp-content/uploads/2025/11/award-7.webp",
    },
    {
      id: 8,
      name: "UpCity Verified",
      img: "https://www.batterseawebexpert.com/wp-content/uploads/2025/11/award-8.webp",
    },
    {
      id: 9,
      name: "Top SEO Company 2024",
      img: "https://www.batterseawebexpert.com/wp-content/uploads/2025/11/award-9.webp",
    },
    {
      id: 10,
      name: "Boutique Agency of Year",
      img: "https://www.batterseawebexpert.com/wp-content/uploads/2025/11/award-10.webp",
    },
  ];

  return (
    <section className="section-padding bg-[#010915] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-[400px] height-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] height-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-2 mb-4">
             <div className="h-[1px] w-12 bg-primary/50" />
             <span className="text-muted-foreground uppercase tracking-widest text-sm font-semibold">Our Achievements</span>
             <div className="h-[1px] w-12 bg-primary/50" />
          </div>
          <h2 className="text-center max-w-3xl">
            Awards & <span className="text-primary">Accolades</span> That Drive Our Passion
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Video Branding Section */}
          <div className="lg:col-span-5">
            <div className="relative group overflow-hidden rounded-[20px] aspect-video glass-card border-white/10 shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/iZuMCpxaoRM?si=iE3Sl_19cCGpkvRs"
                title="12 Years Celebration - Battersea Web Expert"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div className="absolute -bottom-1 -left-1 p-4 bg-primary text-black font-bold font-display rounded-tr-xl z-20 text-sm">
                12+ YEARS OF EXCELLENCE
              </div>
            </div>
          </div>

          {/* Awards Grid Section */}
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {awards.map((award) => (
                  <div 
                    key={award.id} 
                    className="flex flex-col items-center justify-center p-3 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
                  >
                    <img
                      src={award.img}
                      alt={award.name}
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center md:justify-start">
                <a 
                  href="https://www.batterseawebexpert.com/contact" 
                  className="btn-pill bg-primary text-primary-foreground flex items-center gap-2 group whitespace-nowrap"
                >
                  Book A Free Consultation
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;