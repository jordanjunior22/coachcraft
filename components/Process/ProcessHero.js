"use client";
import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

export default function ProcessHero() {
  return (
    <>
      <Head>
        <title>Our Process | CoachCraft</title>
        <meta
          name="description"
          content="Explore CoachCraft's streamlined process for building beautiful, client-attracting websites—from strategy and design to launch and support."
        />
      </Head>

      <section
        className="relative min-h-[70vh] py-20 px-4 sm:px-6 md:px-20 bg-[url('/process1.jpg')] bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundColor: "var(--cc-bg)",
        }}
      >
        {/* Overlay with motion */}
        <motion.div
          className="absolute inset-0 bg-black z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1 }}
        ></motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center h-full">
          <motion.h1
            className="font-heading text-3xl sm:text-4xl md:text-5xl leading-tight mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Our Proven{" "}
            <span className="text-[var(--cc-secondary)] underline">
              Website Process
            </span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            From vision to launch, our step-by-step approach ensures that your
            website looks incredible, functions flawlessly, and actually gets
            you clients. Here’s how we bring your online presence to life—
            with clarity, creativity, and care at every phase.
          </motion.p>
        </div>
      </section>
    </>
  );
}
