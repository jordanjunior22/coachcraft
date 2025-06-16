import Image from "next/image";
import HeroSection from "@/components/Header/Hero";
import About from "@/components/About/About";
import Process from "@/components/Process/Process";
import CallToAction from "@/components/CTA/CTA";
import WhatYouGet from "@/components/WhatYouGet/WhatYouGet";
import Testimonials from "@/components/Tetimonials/Testimonial";
import PortfolioSamples from "@/components/Gallery/Gallery";
import BookingCallSection from "@/components/BookCall/Booking";
export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <About />
      <Process />
      <CallToAction />
      <WhatYouGet />
      <Testimonials />
      <BookingCallSection />
      <PortfolioSamples />
      {/* Add more components as needed */}
    </div>
  );
}
