"use client";

import { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Phone,
  Clock,
  MapPin,
  Award,
  Search,
  ImageIcon,
  TrendingUp,
  Palette,
  Smartphone,
  SearchCheck,
  Target,
  MessageCircle,
  Star,
  Check,
  ChevronRight,
  Send,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Menu,
  X,
} from "lucide-react";

/* ===== CONFIGURATION ===== */
const WHATSAPP_NUMBER = "917975218181";
const WHATSAPP_DISPLAY = "+91 79752 18181";
const CONTACT_NUMBER_1 = "7975218181";
const CONTACT_DISPLAY_1 = "+91 79752 18181";
const CONTACT_NUMBER_2 = "9148420797";
const CONTACT_DISPLAY_2 = "+91 91484 20797";
const EMAIL_PRIMARY = "arovidatechnologies@gmail.com";
const EMAIL_SECONDARY = "yakshithsaravu@arovida.org";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi, I'm interested in a website for my [Interior/Construction] business"
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

function trackConversion(type: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "conversion", {
      send_to: "AW-XXXXX/XXXXX",
      event_category: type,
    });
  }
}

/* ===== ANIMATION HOOK ===== */
function useReveal() {
  const ref = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    ref.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => {
      ref.current?.observe(el);
    });
    return () => ref.current?.disconnect();
  }, []);
}

/* ===== CLIENTS DATA ===== */
const clients = [
  { name: "WebSort", location: "Bangalore", logo: "/clients/websort.png" },
  { name: "Panchashree", location: "Ujire", logo: "/clients/panchashree.png" },
  { name: "Novastyles", location: "Bangalore", logo: "/clients/novastyles.png" },
  { name: "Premier Machineries", location: "Mangalore", logo: "/clients/premier-machineries.png" },
  { name: "The Event Studio", location: "Bangalore", logo: "/clients/the-event-studio.png" },
  { name: "XIPHIAS", location: "Dubai", logo: "/clients/xiphias.png" },
];

const portfolio = [
  {
    type: "Interior Design Firm",
    result: "50% increase in inquiries",
    color: "from-[#7d41ff] to-[#3b82f6]",
    url: "https://www.novastylesinterior.com/",
    thumbnail: "https://www.novastylesinterior.com/",
    description: "Professional website for interior and construction company",
  },
  {
    type: "Industrial Printing Machinery",
    result: "Ranked #1 on Google",
    color: "from-[#ff9c22] to-[#e74c3c]",
    url: "https://www.premiermachineries.com/",
    thumbnail: "https://www.premiermachineries.com/",
    description: "Industrial level printing machine dealer website - Mangalore",
  },
  {
    type: "Immigration Services",
    result: "Modern portfolio showcase",
    color: "from-[#3b82f6] to-[#7d41ff]",
    url: "https://www.xiphiasimmigration.com/",
    thumbnail: "https://www.xiphiasimmigration.com/",
    description: "Professional immigration consultancy website - Dubai",
  },
];

const features = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Beautiful Portfolio Showcase",
    desc: "Display your best work professionally with stunning galleries and project pages",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile-Optimized Design",
    desc: "80% of customers browse on phones — your site will look perfect on every device",
  },
  {
    icon: <SearchCheck className="w-6 h-6" />,
    title: "Google Ranking (SEO)",
    desc: "Get found when customers search for interior designers or construction companies",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Lead Capture System",
    desc: "Turn website visitors into paying clients with smart forms and CTAs",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "WhatsApp Integration",
    desc: "Instant communication with prospects — one tap to connect directly with you",
  },
];

const steps = [
  { num: "01", title: "Free Consultation", desc: "15-minute call to understand your needs and goals" },
  { num: "02", title: "Custom Proposal", desc: "Tailored plan and quote for your business" },
  { num: "03", title: "Design & Build", desc: "Professional website created in 21-30 days" },
  { num: "04", title: "Launch & Support", desc: "Go live with ongoing maintenance and support" },
];

