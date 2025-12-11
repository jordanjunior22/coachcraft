"use client";
import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, PenTool, Rocket, LifeBuoy } from "lucide-react";

const processItems = [
  {
    icon: Lightbulb,
    title: "Strategy",
    description:
      "We dive deep into your coaching vision, target audience, and business goals to create a strategic roadmap that ensures your website attracts and converts clients.",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "Our team crafts visually stunning, user-focused layouts that showcase your brand’s personality while making navigation seamless and intuitive.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "After final approval, your site goes live fully optimized, responsive, and built to deliver a smooth, high-performing experience for your clients.",
  },
  {
    icon: LifeBuoy,
    title: "Support",
    description:
      "Post-launch, we provide ongoing guidance, updates, and support so your coaching website remains fresh, effective, and consistently performing at its best.",
  },
];

function Process() {
  return (
    <div className="px-4 sm:px-6 md:px-20 py-12">

      {/* Process Image */}
      <motion.img
        src="/process.jpg"
        alt="CoachCraft Website Design Process"
        className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-md mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      />

      {/* Section Title & Intro */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-10 underline text-[var(--cc-primary)]">
          Our Website Design Process
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-center mt-4 max-w-3xl mx-auto px-2 text-gray-700">
          At CoachCraft, we follow a clear, client-focused process to design coaching websites that not only look beautiful, but also convert visitors into paying clients.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {processItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="border border-gray-200 rounded-md hover:shadow-md p-6 flex flex-col items-start gap-3 bg-white"
              >
                <div className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-[var(--cc-primary)]">
                  <Icon className="text-[var(--cc-text)]" />
                  <h2>{item.title}</h2>
                </div>
                <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default Process;
