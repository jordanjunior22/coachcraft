"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Responsive Website",
    description:
      "A fully responsive website that looks perfect on mobile, tablet, and desktop—so your coaching clients always have a seamless experience.",
  },
  {
    title: "Booking Integration",
    description:
      "Easily connect your scheduling system to allow clients to book sessions directly on your site, saving you time and streamlining your workflow.",
  },
  {
    title: "Copy Guidance",
    description:
      "Receive expert copywriting tips and templates that highlight your coaching expertise and turn visitors into paying clients.",
  },
  {
    title: "Brand Feel Setup",
    description:
      "Custom design tailored to your unique coaching brand, creating an emotional connection with your audience and reinforcing your authority.",
  },
  {
    title: "1:1 Strategy Call",
    description:
      "A personalized consultation to align your website, marketing, and business goals—ensuring your online presence drives results.",
  },
];

// Variants for the container that controls staggered children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Variants for each list item
const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function WhatYouGet() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Section Title */}
      <motion.h1
        className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--cc-primary)] mb-10 sm:mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        What You Get
      </motion.h1>

      {/* Features Grid */}
      <motion.ul
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {features.map(({ title, description }) => (
          <motion.li
            key={title}
            className="flex gap-4 items-start border-l-4 border-[var(--cc-primary)] pl-4 bg-white rounded-md p-4 shadow-sm"
            variants={itemVariants}
          >
            <CheckCircle2
              size={28}
              className="text-[var(--cc-primary)] mt-1 flex-shrink-0"
            />
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
                {title}
              </h3>
              <p className="mt-1 text-sm sm:text-base text-gray-700 leading-relaxed">
                {description}
              </p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
