"use client";

import React from 'react';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';

export default function CallToAction() {
  return (
    <div
      className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] pt-6 flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(14, 76, 80, 0.9) 50%, rgba(14, 76, 80, 0.2) 100%), url('/call.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="text-center px-4 sm:px-6 max-w-xl text-white">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          <Typewriter
            words={['Ready to Launch Your Dream Website?']}
            loop={false}
            cursor
            typeSpeed={50}
          />
        </h2>
        <p className="mb-6 text-xs sm:text-sm md:text-base">
          Our simple, proven process gets your coaching website live fast — attracting clients and growing your business.
        </p>
        <Link
          href="https://calendly.com/coachcraftmeeting/30min"
          className="bg-[var(--cc-bg)] text-[var(--cc-text)] hover:text-white hover:bg-[var(--cc-secondary)] cursor-pointer transition-colors px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-semibold text-sm sm:text-base"
        >
          Get Started Now
        </Link>
      </div>
    </div>
  );
}