const pricing = [
  {
    name: "Basic",
    price: "₹25,000",
    popular: false,
    features: ["5-page website", "Mobile responsive", "Basic SEO", "Contact forms", "30-day delivery"],
  },
  {
    name: "Standard",
    price: "₹40,000",
    popular: true,
    features: [
      "10-page website",
      "Advanced portfolio showcase",
      "SEO optimization",
      "Lead generation features",
      "WhatsApp integration",
      "25-day delivery",
    ],
  },
  {
    name: "Premium",
    price: "₹60,000+",
    popular: false,
    features: [
      "Unlimited pages",
      "Custom design",
      "Advanced SEO & Google Ads",
      "CRM integration",
      "Priority support",
      "21-day delivery",
    ],
  },
];

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const SERVICE_OPTIONS = [
    "Website Design",
    "Logo Design",
    "Digital Marketing",
    "Social Media Management",
    "Custom Software",
    "SEO",
    "E-Commerce",
    "Branding",
  ];

// Phone number validation function
function validatePhoneNumber(phone: string): { valid: boolean; error?: string } {
  // Remove all non-digit characters
  const digitsOnly = phone.replace(/\D/g, '');
  
  // Check if it's exactly 10 digits (Indian phone number)
  if (digitsOnly.length === 10) {
    // Check if it starts with 6, 7, 8, or 9 (valid Indian mobile number prefixes)
    if (/^[6-9]/.test(digitsOnly)) {
      return { valid: true };
    } else {
      return { valid: false, error: 'Phone number must start with 6, 7, 8, or 9' };
    }
  } else if (digitsOnly.length === 11 && digitsOnly.startsWith('0')) {
    // Handle numbers starting with 0 (like 0XXXXXXXXXX)
    const withoutZero = digitsOnly.substring(1);
    if (/^[6-9]/.test(withoutZero)) {
      return { valid: true };
    }
  } else if (digitsOnly.length === 12 && digitsOnly.startsWith('91')) {
    // Handle numbers with country code 91
    const withoutCountryCode = digitsOnly.substring(2);
    if (withoutCountryCode.length === 10 && /^[6-9]/.test(withoutCountryCode)) {
      return { valid: true };
    }
  }
  
  return { valid: false, error: 'Please enter a valid 10-digit Indian phone number' };
}

