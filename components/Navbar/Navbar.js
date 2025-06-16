'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { PhoneCall, Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-[#F4ECDE]'>
      <div className='flex justify-between items-center px-10 py-4'>
        <img src='/logo.png' className='h-[80px] sm:h-[100px] lg:h-[120px]' />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden text-black'
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-4 p-4 font-sm text-md text-left items-center'>
          <Link href='/'>Home</Link>
          <Link href='/about-us'>About Us</Link>
          <Link href='/our-process'>Our Process</Link>
          <Link href='/what-you-get'>What You Get</Link>
          <Link href='/appointment'>Contact</Link>
          <Link href='/gallery'>Portfolio</Link>
          <Link
            href="https://calendly.com/coachcraftmeeting/30min"
            className="bg-[var(--cc-primary)] hover:bg-[var(--cc-secondary)] text-white px-4 py-2 rounded-md hover:shadow-md flex items-center gap-2"
          >
            <PhoneCall className="w-5 h-5" />
            Book a Free Call
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className='md:hidden flex flex-col gap-3 px-10 pb-6 text-lg font-sm'>
          <Link href='/' onClick={() => setIsOpen(false)}>Home</Link>
          <Link href='/about-us' onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href='/our-process' onClick={() => setIsOpen(false)}>Our Process</Link>
          <Link href='/what-you-get' onClick={() => setIsOpen(false)}>What You Get</Link>
          <Link href='/appointment' onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href='/gallery' onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link
            href="https://calendly.com/coachcraftmeeting/30min"
            className="bg-[var(--cc-primary)] text-white px-4 py-2 rounded-md flex items-center gap-2 w-fit mt-2"
            onClick={() => setIsOpen(false)}
          >
            <PhoneCall className="w-5 h-5" />
            Book a Free Call
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
