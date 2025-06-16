import ProcessHero from '@/components/Process/ProcessHero';
import Process from '@/components/Process/Process';
import BookingPage from '@/components/BookCall/Booking';

export const metadata = {
  title: "Our Website Process | CoachCraft - Build Your Coaching Website with Confidence",
  description:
    "Discover CoachCraft’s clear, client-focused website process for coaches and solo service providers. Learn how we design, develop, and launch websites that attract and convert clients. Book your free consultation call today!",
  keywords: [
    "coaching website process",
    "how to build coaching website",
    "website design process for coaches",
    "coaching website development steps",
    "website design consultation coaches",
    "book call coaching website",
  ],
  openGraph: {
    title: "Our Website Process | CoachCraft",
    description:
      "Step-by-step approach to building high-converting coaching websites with CoachCraft. See how we bring your vision to life.",
    url: "https://coachcraft.space/our-process",
    siteName: "CoachCraft",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://coachcraft.space/process1.jpg",
        width: 1200,
        height: 630,
        alt: "CoachCraft Website Process",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Website Process | CoachCraft",
    description:
      "Learn about CoachCraft’s proven process for building coaching websites that convert. Book your call now.",
    images: ["https://coachcraft.space/process1.jpg"],
  },
};

export default function Page() {
  return (
    <div>
      <ProcessHero />
      <Process />
      <BookingPage />
    </div>
  );
}
