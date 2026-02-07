import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'About', href: 'https://www.batterseawebexpert.com/about/' },
    { name: 'Contact', href: 'https://www.batterseawebexpert.com/contact/' },
    { name: 'Blog', href: 'https://www.batterseawebexpert.com/blog/' },
    { name: 'Our Portfolio', href: 'https://www.batterseawebexpert.com/portfolio/' },
  ];

  const ourServices = [
    { name: 'Digital Marketing Services', href: 'https://www.batterseawebexpert.com/digital-marketing-services/' },
    { name: 'Web Development Services', href: 'https://www.batterseawebexpert.com/web-development-services/' },
    { name: 'Social Media Marketing', href: 'https://www.batterseawebexpert.com/social-media-marketing/' },
    { name: 'Pay Per Click', href: 'https://www.batterseawebexpert.com/ppc-services/' },
    { name: 'Seo Services', href: 'https://www.batterseawebexpert.com/seo-services/' },
  ];

  const locationServices = [
    { name: 'Digital Marketing Agency in Delhi', href: 'https://www.batterseawebexpert.com/digital-marketing-agency-in-delhi/' },
    { name: 'Digital Marketing Agency in Chennai', href: 'https://www.batterseawebexpert.com/digital-marketing-agency-in-chennai/' },
    { name: 'Digital Marketing Agency in Hyderabad', href: 'https://www.batterseawebexpert.com/digital-marketing-agency-in-hyderabad/' },
    { name: 'Digital Marketing Agency in Mumbai', href: 'https://www.batterseawebexpert.com/digital-marketing-agency-in-mumbai/' },
    { name: 'Digital Marketing Agency in Bangalore', href: 'https://www.batterseawebexpert.com/digital-marketing-agency-in-bangalore/' },
  ];

  const socialLinks = [
    { name: 'Pinterest', icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/svgs/foot-icn-1-8.svg', href: '#' },
    { name: 'Twitter', icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/svgs/foot-icn-2-9.svg', href: '#' },
    { name: 'LinkedIn', icon: null, label: 'Linked In', href: '#' },
    { name: 'Facebook', icon: null, label: 'facebook', href: '#' },
    { name: 'Instagram', icon: null, label: 'Instagram', href: '#' },
    { name: 'YouTube', icon: null, label: 'YouTube', href: '#' },
  ];

  return (
    <footer className="bg-[#010915] text-white pt-[60px] font-sans border-t border-white/10">
      <div className="container mx-auto px-6 max-w-[1320px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Company Info Column */}
          <div className="flex flex-col gap-6">
            <div className="mb-2">
              <a href="https://www.batterseawebexpert.com/">
                <img 
                  src="https://www.batterseawebexpert.com/wp-content/uploads/2025/11/logo.webp" 
                  alt="Batterseawebexpert Logo" 
                  className="h-12 w-auto object-contain"
                />
              </a>
            </div>
            <div className="space-y-5">
              <div className="flex items-center gap-4 group">
                <div className="min-w-[40px] h-[40px] rounded-lg bg-[#0a1425] border border-white/5 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-black">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] text-muted-foreground uppercase tracking-wider font-semibold">Need live support?</span>
                  <a href="mailto:contact@batterseawebexpert.com" className="text-[15px] hover:text-primary transition-colors break-all">
                    contact@batterseawebexpert.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="min-w-[40px] h-[40px] rounded-lg bg-[#0a1425] border border-white/5 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-black">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] text-muted-foreground uppercase tracking-wider font-semibold">Call us anytime</span>
                  <a href="tel:+918826916476" className="text-[15px] hover:text-primary transition-colors">
                    +91 8826 916 476
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="min-w-[40px] h-[40px] rounded-lg bg-[#0a1425] border border-white/5 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-black shrink-0 mt-1">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] text-muted-foreground uppercase tracking-wider font-semibold">Company Address</span>
                  <p className="text-[15px] text-white/90 leading-relaxed">
                    C-1/18 A, C-block Rama Park, Dwarka Mor Metro Pillar No-771, New Delhi-110059
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Links Column */}
          <div>
            <h4 className="text-[20px] font-display font-bold mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-[2px] after:bg-primary">Company</h4>
            <ul className="flex flex-col gap-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[#a7adb9] hover:text-primary transition-colors text-[15px]">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services Column */}
          <div>
            <h4 className="text-[20px] font-display font-bold mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-[2px] after:bg-primary">Our Services</h4>
            <ul className="flex flex-col gap-4">
              {ourServices.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[#a7adb9] hover:text-primary transition-colors text-[15px]">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Based Services Column */}
          <div>
            <h4 className="text-[20px] font-display font-bold mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-[2px] after:bg-primary">Location Based Services</h4>
            <ul className="flex flex-col gap-4">
              {locationServices.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[#a7adb9] hover:text-primary transition-colors text-[15px]">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons Bar */}
        <div className="py-8 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14 w-full">
            {socialLinks.map((social) => (
              <a 
                key={social.name} 
                href={social.href} 
                className="flex items-center gap-2 group transition-all duration-300"
              >
                {social.icon ? (
                  <img src={social.icon} alt={social.name} className="w-5 h-5 group-hover:scale-110 transition-transform" />
                ) : (
                  <span className="text-[#a7adb9] group-hover:text-primary transition-colors">
                    {social.name === 'Facebook' && <Facebook size={20} />}
                    {social.name === 'Instagram' && <Instagram size={20} />}
                    {social.name === 'LinkedIn' && <Linkedin size={20} />}
                    {social.name === 'YouTube' && <Youtube size={20} />}
                    {social.name === 'Twitter' && <Twitter size={20} />}
                  </span>
                )}
                <span className="text-[#a7adb9] font-display font-semibold group-hover:text-white transition-colors capitalize">
                  {social.label || social.name.toLowerCase()}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#050d1a] py-6 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-[1320px] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-[14px] text-[#a7adb9]">
            Batterseawebexpert &copy; {currentYear} | All rights reserved
          </p>
          <div className="flex items-center gap-4 text-[13px] text-[#a7adb9]">
            <a href="#" className="hover:text-primary transition-colors underline-offset-4 hover:underline">Term and Conditions</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-primary transition-colors underline-offset-4 hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>

      {/* WhatsApp Fixed Button Placeholder (as seen in assets) */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/918826916476" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] p-3 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        >
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/svgs/WhatsApp-10.svg" 
            alt="WhatsApp" 
            width={32} 
            height={32} 
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;