"use client";

import { User } from "lucide-react";

const testimonials = [
    {
        name: "Coach Jane",
        quote:
            "The website transformed my coaching business and brought me more clients than ever!",
        country: "🇺🇸",
    },
    {
        name: "Mark",
        quote: "Professional, empathetic, and easy to work with. Highly recommended!",
        country: "🇬🇧",
    },
    {
        name: "Sofia",
        quote: "Absolutely loved the process, and the results speak for themselves!",
        country: "🇪🇸",
    },
    {
        name: "Liam",
        quote: "My coaching business doubled thanks to this amazing website!",
        country: "🇨🇦",
    },
    {
        name: "Amira",
        quote: "The design was beautiful and totally on-brand, exactly what I wanted.",
        country: "🇪🇬",
    },
    {
        name: "Taro",
        quote: "Easy to work with and very professional. Would recommend to any coach!",
        country: "🇯🇵",
    },
    {
        name: "Nina",
        quote: "Helped me attract more clients with a clean, professional site.",
        country: "🇩🇪",
    },
    {
        name: "Carlos",
        quote: "Very responsive and great attention to detail. Love the final product!",
        country: "🇧🇷",
    },
];

// CSS animation for infinite horizontal scrolling
const sliderAnimation = `
  @keyframes scrollX {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

export default function Testimonials() {
    return (
        <>
            <style>{sliderAnimation}</style>
            <section className="bg-[#F4ECDE] py-16 px-4 sm:px-6 overflow-hidden">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--cc-primary)] mb-10 text-center">
                    Testimonials
                </h2>

                {/* Slider container */}
                <div className="relative w-full overflow-hidden">
                    {/* Animated slider track: doubled content for seamless infinite loop */}
                    <div
                        className="flex space-x-4 sm:space-x-8 whitespace-nowrap"
                        style={{
                            animation: "scrollX 40s linear infinite",
                            width: "200%",
                        }}
                    >
                        {[...testimonials, ...testimonials].map(({ name, quote, country }, i) => (
                            <blockquote
                                key={i}
                                className="inline-block bg-white dark:bg-[var(--cc-primary)] rounded p-6 shadow-md max-w-xs text-left"
                                style={{ minWidth: "300px" }}
                            >
                                <div className="flex items-center space-x-3 mb-3">
                                    <User className="w-6 h-6 text-primary" />
                                    <span className="text-2xl">{country}</span>
                                    <footer className="text-secondary font-semibold">— {name}</footer>
                                </div>
                                <p className="text-dark dark:text-[var(--cc-bg)] italic whitespace-normal break-words">
                                    "{quote}"
                                </p>
                            </blockquote>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
