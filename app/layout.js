import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// ------------- METADATA -------------
export const metadata = {
  metadataBase: new URL("https://coachcraft.space"),
  title:
    "CoachCraft | Custom Coaching Websites That Convert | Web Design for Coaches",
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
  ],
  alternates: { canonical: "/" },

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
        url: "https://coachcraft.space/bg-image.jpg",
        width: 1200,
        height: 630,
        alt: "CoachCraft Website Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CoachCraft | Custom Websites for Coaches",
    description:
      "Professional, conversion-optimized websites tailored for coaches and solo entrepreneurs.",
    images: ["https://coachcraft.space/bg-image.jpg"],
  },
};

// ------------- ROOT LAYOUT -------------
export default function RootLayout({ children }) {
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <html lang="en" className={roboto.className}>
      {/* Next.js will merge this into <head> */}
      <head>
        {/* Mobile responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="X-xhAQhYBXgqpWdIShWnPPnyH37g8FV7FXBAHgxbOSM" />
        {/* Preconnects (speed optimization) */}
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />

        {/* Prevent accidental indexing on localhost */}
        {!isProduction && <meta name="robots" content="noindex, nofollow" />}

        {/* Google Analytics (production only) */}
        {isProduction && (
          <>
            <Script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-4XF7DKZPN0"
            />
            <Script id="google-analytics">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-4XF7DKZPN0');
              `}
            </Script>
          </>
        )}

        {/* Structured Data (JSON-LD) */}
        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "CoachCraft",
            url: "https://coachcraft.space",
            description:
              "CoachCraft builds custom, high-conversion websites for coaches and solo service providers.",
            publisher: {
              "@type": "Organization",
              name: "CoachCraft",
              url: "https://coachcraft.space",
            },
            potentialAction: {
              "@type": "SearchAction",
              target: "https://coachcraft.space/?s={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
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
