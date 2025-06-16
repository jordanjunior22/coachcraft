"use client";
import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, PenTool, Rocket, LifeBuoy } from "lucide-react";

const processItems = [
  {
    icon: Lightbulb,
    title: "Strategy",
    description:
      "We start by understanding your vision, audience, and goals — laying the groundwork for a smart, effective website roadmap.",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "Our team crafts beautiful, user-focused layouts that bring your brand to life while ensuring intuitive navigation.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "Once approved, your site goes live — fully optimized, responsive, and ready to deliver a flawless user experience.",
  },
  {
    icon: LifeBuoy,
    title: "Support",
    description:
      "After launch, we’re here with ongoing support, updates, and guidance so your site stays fresh and high-performing.",
  },
];

function Page() {
  return (
    <div className="px-4 sm:px-6 md:px-20 py-12">
      <motion.img
        src="/process.jpg"
        alt="Our Process"
        className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-md mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-10 underline text-[var(--cc-primary)]">
          Our Process
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-center mt-4 max-w-3xl mx-auto px-2 text-gray-700">
          At our agency, we follow a focused, collaborative process to build websites that not only look amazing — but perform powerfully.
        </p>

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

export default Page;
