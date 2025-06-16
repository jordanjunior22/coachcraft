// app/about/page.tsx (or .jsx)
import React from 'react'
import About from '@/components/About/About'
import AboutHero from '@/components/About/AboutHero'
import CallToAction from '@/components/CTA/CTA'

export const metadata = {
  title: "About CoachCraft – Expert Website Design for Coaches & Solo Service Providers",
  description:
    "CoachCraft specializes in creating high-converting, custom websites designed specifically for coaches and solo service providers. Empower your coaching business with a powerful online presence that attracts clients and grows your brand.",
  keywords: [
    "coach website design",
    "websites for coaches",
    "coaching business website",
    "custom coach websites",
    "solo service provider website",
    "conversion focused coaching sites",
    "coach branding online",
    "website development for coaches"
  ],
  openGraph: {
    title: "About CoachCraft – Expert Website Design for Coaches & Solo Service Providers",
    description:
      "CoachCraft crafts custom, conversion-driven websites that help coaches attract and retain clients. Discover our mission and how we empower coaches to grow their online presence effectively.",
    url: "https://coachcraft.space/about",
    siteName: "CoachCraft",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://coachcraft.space/us.jpg",
        width: 1200,
        height: 630,
        alt: "CoachCraft website design for coaches",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About CoachCraft – Expert Website Design for Coaches & Solo Service Providers",
    description:
      "Discover CoachCraft’s mission to empower coaches with powerful, client-converting websites tailored for growth and brand success.",
    images: ["https://coachcraft.space/us.jpg"],
  },
};

export default function Page() {
  return (
    <div>
      <AboutHero />
      <About />
      <CallToAction />
    </div>
  )
}
