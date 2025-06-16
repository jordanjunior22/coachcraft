import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "CoachCraft | Expert Website Design for Coaches & Solo Service Providers",
  description:
    "CoachCraft creates conversion-focused, custom websites tailored for coaches and solo entrepreneurs. Build your brand, attract clients, and grow your coaching business online with us.",
  keywords:
    "coach website design, coaching business website, website for coaches, custom coaching websites, conversion-focused web design, CoachCraft, coaching website solutions, solo service provider websites",
  openGraph: {
    title: "CoachCraft | Expert Website Design for Coaches & Solo Service Providers",
    description:
      "Custom websites built to help coaches and solo providers grow. From branding to booking tools, CoachCraft delivers tailored digital solutions that attract clients and boost growth.",
    url: "https://coachcraft.space",
    siteName: "CoachCraft",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://coachcraft.space/bg-image.jpg",
        width: 1200,
        height: 630,
        alt: "CoachCraft Homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CoachCraft | Expert Website Design for Coaches & Solo Service Providers",
    description:
      "Build your coaching brand with a professional website designed to convert visitors into clients. Discover CoachCraft’s expert website design services tailored for coaches.",
    images: ["https://coachcraft.space/bg-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Toaster position="top-right" reverseOrder={false} />
        <Footer />
      </body>
    </html>
  );
}
