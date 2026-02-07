import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, FileText } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Search Engine Optimization',
    description: 'Our SEO Service will make your webpage rise up Google search results and gives it organic traffic as well as gaining a good position.',
    link: 'https://www.batterseawebexpert.com/seo-services/',
    icon: <FileText className="w-6 h-6 text-primary" />,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/srvc-port-1-12.webp'
  },
  {
    id: '02',
    title: 'Website Development Service',
    description: 'We have tailor made Web Development Services that are functional and scalable. Whether it is an eCommerce solution or a dynamic site.',
    link: 'https://www.batterseawebexpert.com/web-development-services/',
    icon: <FileText className="w-6 h-6 text-primary" />,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/srvc-port-2-13.webp'
  },
  {
    id: '03',
    title: 'Social Media Marketing',
    description: 'With our SMM agency, we will assist you in creating your brand on platforms like Instagram, Facebook, and LinkedIn.',
    link: 'https://www.batterseawebexpert.com/social-media-marketing/',
    icon: <FileText className="w-6 h-6 text-primary" />,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/srvc-port-3-14.webp'
  },
  {
    id: '04',
    title: 'Shopify Development',
    description: 'We have tailor made Web Development Services that are functional and scalable. Whether it is an eCommerce solution or a dynamic site.',
    link: 'https://www.batterseawebexpert.com/web-development-services/',
    icon: <FileText className="w-6 h-6 text-primary" />,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/srvc-port-4-15.webp'
  },
  {
    id: '05',
    title: 'UI/UX Designing',
    description: 'With the help of Web Design services, we develop appealing and mobile-friendly sites. We prioritize user-friendly UI/UX design.',
    link: 'https://www.batterseawebexpert.com/web-design-services/',
    icon: <FileText className="w-6 h-6 text-primary" />,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/srvc-port-5-16.webp'
  },
  {
    id: '06',
    title: 'Content Marketing',
    description: 'We have a Content Marketing Service that entails strategic planning and creation, and distribution. We create SEO friendly blogs.',
    link: 'https://www.batterseawebexpert.com/content-marketing-services/',
    icon: <FileText className="w-6 h-6 text-primary" />,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/srvc-port-6-17.webp'
  }
];

export default function ServicesSection() {
  return (
    <section className="bg-[#010915] section-padding relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-glow-blue opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-glow-purple opacity-30 -z-10" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="text-primary font-semibold tracking-wider mb-4 font-display flex items-center justify-center gap-2">
            <span className="h-[1px] w-8 bg-primary"></span>
            Our Services
            <span className="h-[1px] w-8 bg-primary"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 font-display">
            Services We Provide
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-sans">
            As a digital marketing agency, we know that to perform exceedingly well in the field of
            marketing, it’s important to target the niche-based audience and connect with it at the right
            time. Therefore, Battersea never lags behind in terms of any online marketing area.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group relative bg-[#0a1425] rounded-xl border border-white/10 p-8 transition-all duration-300 hover:border-primary/50 hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Numbering */}
              <div className="absolute top-4 right-6 text-5xl font-black text-white/5 font-display select-none transition-colors group-hover:text-primary/10">
                {service.id}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 bg-white/5 rounded-lg flex items-center justify-center mb-6 transition-colors group-hover:bg-primary/20">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 font-display group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Hidden Image Overlay on Hover (Visual Flare) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-0 pointer-events-none">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover"
                />
              </div>

              {/* Read More Link */}
              <a 
                href={service.link} 
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
              >
                Read more
                <ArrowUpRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Action */}
        <div className="mt-16 text-center">
          <a 
            href="https://www.batterseawebexpert.com/contact/" 
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold font-display hover:scale-105 transition-transform"
          >
            View All Services
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}