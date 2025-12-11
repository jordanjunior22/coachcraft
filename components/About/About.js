"use client";
import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 bg-[var(--cc-bg)] flex flex-col gap-16 text-gray-900">

      {/* FIRST BLOCK */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
      >
        <div className="md:w-1/2">

          {/* Section Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="uppercase font-bold text-base sm:text-lg md:text-xl mb-4 text-[var(--cc-secondary)]"
          >
            What We Stand For
          </motion.h1>

          {/* Big Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug text-[var(--cc-primary)] border-l-4 border-[var(--cc-secondary)] pl-3"
          >
            We believe every coach and solo service provider deserves a website
            that reflects their expertise, amplifies their message, and helps
            them consistently attract the clients they’re meant to serve.
          </motion.p>

        </div>

        {/* Supportive Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="md:w-1/2 text-sm sm:text-base text-gray-700"
        >
          <p>
            Our journey began when we partnered with a solo coach who was doing
            incredible work — yet her website didn’t communicate her value,
            personality, or the transformation she offered. That experience
            made one thing unmistakably clear: coaches don’t just need a
            “pretty website”… they need a strategic, authentic, client-getting
            digital presence.
          </p>
        </motion.div>
      </motion.div>

      {/* SECOND BLOCK */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
      >

        {/* Value Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="md:w-1/2 text-sm sm:text-base text-gray-700"
        >
          <p>
            Today, we bring together user-centered design, conversion strategy,
            and a deep understanding of the coaching industry. We listen to your
            story, understand your audience, and create a website that positions
            you as the trusted expert your clients are searching for.
          </p>
        </motion.div>

        {/* Bold Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="md:w-1/2"
        >
          <p className="text-base sm:text-lg font-semibold leading-relaxed text-[var(--cc-primary)] border-l-4 border-[var(--cc-secondary)] pl-3">
            Supporting coaches and solo providers isn’t just our work — it’s our
            mission. We’re here to help you grow your impact, share your
            expertise with confidence, and build a business supported by a
            website that truly works for you.
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}

export default About;
