import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap", // Better performance
});

// ------------- METADATA -------------
export const metadata = {
    icons: {
    icon: "/favicon.ico", // or .png
  },
  metadataBase: new URL("https://coachcraft.space"),
  title: {
    default: "CoachCraft | Custom Coaching Websites That Convert | Web Design for Coaches",
    template: "%s | CoachCraft" // For page-specific titles
  },
  description:
    "CoachCraft builds high-conversion, SEO-ready websites tailored for coaches and solo service providers. Stand out, attract clients, and elevate your coaching business online.",
  keywords: [
    "coach website design",
    "website design for coaches",
    "custom coaching websites",
    "high-conversion coaching websites",
    "coaching website builder",
    "solo service provider website design",
    "web design for coaches",
    "life coach website",
    "business coach website",
    "health coach website design"
  ],
  authors: [{ name: "CoachCraft" }],
  creator: "CoachCraft",
  publisher: "CoachCraft",
  alternates: { 
    canonical: "/",
    languages: {
      'en-US': '/en-US',
    }
  },
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
    title: "CoachCraft | Custom Websites for Coaches & Solo Entrepreneurs",
    description:
      "High-performance coaching websites optimized for conversion, branding, and SEO.",
    url: "https://coachcraft.space",
    siteName: "CoachCraft",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://coachcraft.space/og-image.jpg", // Consider renaming for clarity
        width: 1200,
        height: 630,
        alt: "CoachCraft - Custom Coaching Website Design",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CoachCraft | Custom Websites for Coaches",
    description:
      "Professional, conversion-optimized websites tailored for coaches and solo entrepreneurs.",
    images: ["https://coachcraft.space/og-image.jpg"],
    creator: "@coachcraft", // Add your Twitter handle
  },

  // Additional metadata
  verification: {
    google: "X-xhAQhYBXgqpWdIShWnPPnyH37g8FV7FXBAHgxbOSM",
  },
  category: "Business Services",
};

// ------------- ROOT LAYOUT -------------
export default function RootLayout({ children }) {
  const isProduction = process.env.NODE_ENV === "production";

  // Enhanced Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://coachcraft.space/#website",
        url: "https://coachcraft.space",
        name: "CoachCraft",
        description: "Custom high-conversion websites for coaches and solo service providers",
        publisher: {
          "@id": "https://coachcraft.space/#organization"
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://coachcraft.space/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://coachcraft.space/#organization",
        name: "CoachCraft",
        url: "https://coachcraft.space",
        logo: {
          "@type": "ImageObject",
          url: "https://coachcraft.space/logo.png", // Add your logo
          width: 250,
          height: 60
        },
        description: "We build custom, high-conversion websites for coaches and solo service providers",
        sameAs: [
          // Add your social media profiles
          "https://www.facebook.com/profile.php?id=61577259818715",
          "https://www.instagram.com/coachcraft.space/",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Service",
          email: "coachcraft.space@gmail.com", // Add your email
          availableLanguage: ["English"]
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://coachcraft.space/#service",
        name: "CoachCraft",
        image: "https://coachcraft.space/og-image.jpg",
        telephone: "+1-229-710-4283", // Add your phone
        address: {
          "@type": "PostalAddress",
          addressCountry: "1209 Mountain Road Pl NE #6130, Albuquerque, New Mexico 87110 US" // Update with your location
        },
        priceRange: "$$",
        serviceType: "Website Design and Development",
        areaServed: {
          "@type": "Country",
          name: "Worldwide"
        }
      }
    ]
  };

  return (
    <html lang="en" className={roboto.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Prevent accidental indexing on localhost */}
        {!isProduction && <meta name="robots" content="noindex, nofollow" />}

        {/* Google Analytics (production only) */}
        {isProduction && (
          <>
            <Script
              strategy="afterInteractive"
              src="https://www.googletagmanager.com/gtag/js?id=G-4XF7DKZPN0"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-4XF7DKZPN0', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        {/* Enhanced Structured Data (JSON-LD) */}
        <Script 
          id="structured-data" 
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(structuredData)}
        </Script>
      </head>

      <body>
        <Navbar />
        <main>{children}</main>
        <Toaster position="top-right" reverseOrder={false} />
        <Footer />
      </body>
    </html>
  );
}