"use client";
import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

export default function PortfolioHero() {
  return (
    <>
      <Head>
        <title>Our Portfolio | CoachCraft</title>
        <meta
          name="description"
          content="Explore a variety of high-converting website templates crafted for coaches and solo service providers. Each one is built for impact, style, and performance."
        />
      </Head>

      <section
        className="relative min-h-[70vh] px-4 sm:px-6 md:px-20 py-20 flex flex-col justify-center items-center text-center text-white
        bg-[url('/process.jpg')] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundColor: "var(--cc-bg)", // fallback if image fails
        }}
      >
        {/* Animated Dark Overlay */}
        <motion.div
          className="absolute inset-0 bg-black z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1 }}
        ></motion.div>

        {/* Hero content */}
        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4 leading-snug drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Portfolio That{" "}
            <span className="underline text-[var(--cc-secondary)]">Speaks for Itself</span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg px-2 leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            Browse a collection of custom-crafted website templates built with strategy, creativity, and conversion in mind. Every design here is made to help coaches stand out and succeed online.
          </motion.p>
        </motion.div>
      </section>
    </>
  );
}
