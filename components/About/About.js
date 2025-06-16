"use client";
import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 bg-[var(--cc-bg)] flex flex-col gap-16 text-gray-900">
      {/* First Block */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
      >
        <div className="md:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="uppercase font-bold text-base sm:text-lg md:text-xl mb-4 text-[var(--cc-secondary)]"
          >
            What we stand for
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug text-[var(--cc-primary)] border-l-4 border-[var(--cc-secondary)] pl-3"
          >
            We believe every solo coach and service provider deserves a website
            that truly reflects their passion and expertise — and actually helps
            grow their business.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="md:w-1/2 text-sm sm:text-base text-gray-700"
        >
          <p>
            A few years ago, we worked closely with a solo coach who struggled
            to get clients because her website didn’t capture her unique voice
            or the value she offered. That experience opened our eyes to how
            vital a well-designed, authentic website is for solo providers.
          </p>
        </motion.div>
      </motion.div>

      {/* Second Block */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="md:w-1/2 text-sm sm:text-base text-gray-700"
        >
          <p>
            We combine empathy with expert design skills — listening carefully
            to your story and goals to build a website that not only looks
            beautiful but works hard to attract and convert your ideal clients.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="md:w-1/2"
        >
          <p className="text-base sm:text-lg font-semibold leading-relaxed text-[var(--cc-primary)] border-l-4 border-[var(--cc-secondary)] pl-3">
            Helping solo providers succeed isn’t just what we do — it’s what
            drives us every day. We’re passionate about creating online spaces
            where your business can thrive and your impact can grow.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
