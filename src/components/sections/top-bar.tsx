import React from "react";
import { Mail, Phone, X } from "lucide-react";

/**
 * TopBar Component
 * 
 * A dual-layered top bar:
 * 1. Primary Notification Banner: Features an award message and a close button.
 * 2. Secondary Top Bar: Contains contact information and quick links.
 */
const TopBar = () => {
  return (
    <div className="w-full">
      {/* Primary Notification Banner */}
      <div className="bg-[#ff9c22] py-[10px] relative flex justify-center items-center px-4 md:px-6">
        <p className="text-[#010915] font-display font-semibold text-[14px] md:text-[15px] text-center mb-0">
          🏆 We Won The Best SEO Agency of the Year in 2025
        </p>
        <button 
          className="absolute right-4 md:right-8 lg:right-12 cursor-pointer transition-opacity hover:opacity-70"
          aria-label="Close notification"
        >
          <X className="w-5 h-5 text-[#010915]" />
        </button>
      </div>

      {/* Secondary Top Bar */}
      <div className="bg-[#010915] border-b border-white/10 py-[12px]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 px-6 max-w-[1320px]">
          {/* Contact Info Leads (Left) */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-8">
            <a 
              href="mailto:contact@batterseawebexpert.com" 
              className="flex items-center gap-2 text-[#a7adb9] hover:text-[#ff9c22] transition-colors text-[14px] leading-tight font-sans"
            >
              <span className="text-[#ff9c22]">
                <Mail className="w-4 h-4" />
              </span>
              contact@batterseawebexpert.com
            </a>
            <a 
              href="tel:+918826916476" 
              className="flex items-center gap-2 text-[#a7adb9] hover:text-[#ff9c22] transition-colors text-[14px] leading-tight font-sans"
            >
              <span className="text-[#ff9c22]">
                <Phone className="w-4 h-4" />
              </span>
              +91 8826 916 476
            </a>
          </div>

          {/* Quick Links (Right) */}
          <ul className="flex items-center gap-6 md:gap-8 list-none p-0 m-0">
            <li>
              <a 
                href="https://www.batterseawebexpert.com/about/" 
                className="text-[#a7adb9] hover:text-[#ff9c22] transition-colors text-[14px] font-medium font-sans no-underline"
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="https://www.batterseawebexpert.com/contact/" 
                className="text-[#a7adb9] hover:text-[#ff9c22] transition-colors text-[14px] font-medium font-sans no-underline"
              >
                Reach Us
              </a>
            </li>
            <li>
              <a 
                href="https://www.batterseawebexpert.com/blog/" 
                className="text-[#a7adb9] hover:text-[#ff9c22] transition-colors text-[14px] font-medium font-sans no-underline"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;