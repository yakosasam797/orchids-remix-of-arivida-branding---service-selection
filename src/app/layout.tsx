import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Arovida Technologies | Website Design, Brand Design & Marketing | Mangalore, Puttur, Vitla",
  description: "Arovida Technologies — Website design, brand design & digital marketing that grows your business. Trusted by 50+ businesses across Mangalore, Bangalore & Dubai. Free consultation. Digital agency in Mangalore, Puttur, Vitla.",
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
    title: "Arovida Technologies | Website Design, Brand Design & Marketing",
    description: "Website design, brand design & digital marketing that grows your business. Trusted by 50+ businesses across Mangalore, Bangalore & Dubai. Digital agency in Mangalore, Puttur, Vitla.",
    type: "website",
    locale: "en_IN",
    siteName: "Arovida Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arovida Technologies | Website Design, Brand Design & Marketing",
    description: "Website design, brand design & digital marketing that grows your business. Trusted by 50+ businesses.",
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
        {/* Preconnect for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Fonts with display=swap for faster initial render */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
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
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P28ZLF5Z');
          `}
        </Script>
        {/* End Google Tag Manager */}
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P28ZLF5Z"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

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