export default function Home() {
  const [heroFormSubmitted, setHeroFormSubmitted] = useState(false);
  const [footerFormSubmitted, setFooterFormSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState<{ hero?: string; footer?: string }>({});
  const [formError, setFormError] = useState<{ hero?: string; footer?: string }>({});
  useReveal();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>, formType: "hero" | "footer", conversionType: string = "form_submit") => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string || (form.querySelector('input[type="text"]') as HTMLInputElement)?.value || "";
    const phone = formData.get("phone") as string || (form.querySelector('input[type="tel"]') as HTMLInputElement)?.value || "";
    const businessType = formData.get("businessType") as string || (form.querySelector('select') as HTMLSelectElement)?.value || "";
    const service = formData.get("service") as string || (form.querySelectorAll('select')[1] as HTMLSelectElement)?.value || "";
    const message = (formData.get("message") as string | null) ?? (form.querySelector("textarea") as HTMLTextAreaElement | null)?.value ?? "";

    // Validate phone number
    const phoneValidation = validatePhoneNumber(phone);
    if (!phoneValidation.valid) {
      setPhoneError((prev) => ({ ...prev, [formType]: phoneValidation.error }));
      // Focus on phone input
      const phoneInput = form.querySelector('input[type="tel"]') as HTMLInputElement;
      if (phoneInput) {
        phoneInput.focus();
        phoneInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Clear any previous errors
    setPhoneError((prev) => ({ ...prev, [formType]: undefined }));
    setFormError((prev) => ({ ...prev, [formType]: undefined }));
    setIsSubmitting(true);
    trackConversion(conversionType);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          businessType,
          service,
          message,
          formType: formType === "hero" ? "Hero Form" : "Contact Form",
        }),
      });
      const data: { success?: boolean; message?: string; error?: string } | null = await response
        .json()
        .catch(() => null);

      if (response.ok && data?.success) {
        if (formType === "hero") {
          setHeroFormSubmitted(true);
        } else {
          setFooterFormSubmitted(true);
        }
        setFormError((prev) => ({ ...prev, [formType]: undefined }));
      } else {
        const errorMessage =
          data?.message ||
          data?.error ||
          "Something went wrong while submitting the form. Please try again.";

        console.error("Form submission error", { status: response.status, data });
        setFormError((prev) => ({ ...prev, [formType]: errorMessage }));
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormError((prev) => ({
        ...prev,
        [formType]: "Network error while submitting the form. Please check your connection and try again.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    trackConversion("whatsapp_click");
  };

  return (
    <>
      {/* ===== STRUCTURED DATA FOR SEO ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Arovida Technologies",
            "image": "https://arovidatechnologies.com/arovida-dark.png",
            "@id": "https://arovidatechnologies.com",
            "url": "https://arovidatechnologies.com",
            "telephone": "+917975218181",
            "priceRange": "₹₹",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Adyandka, Punacha Vittal",
              "addressLocality": "Mangalore",
              "addressRegion": "Karnataka",
              "postalCode": "574260",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 12.9141,
              "longitude": 74.8560
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://arovidatechnologies.com"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "26"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Arovida Technologies",
            "url": "https://arovidatechnologies.com",
            "logo": "https://arovidatechnologies.com/arovida-dark.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+917975218181",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["English", "Kannada", "Hindi"]
            },
            "sameAs": [
              "https://arovidatechnologies.com"
            ]
          })
        }}
      />
      {/* ===== NAVIGATION ===== */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.08)]" : "bg-transparent"}`}>
        <div className="container flex items-center justify-between h-[72px]">
              <a href="#" className="flex items-center">
                <img src="/arovida-dark.png" alt="Arovida Technologies - Digital Agency in Mangalore" className="h-12 md:h-14 w-auto object-contain" loading="eager" width="120" height="56" />
              </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${CONTACT_DISPLAY_1.replace(/\s/g, "")}`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
              <Phone size={15} />
              {CONTACT_DISPLAY_1}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-semibold font-display flex items-center gap-2 hover:bg-[#20bd5a] transition-colors"
              onClick={handleWhatsAppClick}
            >
              Free Consultation
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-border">
            <div className="container py-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-5 py-3 rounded-full text-sm font-semibold font-display flex items-center justify-center gap-2 mt-2"
                onClick={handleWhatsAppClick}
              >
                Free Consultation
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden pt-[100px] pb-0 lg:pt-[120px]">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-glow-purple opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-glow-blue opacity-30 pointer-events-none" />

        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left: Content */}
            <div className="w-full lg:w-7/12">
              {/* Ribbons */}
              <div className="flex items-center -space-x-3 mb-6" data-reveal>
                <span className="bg-primary text-white px-5 py-1.5 rounded-full font-display font-semibold text-sm rotate-[-2deg] z-10 shadow-lg">
                    Interior Designers
                  </span>
                    <span className="bg-primary/80 text-white px-5 py-1.5 rounded-full font-display font-semibold text-sm rotate-[2deg] shadow-lg">
                    & Construction Companies
                  </span>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-muted border border-border px-4 py-2 rounded-full text-sm mb-6" data-reveal>
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-muted-foreground font-medium">Based in Mangalore &bull; 5 Years Experience</span>
              </div>

              <h1 className="mb-6" data-reveal>
                Get <span className="text-gradient-orange">3X More Projects</span> with a Professional{" "}
                <span className="text-gradient-orange">Website</span>
              </h1>

              <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-[560px] leading-relaxed" data-reveal>
                Trusted by 26+ businesses across Mangalore, Bangalore &amp; Dubai. We build websites that actually bring in customers.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-8" data-reveal>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill bg-[#25D366] text-white flex items-center gap-2.5 shadow-[0_8px_24px_-6px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_32px_-4px_rgba(37,211,102,0.45)] text-base"
                  onClick={handleWhatsAppClick}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Get Free Consultation on WhatsApp
                </a>
                <a
                  href="#portfolio"
                  className="btn-pill bg-primary text-white flex items-center gap-2 hover:bg-primary/90"
                >
                  View Our Work
                  <ArrowUpRight size={16} />
                </a>
              </div>

              {/* Trust badges row */}
                <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border" data-reveal>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    Response within 30 min
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    Based in Mangalore
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Award className="w-4 h-4 text-muted-foreground" />
                    5 Years Experience
                  </div>
                </div>
            </div>

            {/* Right: Lead Form */}
            <div className="w-full lg:w-5/12" data-reveal>
                <div className="glass-card p-8 rounded-[24px] relative">
                  {!heroFormSubmitted ? (
                    <>
                      <h3 className="text-xl font-bold font-display mb-1">Get Your Free Consultation</h3>
                      <p className="text-muted-foreground text-sm mb-6">Fill in your details and we&apos;ll get back to you</p>
                      <form className="space-y-4" onSubmit={(e) => handleFormSubmit(e, "hero", "hero_form")}>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input type="text" name="name" placeholder="Your Name" required className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm" />
                            <div>
                              <input 
                                type="tel" 
                                name="phone" 
                                placeholder="Phone (10 digits)" 
                                required 
                                maxLength={10}
                                pattern="[6-9][0-9]{9}"
                                className={`w-full bg-muted border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 transition-all text-sm ${
                                  phoneError.hero ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-primary'
                                }`}
                                onChange={(e) => {
                                  // Only allow digits
                                  const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                                  e.target.value = value;
                                  // Clear error when user starts typing
                                  if (phoneError.hero) {
                                    setPhoneError({ hero: undefined });
                                  }
                                }}
                              />
                              {phoneError.hero && (
                                <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                                  <span>⚠</span> {phoneError.hero}
                                </p>
                              )}
                              {!phoneError.hero && (
                                <p className="text-muted-foreground text-xs mt-1">10-digit mobile number</p>
                              )}
                            </div>
                          </div>
                          <div>
                            <select name="businessType" className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer text-sm">
                              <option value="">Select your business type</option>
                              <option>Interior Designer</option>
                              <option>Construction Company</option>
                              <option>Architecture Firm</option>
                              <option>Real Estate</option>
                              <option>Other</option>
                            </select>
                          </div>
                          <div>
                            <select name="service" className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer text-sm">
                              <option value="">What service do you need?</option>
                              {SERVICE_OPTIONS.map((service) => (
                                <option key={service} value={service}>{service}</option>
                              ))}
                            </select>
                          </div>
                        <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white py-3.5 rounded-lg font-bold font-display flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg text-base disabled:opacity-50 disabled:cursor-not-allowed">
                          {isSubmitting ? "Submitting..." : "Get Free Quote"}
                          <ArrowUpRight size={18} />
                        </button>
                        {formError.hero && (
                          <p className="text-red-500 text-xs mt-2 text-center">{formError.hero}</p>
                        )}
                      </form>
                      <p className="text-center text-muted-foreground text-xs mt-4">We&apos;ll respond within 30 minutes</p>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Thanks! We&apos;ll contact you within 30 minutes</h3>
                      <p className="text-muted-foreground text-sm mb-6">Or chat with us right now on WhatsApp for a faster response</p>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-pill bg-[#25D366] text-white inline-flex items-center gap-2 shadow-lg"
                        onClick={handleWhatsAppClick}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        Chat on WhatsApp Now
                      </a>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar — inside hero, no scroll needed */}
        <div className="mt-12 bg-[#0C1A78]">
          <div className="container py-7">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center md:text-left">
                  <div className="text-2xl md:text-4xl font-extrabold text-white font-display">26+</div>
                <div className="text-white/60 text-sm uppercase tracking-wider font-semibold">Clients Served</div>
              </div>
              <div className="text-center md:text-left md:border-l md:border-white/15 md:pl-8">
                <div className="text-2xl md:text-4xl font-extrabold text-white font-display">5+</div>
                <div className="text-white/60 text-sm uppercase tracking-wider font-semibold">Years Experience</div>
              </div>
              <div className="text-center md:text-left md:border-l md:border-white/15 md:pl-8">
                <div className="text-2xl md:text-4xl font-extrabold text-white font-display">3</div>
                <div className="text-white/60 text-sm uppercase tracking-wider font-semibold">Cities Covered</div>
              </div>
              <div className="text-center md:text-left md:border-l md:border-white/15 md:pl-8">
                <div className="flex items-center justify-center md:justify-start gap-1 mb-1">
                  <span className="text-2xl md:text-4xl font-extrabold text-white font-display">4.9</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#ff9c22" stroke="#ff9c22" />
                  ))}
                  <span className="text-white/50 text-xs ml-1">Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-glow-purple opacity-30 pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4" data-reveal>
                <span className="h-[1px] w-8 bg-border" />
                <span className="text-muted-foreground font-display font-semibold tracking-wider text-sm uppercase">The Problem</span>
                <span className="h-[1px] w-8 bg-border" />
              </div>
              <h2 data-reveal>Are You <span className="text-gradient-orange">Losing Projects</span> to Competitors?</h2>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Search className="w-7 h-7" />, text: "Customers can't find you when they search on Google" },
                { icon: <ImageIcon className="w-7 h-7" />, text: "No professional way to showcase your portfolio online" },
                { icon: <TrendingUp className="w-7 h-7" />, text: "Missing out on high-value projects because of poor online presence" },
            ].map((item, i) => (
              <div key={i} className="group bg-card rounded-xl border border-border p-8 text-center hover:border-foreground/20 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg" data-reveal>
                  <div className="w-16 h-16 bg-foreground/5 rounded-xl flex items-center justify-center mx-auto mb-6 text-foreground/60 group-hover:bg-foreground/10 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold">{item.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOLUTION / FEATURES ===== */}
      <section id="services" className="section-padding relative overflow-hidden bg-card">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-glow-blue opacity-40 pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4" data-reveal>
                <span className="h-[1px] w-8 bg-border" />
                <span className="text-muted-foreground font-display font-semibold tracking-wider text-sm uppercase">Our Solution</span>
                <span className="h-[1px] w-8 bg-border" />
              </div>
              <h2 data-reveal>Professional Websites That <span className="text-gradient-orange">Actually Bring</span> in Customers</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f, i) => (
                <div key={i} className="group relative bg-white rounded-xl border border-border p-8 hover:border-foreground/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden hover:shadow-lg" data-reveal>
                  <div className="absolute top-4 right-6 text-5xl font-black text-foreground/5 font-display select-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="w-14 h-14 bg-foreground/5 rounded-lg flex items-center justify-center mb-6 text-foreground/60 group-hover:bg-foreground/10 transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-6 px-6">
        <div className="container">
          <div className="relative overflow-hidden rounded-[20px] bg-[#0C1A78] px-8 py-10 md:px-14 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8" data-reveal>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_right,_rgba(125,65,255,0.15),transparent)] pointer-events-none" />
            <div className="relative z-10 max-w-lg">
                <span className="text-white/70 text-sm font-bold tracking-widest uppercase mb-3 block">// Get In Touch</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Grow Your <span className="text-[#25D366]">Interior Business</span> Online?
                </h2>
                <p className="text-white/70 text-sm leading-relaxed">
                Limited slots available this month. Book your free consultation and let&apos;s build your digital presence.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill bg-[#25D366] text-white flex items-center gap-2.5 shadow-lg whitespace-nowrap relative z-10"
              onClick={handleWhatsAppClick}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat With Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ===== SOCIAL PROOF - CLIENTS ===== */}
      <section className="section-padding relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4" data-reveal>
                <span className="h-[1px] w-8 bg-border" />
                <span className="text-muted-foreground font-display font-semibold tracking-wider text-sm uppercase">Social Proof</span>
                <span className="h-[1px] w-8 bg-border" />
              </div>
              <h2 data-reveal>Trusted by <span className="text-gradient-orange">26+ Businesses</span></h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto" data-reveal>
              From Mangalore to Dubai — businesses trust us to build their digital presence
            </p>
          </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5 md:gap-6">
                      {clients.map((client, i) => (
                        <div key={i} className="group bg-card rounded-xl border border-border px-6 py-8 flex flex-col items-center justify-center text-center hover:border-foreground/20 transition-all duration-300 hover:shadow-md min-h-[120px]" data-reveal>
                          {client.logo ? (
                            <img src={client.logo} alt={`${client.name} logo`} className="h-10 md:h-12 w-auto object-contain max-w-[180px] grayscale group-hover:grayscale-0 transition-all" loading="lazy" />
                          ) : (
                            <span className="text-lg md:text-xl font-bold font-display text-foreground/80 tracking-tight leading-tight group-hover:text-foreground transition-colors">{client.name}</span>
                          )}
                          <span className="flex items-center gap-1 text-muted-foreground text-[11px] mt-3">
                            <MapPin className="w-3 h-3" /> {client.location}
                          </span>
                      </div>
                    ))}
                  </div>
        </div>
      </section>

      {/* ===== PORTFOLIO ===== */}
      <section id="portfolio" className="section-padding relative overflow-hidden bg-card">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-glow-purple opacity-30 pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4" data-reveal>
                <span className="h-[1px] w-8 bg-border" />
                <span className="text-muted-foreground font-display font-semibold tracking-wider text-sm uppercase">Our Work</span>
                <span className="h-[1px] w-8 bg-border" />
              </div>
              <h2 data-reveal>Websites <span className="text-gradient-orange">We&apos;ve Built</span></h2>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portfolio.map((item, i) => (
              <a 
                key={i} 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white rounded-xl border border-border overflow-hidden hover:border-foreground/20 transition-all duration-300 hover:shadow-lg block" 
                data-reveal
              >
                <div className={`h-48 bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden`}>
                  {/* Website Thumbnail using screenshot service */}
                  <img 
                    src={`https://image.thum.io/get/width/800/crop/600/${item.url}`}
                    alt={`${item.type} website preview`}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback: hide image and show gradient
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  {/* Gradient overlay for better text readability */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-30 group-hover:opacity-20 transition-opacity pointer-events-none`} />
                  {/* Website browser mockup overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-24 h-16 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center p-2">
                      <div className="w-full flex gap-1 mb-2">
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                      </div>
                      <div className="w-16 h-1 bg-white/20 rounded-full" />
                    </div>
                  </div>
                  {/* Result badge */}
                  <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold flex items-center gap-1.5 z-10">
                    <TrendingUp className="w-3 h-3" /> {item.result}
                  </div>
                  {/* Visit website badge */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm text-foreground text-xs px-3 py-1.5 rounded-full font-semibold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-lg">
                    Visit Website
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-base mb-2 group-hover:text-primary transition-colors">Built for {item.type}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
                  <span className="text-xs text-primary font-medium flex items-center gap-1">
                    View Live Site
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="process" className="section-padding relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4" data-reveal>
                <span className="h-[1px] w-8 bg-border" />
                <span className="text-muted-foreground font-display font-semibold tracking-wider text-sm uppercase">Process</span>
                <span className="h-[1px] w-8 bg-border" />
              </div>
              <h2 data-reveal>Get Your Website in <span className="text-gradient-orange">30 Days</span></h2>
          </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, i) => (
              <div key={i} className="relative bg-card rounded-xl border border-border p-8 text-center group hover:border-foreground/20 transition-all duration-300 hover:shadow-md" data-reveal>
                  <div className="text-5xl font-black text-foreground/5 font-display mb-4">{step.num}</div>
                  <h3 className="font-display font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 z-10">
                    <ChevronRight className="w-6 h-6 text-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" className="section-padding relative overflow-hidden bg-card">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-glow-blue opacity-30 pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4" data-reveal>
                <span className="h-[1px] w-8 bg-border" />
                <span className="text-muted-foreground font-display font-semibold tracking-wider text-sm uppercase">Pricing</span>
                <span className="h-[1px] w-8 bg-border" />
              </div>
              <h2 data-reveal><span className="text-gradient-orange">Transparent</span> Pricing</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto" data-reveal>
              No hidden costs. Choose the plan that fits your business.
            </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, i) => (
                <div key={i} className={`relative bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${plan.popular ? "border-2 border-primary shadow-[0_0_40px_-12px_rgba(12,26,120,0.15)]" : "border border-border"}`} data-reveal>
                {plan.popular && (
                  <div className="bg-primary text-white text-xs font-bold font-display text-center py-2 tracking-wider uppercase">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="font-display font-bold text-xl mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-3xl md:text-4xl font-extrabold font-display">{plan.price}</span>
                    <span className="text-muted-foreground text-sm ml-2">one-time</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feat, j) => (
                        <li key={j} className="flex items-center gap-3 text-sm">
                          <div className="w-5 h-5 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-foreground/50" />
                          </div>
                        <span className="text-foreground/80">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-lg font-bold font-display flex items-center justify-center gap-2 transition-all text-sm ${plan.popular ? "bg-primary text-white hover:bg-primary/90" : "bg-[#1a1a2e] text-white hover:bg-[#1a1a2e]/90"}`}
                    onClick={handleWhatsAppClick}
                  >
                    Get Started
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="section-padding relative overflow-hidden" id="contact">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-glow-purple opacity-40 pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center mb-14">
              <h2 data-reveal>Ready to Get More <span className="text-gradient-orange">Projects Online?</span></h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto" data-reveal>
              Limited slots available this month — Book your free consultation now
            </p>

            <div className="mt-8" data-reveal>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill bg-[#25D366] text-white inline-flex items-center gap-2.5 shadow-[0_8px_24px_-6px_rgba(37,211,102,0.35)] text-base"
                onClick={handleWhatsAppClick}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Get Free Consultation on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-lg mx-auto" data-reveal>
            <div className="glass-card p-8 rounded-[20px]">
              {!footerFormSubmitted ? (
                <form onSubmit={(e) => handleFormSubmit(e, "footer", "form_submit")} className="space-y-5">
                  <div>
                    <label className="text-foreground text-sm font-semibold mb-1.5 block">Name <span className="text-red-500">*</span></label>
                    <input type="text" name="name" placeholder="Your full name" required className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm" />
                  </div>
                  <div>
                    <label className="text-foreground text-sm font-semibold mb-1.5 block">Phone <span className="text-red-500">*</span></label>
                    <div>
                      <input 
                        type="tel" 
                        name="phone" 
                        placeholder="Your phone number (10 digits)" 
                        required 
                        maxLength={10}
                        pattern="[6-9][0-9]{9}"
                        className={`w-full bg-muted border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 transition-all text-sm ${
                          phoneError.footer ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-primary'
                        }`}
                        onChange={(e) => {
                          // Only allow digits
                          const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                          e.target.value = value;
                          // Clear error when user starts typing
                          if (phoneError.footer) {
                                setPhoneError({ footer: undefined });
                              }
                        }}
                      />
                      {phoneError.footer && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                          <span>⚠</span> {phoneError.footer}
                        </p>
                      )}
                      <p className="text-muted-foreground text-xs mt-1">Enter 10-digit Indian mobile number</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-foreground text-sm font-semibold mb-1.5 block">Business Type</label>
                    <select name="businessType" className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer text-sm">
                      <option value="">Select your business type</option>
                      <option>Interior Designer</option>
                      <option>Construction Company</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-foreground text-sm font-semibold mb-1.5 block">Message (optional)</label>
                    <textarea name="message" placeholder="Tell us about your project..." rows={3} className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm resize-none" />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white py-3.5 rounded-lg font-bold font-display flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg text-base disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send size={16} />
                  </button>
                  {formError.footer && (
                    <p className="text-red-500 text-xs mt-2 text-center">{formError.footer}</p>
                  )}
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Thanks! We&apos;ll contact you within 30 minutes</h3>
                  <p className="text-muted-foreground text-sm mb-6">Or chat with us right now on WhatsApp for a faster response</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill bg-[#25D366] text-white inline-flex items-center gap-2 shadow-lg"
                    onClick={handleWhatsAppClick}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Chat on WhatsApp Now
                  </a>
                </div>
              )}
            </div>
            <p className="text-center text-muted-foreground mt-6 text-sm" data-reveal>
              Or call us directly:{" "}
                <a href={`tel:${CONTACT_DISPLAY_1.replace(/\s/g, "")}`} className="text-foreground font-semibold hover:underline" onClick={() => trackConversion("phone_click")}>
                {CONTACT_DISPLAY_1}
              </a>
              {" or "}
              <a href={`tel:${CONTACT_DISPLAY_2.replace(/\s/g, "")}`} className="text-foreground font-semibold hover:underline" onClick={() => trackConversion("phone_click")}>
                {CONTACT_DISPLAY_2}
              </a>
            </p>
          </div>
        </div>
      </section>

        {/* ===== FOOTER ===== */}
        <footer className="bg-[#0C1A78] text-white pt-14 pb-6">
          <div className="container">
            {/* Trust bar */}
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 pb-10 mb-10 border-b border-white/15">
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Check className="w-4 h-4 text-[#25D366]" />
                5+ Years in Business
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Check className="w-4 h-4 text-[#25D366]" />
                26+ Clients Served
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Check className="w-4 h-4 text-[#25D366]" />
                4.9 Star Rating
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Check className="w-4 h-4 text-[#25D366]" />
                30 Min Response Time
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
              <div className="md:col-span-1">
                    <img src="/arovida-light.png" alt="Arovida Technologies - Digital Agency in Mangalore" className="h-12 w-auto mb-5 object-contain" loading="lazy" width="120" height="56" />
                <p className="text-white/60 text-sm mb-6 leading-relaxed">Professional websites for interior designers &amp; construction companies. Built to get you more projects.</p>
                <div className="flex items-center gap-3">
                  {[
                    { icon: <Facebook size={16} />, label: "Facebook" },
                    { icon: <Instagram size={16} />, label: "Instagram" },
                    { icon: <Linkedin size={16} />, label: "LinkedIn" },
                    { icon: <Twitter size={16} />, label: "Twitter" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href="#"
                      aria-label={social.label}
                      className="w-9 h-9 bg-white/10 border border-white/15 rounded-lg flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-white font-display font-bold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
                <ul className="space-y-3">
                  {["Services", "Portfolio", "Process", "Pricing", "Contact"].map((link) => (
                    <li key={link}>
                      <a href={`#${link.toLowerCase()}`} className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2">
                        <ChevronRight className="w-3 h-3" /> {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-display font-bold mb-5 text-sm uppercase tracking-wider">Services</h4>
                <ul className="space-y-3">
                  {["Website Design", "Logo Design", "SEO", "Digital Marketing", "E-Commerce"].map((service) => (
                    <li key={service}>
                      <a href="#services" className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2">
                        <ChevronRight className="w-3 h-3" /> {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-display font-bold mb-5 text-sm uppercase tracking-wider">Contact Us</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-sm text-white/60">
                    <MapPin className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" />
                    Adyandka, Punacha Vittal DK,<br />Karnataka 574260
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <Mail className="w-4 h-4 text-white/40 flex-shrink-0" />
                    <a href={`mailto:${EMAIL_PRIMARY}`} className="hover:text-white transition-colors">{EMAIL_PRIMARY}</a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <Mail className="w-4 h-4 text-white/40 flex-shrink-0" />
                    <a href={`mailto:${EMAIL_SECONDARY}`} className="hover:text-white transition-colors">{EMAIL_SECONDARY}</a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <Phone className="w-4 h-4 text-white/40 flex-shrink-0" />
                    <a href={`tel:${CONTACT_DISPLAY_1.replace(/\s/g, "")}`} className="hover:text-white transition-colors">{CONTACT_DISPLAY_1}</a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <Phone className="w-4 h-4 text-white/40 flex-shrink-0" />
                    <a href={`tel:${CONTACT_DISPLAY_2.replace(/\s/g, "")}`} className="hover:text-white transition-colors">{CONTACT_DISPLAY_2}</a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <ArrowUpRight className="w-4 h-4 text-white/40 flex-shrink-0" />
                    <a href="https://arovidatechnologies.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">arovidatechnologies.com</a>
                  </div>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-[#20bd5a] transition-colors mt-2"
                    onClick={handleWhatsAppClick}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-white/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/50 text-sm">&copy; 2026 Arovida. All rights reserved.</p>
              <p className="text-white/40 text-xs">Designed &amp; built with care in Mangalore, India</p>
            </div>
          </div>
        </footer>

      {/* ===== FLOATING WHATSAPP (Mobile) ===== */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/90 backdrop-blur-md border-t border-border lg:hidden">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 bg-[#25D366] text-white rounded-xl font-bold font-display flex items-center justify-center gap-2.5 shadow-[0_-4px_20px_-4px_rgba(37,211,102,0.2)] text-base"
          onClick={handleWhatsAppClick}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          WhatsApp Us Now
        </a>
      </div>
    </>
  );
}
