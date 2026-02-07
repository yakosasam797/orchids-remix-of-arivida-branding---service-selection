import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Mail, Phone, Menu, X, ArrowUpRight, Send } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const digitalServices = [
    { name: "SEO Services", href: "https://www.batterseawebexpert.com/seo-services/" },
    { name: "Local SEO Service", href: "https://www.batterseawebexpert.com/local-seo-services/" },
    { name: "Video SEO Services", href: "https://www.batterseawebexpert.com/video-seo-services/" },
    { name: "Mobile SEO Services", href: "https://www.batterseawebexpert.com/mobile-seo-optimization/" },
    { name: "Digital Marketing Services", href: "https://www.batterseawebexpert.com/digital-marketing-services/" },
    { name: "Content Marketing Services", href: "https://www.batterseawebexpert.com/content-marketing-services/" },
    { name: "Email Marketing Services", href: "https://www.batterseawebexpert.com/email-marketing-services/" },
    { name: "Link Building", href: "https://www.batterseawebexpert.com/link-building-services/" },
    { name: "SMO Service", href: "https://www.batterseawebexpert.com/social-media-services/" },
    { name: "SMM", href: "https://www.batterseawebexpert.com/social-media-marketing/" },
    { name: "PPC Services", href: "https://www.batterseawebexpert.com/ppc-services/" },
  ];

  const websiteServices = [
    { name: "Web Design Services", href: "https://www.batterseawebexpert.com/web-design-services/" },
    { name: "Web Design In Delhi", href: "https://www.batterseawebexpert.com/website-designing-company-in-delhi" },
    { name: "Web Development Services", href: "https://www.batterseawebexpert.com/web-development-services/" },
    { name: "Web Development In Delhi", href: "https://www.batterseawebexpert.com/website-development-company-in-delhi/" },
  ];

  const packages = [
    { name: "SEO Packages", href: "https://www.batterseawebexpert.com/seo-packages/" },
    { name: "Local SEO Packages", href: "https://www.batterseawebexpert.com/local-seo-packages/" },
    { name: "Digital Marketing Packages", href: "https://www.batterseawebexpert.com/digital-marketing-packages/" },
    { name: "Website Development Packages", href: "https://www.batterseawebexpert.com/website-development-packages/" },
    { name: "Social Media Marketing Packages", href: "https://www.batterseawebexpert.com/smm-packages/" },
    { name: "Social Media Optimization Packages", href: "https://www.batterseawebexpert.com/social-media-optimization-packages/" },
    { name: "PPC Packages", href: "https://www.batterseawebexpert.com/ppc-packages/" },
  ];

  return (
    <header className="w-full relative z-[100]">
      {/* Top Banner (Won Award) */}
      <div className="bg-[#ff9c22] py-2.5 text-center text-[#010915] font-semibold text-sm">
        <div className="container flex items-center justify-center gap-2">
          <span>🏆 We Won The Best SEO Agency of the Year in 2025</span>
        </div>
      </div>

      {/* Secondary Top Bar (Contact Info) */}
      <div className="bg-[#050d1a] border-b border-white/10 hidden md:block">
        <div className="container flex items-center justify-between py-2 text-xs font-medium text-muted-foreground">
          <div className="flex items-center gap-6">
            <a href="mailto:contact@batterseawebexpert.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={14} className="text-[#ff9c22]" />
              contact@batterseawebexpert.com
            </a>
            <a href="tel:+918826916476" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={14} className="text-[#ff9c22]" />
              +91 8826 916 476
            </a>
          </div>
          <ul className="flex items-center gap-6">
            <li><a href="https://www.batterseawebexpert.com/about/" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="https://www.batterseawebexpert.com/contact/" className="hover:text-white transition-colors">Reach Us</a></li>
            <li><a href="https://www.batterseawebexpert.com/blog/" className="hover:text-white transition-colors">Blog</a></li>
          </ul>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className={`sticky top-0 w-full transition-all duration-300 ${isScrolled ? "bg-[#010915]/95 backdrop-blur-md shadow-lg" : "bg-[#010915]"}`}>
        <div className="container h-[90px] flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="https://www.batterseawebexpert.com/">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/logo-1.webp" 
                alt="Battersea Web Expert Logo" 
                className="h-[50px] w-auto object-contain"
              />
            </a>
          </div>

          {/* Nav Menu */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center gap-8">
              {/* Mega Menu - Digital Services */}
              <li className="group relative py-4">
                <button className="flex items-center gap-1.5 text-[15px] font-semibold text-white hover:text-[#ff9c22] transition-colors uppercase tracking-wider">
                  Digital Services
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-1/2 -translate-x-1/2 w-[900px] mt-2 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-[#0a1425] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex">
                    <div className="flex-1 p-8 grid grid-cols-2 gap-x-8 gap-y-3">
                      {digitalServices.map((service, idx) => (
                        <a 
                          key={idx} 
                          href={service.href} 
                          className="text-[#a7adb9] hover:text-white text-sm font-medium py-1 transition-colors border-b border-transparent hover:border-[#ff9c22]/30"
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                    {/* Mega Menu CTA Column */}
                    <div className="w-[340px] bg-[#050d1a] border-l border-white/10 p-8 flex flex-col justify-between">
                      <div>
                        <p className="text-white font-bold text-lg mb-4 leading-tight">
                          190% Growth in Traffic – Explore Our Digital Report Card for FY25
                        </p>
                        <a 
                          href="https://www.batterseawebexpert.com/contact/" 
                          className="inline-flex items-center gap-2 bg-[#ff9c22] text-[#010915] px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform"
                        >
                          Book Consultation
                          <Send size={14} />
                        </a>
                      </div>
                      <div className="mt-6">
                        <img 
                          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/header-cta-img-2.webp" 
                          alt="header CTA" 
                          className="rounded-lg object-cover w-full h-[120px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Dropdown - Website Services */}
              <li className="group relative py-4">
                <button className="flex items-center gap-1.5 text-[15px] font-semibold text-white hover:text-[#ff9c22] transition-colors uppercase tracking-wider">
                  Website Services
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 w-[260px] mt-2 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ul className="bg-[#0a1425] border border-white/10 rounded-lg shadow-xl py-4">
                    {websiteServices.map((service, idx) => (
                      <li key={idx}>
                        <a href={service.href} className="block px-6 py-2.5 text-sm text-[#a7adb9] hover:text-white hover:bg-white/5 transition-all">
                          {service.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              {/* Dropdown - Packages */}
              <li className="group relative py-4">
                <button className="flex items-center gap-1.5 text-[15px] font-semibold text-white hover:text-[#ff9c22] transition-colors uppercase tracking-wider">
                  Packages
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 w-[280px] mt-2 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ul className="bg-[#0a1425] border border-white/10 rounded-lg shadow-xl py-4 max-h-[400px] overflow-y-auto">
                    {packages.map((pkg, idx) => (
                      <li key={idx}>
                        <a href={pkg.href} className="block px-6 py-2.5 text-sm text-[#a7adb9] hover:text-white hover:bg-white/5 transition-all">
                          {pkg.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li><a href="https://www.batterseawebexpert.com/portfolio/" className="text-[15px] font-semibold text-white hover:text-[#ff9c22] transition-colors uppercase tracking-wider">Portfolio</a></li>
              <li><a href="https://www.batterseawebexpert.com/career/" className="text-[15px] font-semibold text-white hover:text-[#ff9c22] transition-colors uppercase tracking-wider">Career</a></li>
            </ul>
          </nav>

          {/* CTA Header Right */}
          <div className="flex items-center gap-4">
            <a 
              href="https://www.batterseawebexpert.com/contact/" 
              className="hidden sm:flex items-center gap-3 bg-[#ff9c22] text-[#010915] px-7 py-3 rounded-full font-bold text-[15px] hover:scale-105 active:scale-95 transition-all shadow-[0_8px_20px_-5px_rgba(255,156,34,0.4)]"
            >
              Schedule A Meeting
              <ArrowUpRight size={18} />
            </a>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden p-2 text-white bg-white/5 rounded-lg border border-white/10"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 bg-[#010915] z-[200] transform transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full bg-[#010915]">
          <div className="p-6 flex items-center justify-between border-b border-white/10">
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2ba90f18-deae-4c43-916e-6320c79d236f-batterseawebexpert-com/assets/images/logo-1.webp" 
              alt="Logo" 
              className="h-[40px] w-auto"
            />
            <button 
              className="p-2 text-white bg-white/5 rounded-lg border border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6">
            <nav className="flex flex-col gap-6">
              <div className="space-y-4">
                <p className="text-[10px] uppercase font-bold text-[#ff9c22] tracking-widest">Main Menu</p>
                <div className="flex flex-col gap-4">
                  <a href="#" className="text-xl font-bold text-white flex items-center justify-between">Digital Services <ChevronDown size={18} /></a>
                  <a href="#" className="text-xl font-bold text-white flex items-center justify-between">Website Services <ChevronDown size={18} /></a>
                  <a href="#" className="text-xl font-bold text-white flex items-center justify-between">Packages <ChevronDown size={18} /></a>
                  <a href="https://www.batterseawebexpert.com/portfolio/" className="text-xl font-bold text-white">Portfolio</a>
                  <a href="https://www.batterseawebexpert.com/career/" className="text-xl font-bold text-white">Career</a>
                </div>
              </div>
              
              <div className="pt-8 space-y-4 border-t border-white/10">
                <a 
                  href="https://www.batterseawebexpert.com/contact/" 
                  className="flex items-center justify-center gap-3 bg-[#ff9c22] text-[#010915] w-full py-4 rounded-xl font-bold text-lg"
                >
                  Schedule A Meeting
                  <ArrowUpRight size={20} />
                </a>
                <div className="flex flex-col gap-3">
                  <a href="tel:+918826916476" className="flex items-center gap-3 text-muted-foreground font-medium">
                    <Phone size={18} className="text-[#ff9c22]" /> +91 8826 916 476
                  </a>
                  <a href="mailto:contact@batterseawebexpert.com" className="flex items-center gap-3 text-muted-foreground font-medium text-sm">
                    <Mail size={18} className="text-[#ff9c22]" /> contact@batterseawebexpert.com
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;