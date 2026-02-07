import React from 'react';
import Image from 'next/image';

const IndustriesServed = () => {
  const industries = [
    {
      name: 'Real Estate',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/svgs/blogging-4.svg',
    },
    {
      name: 'Customer Support',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/svgs/software-6.svg',
    },
    {
      name: 'E-Commerce',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/svgs/production-3.svg',
    },
    {
      name: 'Law',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/svgs/blogging-4.svg',
    },
    {
      name: 'Hospital',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/svgs/hospital-1.svg',
    },
    {
      name: 'School',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/svgs/school-2.svg',
    },
    {
      name: 'Delivery',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/svgs/logistics-5.svg',
    },
    {
      name: 'Food & Beverage',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/svgs/food-7.svg',
    },
  ];

  return (
    <section className="bg-[#010915] py-[80px] md:py-[100px] overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-glow-blue opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-glow-purple opacity-30 pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-primary"></div>
            <span className="text-muted-foreground font-display font-semibold tracking-wider text-sm uppercase">
              Our Expertise Across Sectors
            </span>
            <div className="w-8 h-[2px] bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center font-display">
            Industries <span className="text-primary italic">We Served</span>
          </h2>
        </div>

        {/* Desktop Grid Layout matches the visual pattern of icons floating */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-12 md:gap-y-16 gap-x-4">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative mb-4 w-[70px] h-[70px] md:w-[90px] md:h-[90px] flex items-center justify-center">
                {/* Decorative circle backdrop */}
                <div className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                
                <div className="relative w-full h-full flex items-center justify-center p-2">
                  <Image
                    src={industry.icon}
                    alt={industry.name}
                    width={64}
                    height={64}
                    className="object-contain filter drop-shadow-lg"
                  />
                </div>
              </div>
              <h3 className="text-white font-display text-base md:text-lg font-semibold text-center group-hover:text-primary transition-colors">
                {industry.name}
              </h3>
            </div>
          ))}

          {/* Spacer elements to match the airy gaps in the original structure */}
          <div className="hidden lg:flex items-center justify-center opacity-10">
            <div className="w-12 h-12 rounded-full border border-white/20"></div>
          </div>
          <div className="hidden lg:flex items-center justify-center opacity-10">
           <div className="w-8 h-8 rounded-full border border-white/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;