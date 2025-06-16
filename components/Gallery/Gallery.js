"use client";
import React from "react";
import { motion } from "framer-motion";

const templates = [
  {
    title: "Elegant Coach",
    description: "Clean, minimalist design focused on conversion.",
    imageSrc: "/web1.jpg",
  },
  {
    title: "Bold & Bright",
    description: "Vibrant, attention-grabbing layout to showcase your brand.",
    imageSrc: "/web2.jpg",
  },
  {
    title: "Warm & Inviting",
    description: "Soft colors and welcoming design for personal connection.",
    imageSrc: "/image3.png",
  },
  {
    title: "Modern Simplicity",
    description: "Sleek and clean design perfect for digital-first coaches.",
    imageSrc: "/image7.webp",
  },
  {
    title: "Creative Pulse",
    description: "Energetic and dynamic layout for expressive brands.",
    imageSrc: "/image6.jpg",
  },
  {
    title: "Neutral Harmony",
    description: "Balanced tones and subtle visuals for calming experiences.",
    imageSrc: "/image4.png",
  },
  {
    title: "Premium Luxe",
    description: "High-end feel with elegant fonts and luxurious spacing.",
    imageSrc: "/image5.jpg",
  },
];

export default function PortfolioSamples() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--cc-primary)] mb-10 text-center">
        Portfolio Samples
      </h2>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {templates.map(({ title, description, imageSrc }) => (
          <motion.div
            key={title}
            className="break-inside-avoid rounded shadow-md overflow-hidden border border-gray-200 bg-[var(--cc-bg)] transition-all duration-300 hover:scale-[1.02]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={imageSrc}
              alt={`${title} template preview`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="font-heading text-lg sm:text-xl text-[var(--cc-primary)] mb-2">
                {title}
              </h3>
              <p className="text-sm sm:text-base text-dark">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
