"use client";
import React from "react";
import Link from "next/link";
import {
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    PhoneCall,
} from "lucide-react";

function Footer() {
    return (
        <footer className="bg-[#F4ECDE] text-[var(--cc-primary)] text-sm sm:text-base">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col lg:flex-row gap-10 sm:gap-12 justify-between">
                {/* Logo and About */}
                <div className="flex-1">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="h-[80px] sm:h-[100px] lg:h-[120px] mb-4"
                    />
                    <p className="max-w-sm leading-relaxed text-xs sm:text-sm">
                        We craft beautiful, client-converting websites for coaches and solo
                        service providers—empowering you to show up boldly online.
                    </p>
                </div>

                {/* Footer Sections */}
                <div className="flex-[2] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-[var(--cc-primary)] text-[var(--cc-bg)] p-4 sm:p-6 rounded-lg">
                    {/* Navigation */}
                    <div>
                        <h3 className="font-semibold text-base sm:text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            <li>
                                <a href="/about-us" className="hover:underline">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/process" className="hover:underline">
                                    Our Process
                                </a>
                            </li>
                            <li>
                                <a href="/gallery" className="hover:underline">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <Link
                                    href="https://calendly.com/coachcraftmeeting/30min"
                                    className="inline-flex items-center gap-2 bg-white text-[var(--cc-primary)] px-3 py-2 rounded-md shadow-sm hover:shadow-md transition"
                                >
                                    <PhoneCall className="w-4 h-4" />
                                    Book a Free Call
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-base sm:text-lg mb-4">Contact</h3>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            <li className="flex items-center gap-2">
                                <Phone className="min-w-[16px] min-h-[16px]" size={16} /> +1 229 710 4283
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="min-w-[16px] min-h-[16px]" size={16} /> coachcraft.space@gmail.com
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="min-w-[16px] min-h-[16px]" size={16} /> 1209 Mountain Road Pl NE #6130, Albuquerque, New Mexico 87110 US
                            </li>
                        </ul>
                    </div>


                    {/* Socials */}
                    <div>
                        <h3 className="font-semibold text-base sm:text-lg mb-4">Follow Us</h3>
                        <div className="flex gap-4">
                            <a href="#" aria-label="Facebook">
                                <Facebook className="hover:text-[var(--cc-secondary)]" />
                            </a>
                            <a href="#" aria-label="Instagram">
                                <Instagram className="hover:text-[var(--cc-secondary)]" />
                            </a>
                            <a href="mailto:coachcraft.space@gmail.com" aria-label="LinkedIn">
                                <Mail className="hover:text-[var(--cc-secondary)]" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="text-center text-xs py-4 border-t border-[var(--cc-primary)]">
                &copy; {new Date().getFullYear()} CoachCraft. Powered by Onehunnid LLC.
            </div>
        </footer>
    );
}

export default Footer;
