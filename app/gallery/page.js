import PortfolioHero from '@/components/Gallery/Hero';
import PortfolioSamples from '@/components/Gallery/Gallery';
import Testimonials from '@/components/Tetimonials/Testimonial';
import CallToAction from '@/components/CTA/CTA';

export const metadata = {
  title: "Portfolio | CoachCraft - High-Converting Websites for Coaches",
  description:
    "Explore CoachCraft’s portfolio of custom website designs crafted specifically for coaches and solo service providers. See examples of high-impact, conversion-focused sites that help grow coaching businesses.",
  keywords: [
    "coaching website portfolio",
    "coach website design examples",
    "website templates for coaches",
    "coaching business website samples",
    "custom coaching websites",
    "portfolio coaching website",
    "coach site testimonials",
  ],
  openGraph: {
    title: "Portfolio | CoachCraft",
    description:
      "Browse our collection of stunning, conversion-optimized coaching websites designed to attract and engage clients.",
    url: "https://coachcraft.space/gallery",
    siteName: "CoachCraft",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://coachcraft.space/process.jpg",
        width: 1200,
        height: 630,
        alt: "CoachCraft Portfolio - Website Designs for Coaches",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | CoachCraft",
    description:
      "Discover beautiful, high-performing website designs built for coaches by CoachCraft.",
    images: ["https://coachcraft.space/process.jpg"],
  },
};

export default function Page() {
  return (
    <div>
      <PortfolioHero />
      <PortfolioSamples />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
