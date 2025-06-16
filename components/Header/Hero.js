"use client";
import React from "react";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[70vh] py-16 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-20
                 bg-[url('/bg-image.jpg')] bg-cover bg-center bg-no-repeat
                 text-white"
      style={{
        backgroundColor: "var(--cc-bg)",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-85 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-heading text-2xl sm:text-3xl md:text-5xl mb-3 leading-snug sm:leading-snug md:leading-tight drop-shadow-md"
        >
          Helping Coaches Launch Beautiful,{" "}
          <span className="text-[var(--cc-secondary)] underline">
            Client-Getting Websites
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="mb-4 px-1 text-sm sm:text-base md:text-lg leading-relaxed"
        >
          Your coaching business deserves a website that not only looks amazing
          but also converts visitors into paying clients. We specialize in
          building customized, easy-to-manage websites designed to showcase your
          unique coaching style and attract your ideal audience. Whether you’re
          just starting out or ready to scale, we’re here to create a powerful
          online presence that grows your client base and your impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href="https://calendly.com/coachcraftmeeting/30min"
            className="mt-2 w-fit bg-[var(--cc-primary)] hover:bg-[var(--cc-secondary)] text-white px-4 py-2 rounded-md hover:shadow-md flex items-center gap-2 text-sm sm:text-base"
          >
            <PhoneCall className="w-5 h-5" />
            Book a Free Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
