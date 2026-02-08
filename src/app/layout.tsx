import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Arovida Technologies | Professional Websites for Interior Designers & Construction Companies | Mangalore, Puttur, Vitla",
  description: "Arovida Technologies - Get 3X more projects with a professional website. Trusted by 26+ Mangalore businesses. Portfolio showcase, SEO, lead generation. Free consultation. Digital agency in Mangalore, Puttur, Vitla.",
  keywords: "arovida, arovida technologies, arovida website agency, arovida tech, arovida mangalore, arovida puttur, arovida vitla, digital agency in mangalore, interior designer website, construction company website mangalore, web development mangalore, website design mangalore, seo mangalore, digital marketing mangalore, branding mangalore, logo design mangalore, e-commerce mangalore, custom software mangalore",
  authors: [{ name: "Arovida Technologies" }],
  creator: "Arovida Technologies",
  publisher: "Arovida Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Arovida Technologies | Professional Websites for Interior Designers & Construction Companies",
    description: "Get 3X more projects with a professional website. Trusted by 26+ businesses across Mangalore, Bangalore & Dubai. Digital agency in Mangalore, Puttur, Vitla.",
    type: "website",
    locale: "en_IN",
    siteName: "Arovida Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arovida Technologies | Professional Websites for Interior Designers",
    description: "Get 3X more projects with a professional website. Trusted by 26+ Mangalore businesses.",
  },
  alternates: {
    canonical: "https://arovidatechnologies.com",
  },
  verification: {
    // Add your Google Search Console verification code here when available
    // google: "your-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://arovidatechnologies.com" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Mangalore" />
        <meta name="geo.position" content="12.9141;74.8560" />
        <meta name="ICBM" content="12.9141, 74.8560" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
      </head>
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="2ba90f18-deae-4c43-916e-6320c79d236f"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
