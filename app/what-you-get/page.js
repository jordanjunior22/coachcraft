import WhatYouGet from '@/components/WhatYouGet/WhatYouGet';
import WhatYouGetHero from '@/components/WhatYouGet/Hero';
import Testimonials from '@/components/Tetimonials/Testimonial';
import CallToAction from '@/components/CTA/CTA';

export const metadata = {
  title: "What You Get | Complete Coaching Website Solutions by CoachCraft",
  description:
    "Discover everything included in CoachCraft’s all-in-one website packages tailored for coaches and solo service providers. From responsive design to client booking tools — get the full toolkit to grow your coaching business online.",
  keywords: [
    "coaching website package",
    "website features for coaches",
    "coach website design services",
    "complete coaching website solution",
    "website booking tools for coaches",
    "CoachCraft website benefits",
  ],
  openGraph: {
    title: "What You Get | CoachCraft",
    description:
      "Explore CoachCraft’s comprehensive website solutions designed specifically for coaches. Responsive design, booking tools, copy guidance, and more — all built to help you grow.",
    url: "https://coachcraft.space/what-you-get",
    siteName: "CoachCraft",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://coachcraft.space/process1.jpg",
        width: 1200,
        height: 630,
        alt: "CoachCraft What You Get",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What You Get | CoachCraft",
    description:
      "Learn about CoachCraft’s full website package for coaches — including design, strategy, and booking tools — designed to grow your coaching business.",
    images: ["https://coachcraft.space/process1.jpg"],
  },
};

export default function Page() {
  return (
    <div>
      <WhatYouGetHero />
      <WhatYouGet />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
