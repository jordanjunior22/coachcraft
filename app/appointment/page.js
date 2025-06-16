import BookingPage from '@/components/BookCall/Booking';

export const metadata = {
  title: "Book a Free Consultation Call | CoachCraft - Website Design for Coaches",
  description:
    "Schedule a free consultation call with CoachCraft to discuss building your custom coaching website. We specialize in creating high-converting, client-getting websites tailored for coaches and solo service providers.",
  keywords: [
    "book consultation call",
    "coaching website design call",
    "website consultation for coaches",
    "build coaching website",
    "website design consultation",
    "coaching website expert call",
    "schedule website call",
  ],
  openGraph: {
    title: "Book a Free Consultation Call | CoachCraft",
    description:
      "Connect with CoachCraft to discuss how we can build your ideal coaching website that attracts and converts clients.",
    url: "https://coachcraft.space/appointment",
    siteName: "CoachCraft",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://coachcraft.space/appointment.jpg",
        width: 1200,
        height: 630,
        alt: "Book a consultation call with CoachCraft",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Free Consultation Call | CoachCraft",
    description:
      "Schedule a free call with CoachCraft to discuss your coaching website design and strategy.",
    images: ["https://coachcraft.space/appointment.jpg"],
  },
};

export default function Booking() {
  return (
    <div>
      <BookingPage />
    </div>
  );
}
