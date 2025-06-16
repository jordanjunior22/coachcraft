"use client";
import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

export default function WhatYouGetHero() {
  return (
    <>
      <Head>
        <title>What You Get | CoachCraft</title>
        <meta
          name="description"
          content="See exactly what you'll receive when you partner with CoachCraft—from responsive design to copy guidance and booking tools."
        />
      </Head>

      <section
        className="relative py-20 px-4 sm:px-6 md:px-20 bg-gradient-to-r from-[var(--cc-primary)] to-[var(--cc-secondary)] text-white overflow-hidden"
      >
        {/* Decorative background shapes with motion */}
        <motion.div
          className="absolute -top-10 -left-10 w-40 h-40 bg-white opacity-10 rounded-full z-0 animate-pulse"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-72 h-72 bg-white opacity-5 rounded-full z-0 animate-ping"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4 leading-snug"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Everything You Need To{" "}
            <span className="underline decoration-white">Show Up Online</span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            We don’t just give you a pretty website—we hand you a complete toolkit built for growth. From strategy
            to bookings, you’ll walk away fully equipped to impress, engage, and convert your audience.
          </motion.p>
        </div>
      </section>
    </>
  );
}
