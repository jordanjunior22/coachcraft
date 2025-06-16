"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section
      className="relative min-h-[70vh] py-20 px-4 sm:px-8 md:px-20 bg-[url('/us.jpg')] bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundColor: "var(--cc-bg)",
      }}
    >
      {/* Animated Overlay */}
      <motion.div
        className="absolute inset-0 bg-black z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Text Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-start justify-center h-full">
        <motion.h1
          className="font-heading text-2xl sm:text-3xl md:text-5xl leading-tight mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About <span className="text-[var(--cc-secondary)] underline">CoachCraft</span>
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          At CoachCraft, we believe in empowering coaches and solo service providers
          with bold, effective websites that feel authentic and drive results. Our journey
          began with a simple mission: to craft conversion-driven experiences for those
          changing lives—one client at a time.
        </motion.p>

        <motion.p
          className="text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          With years of design and development experience tailored to your industry,
          we build sites that reflect your purpose, communicate your value, and support
          your growth—from your first client to your hundredth.
        </motion.p>
      </div>
    </section>
  );
}
