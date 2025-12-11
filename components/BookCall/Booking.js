"use client";

import React, { useState } from "react";
import {
    Mail,
    Phone,
    CalendarDays,
    Laptop,
    Megaphone,
    User,
    Send,
    Loader2,
    CheckCircle2,
    Clock,
} from "lucide-react";
import { toast } from "react-hot-toast";
import Script from "next/script";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function BookingPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "web",
        date: "",
        method: "email",
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handlePhoneChange = (value) => {
        setForm({ ...form, phone: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const timezoneOffset = new Date().getTimezoneOffset();

            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, timezoneOffset }),
            });

            if (res.ok) {
                toast.success("Booking submitted successfully!");
                setSubmitted(true);
                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    service: "web",
                    date: "",
                    method: "email",
                });
                if (window.fbq) window.fbq("track", "Lead");
                
                // Reset submitted state after 5 seconds
                setTimeout(() => setSubmitted(false), 5000);
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        } catch (err) {
            toast.error("Server error. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            className="min-h-screen bg-gradient-to-br from-[#0E4C50] to-[#0a3537] relative overflow-hidden"
        >
            {/* Facebook Pixel */}
            <Script id="fb-pixel" strategy="afterInteractive">
                {`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '1346307853839923');
                    fbq('track', 'PageView');
                `}
            </Script>

            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F4ECDE] rounded-full opacity-5 blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#F4ECDE] rounded-full opacity-5 blur-3xl"></div>
            </div>

            <div className="relative px-3 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <div className="max-w-2xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-6 sm:mb-8">
                        <div className="inline-flex items-center gap-2 bg-[#F4ECDE]/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
                            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F4ECDE]" />
                            <span className="text-xs sm:text-sm text-[#F4ECDE] font-medium">
                                30-Minute Free Consultation
                            </span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 px-2">
                            Book Your Free Discovery Call
                        </h1>
                        <p className="text-sm sm:text-base text-[#F4ECDE]/80 max-w-xl mx-auto px-2">
                            Let's discuss how we can help elevate your coaching business with a custom website
                        </p>
                    </div>

                    {/* Form Card */}
                    <div className="bg-white shadow-2xl rounded-lg sm:rounded-2xl p-4 sm:p-6 lg:p-8">
                        {submitted ? (
                            // Success Message
                            <div className="text-center py-8 sm:py-12">
                                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mb-4 sm:mb-6">
                                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                                    We Got Your Request!
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-4">
                                    Thank you for booking a discovery call. We'll reach out to you shortly to confirm the details.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#0E4C50] text-white rounded-lg hover:bg-[#0a3537] transition text-sm sm:text-base"
                                >
                                    Book Another Call
                                </button>
                            </div>
                        ) : (
                            <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
                                {/* Name */}
                                <div>
                                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                                        Full Name *
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            required
                                            className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4C50] focus:border-transparent outline-none transition text-sm sm:text-base"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                                        Email Address *
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            required
                                            className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4C50] focus:border-transparent outline-none transition text-sm sm:text-base"
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                                        Phone Number *
                                    </label>
                                    <div className="phone-input-wrapper">
                                        <PhoneInput
                                            country={"us"}
                                            value={form.phone}
                                            onChange={handlePhoneChange}
                                            inputProps={{
                                                name: "phone",
                                                required: true,
                                                autoFocus: false,
                                            }}
                                            containerClass="phone-container"
                                            inputClass="phone-input"
                                            buttonClass="phone-button"
                                            dropdownClass="phone-dropdown"
                                        />
                                    </div>
                                </div>

                                {/* Service Selection */}
                                <div>
                                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3">
                                        Service Interested In *
                                    </label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                                        <label className={`relative flex items-center gap-3 p-3 sm:p-4 border-2 rounded-lg cursor-pointer transition ${
                                            form.service === "web"
                                                ? "border-[#0E4C50] bg-[#0E4C50]/5"
                                                : "border-gray-200 hover:border-gray-300"
                                        }`}>
                                            <input
                                                type="radio"
                                                name="service"
                                                value="web"
                                                checked={form.service === "web"}
                                                onChange={handleChange}
                                                className="sr-only"
                                            />
                                            <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                                                form.service === "web"
                                                    ? "bg-[#0E4C50]"
                                                    : "bg-gray-100"
                                            }`}>
                                                <Laptop className={`w-4 h-4 sm:w-5 sm:h-5 ${
                                                    form.service === "web"
                                                        ? "text-white"
                                                        : "text-gray-600"
                                                }`} />
                                            </div>
                                            <div className="flex-1">
                                                <p className={`text-sm sm:text-base font-medium ${
                                                    form.service === "web"
                                                        ? "text-[#0E4C50]"
                                                        : "text-gray-900"
                                                }`}>
                                                    Web Development
                                                </p>
                                                <p className="text-xs sm:text-sm text-gray-500">
                                                    Custom websites
                                                </p>
                                            </div>
                                        </label>

                                        <label className={`relative flex items-center gap-3 p-3 sm:p-4 border-2 rounded-lg cursor-pointer transition ${
                                            form.service === "marketing"
                                                ? "border-[#0E4C50] bg-[#0E4C50]/5"
                                                : "border-gray-200 hover:border-gray-300"
                                        }`}>
                                            <input
                                                type="radio"
                                                name="service"
                                                value="marketing"
                                                checked={form.service === "marketing"}
                                                onChange={handleChange}
                                                className="sr-only"
                                            />
                                            <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                                                form.service === "marketing"
                                                    ? "bg-[#0E4C50]"
                                                    : "bg-gray-100"
                                            }`}>
                                                <Megaphone className={`w-4 h-4 sm:w-5 sm:h-5 ${
                                                    form.service === "marketing"
                                                        ? "text-white"
                                                        : "text-gray-600"
                                                }`} />
                                            </div>
                                            <div className="flex-1">
                                                <p className={`text-sm sm:text-base font-medium ${
                                                    form.service === "marketing"
                                                        ? "text-[#0E4C50]"
                                                        : "text-gray-900"
                                                }`}>
                                                    Marketing
                                                </p>
                                                <p className="text-xs sm:text-sm text-gray-500">
                                                    Digital strategy
                                                </p>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                {/* Date & Time */}
                                <div>
                                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                                        Preferred Date & Time *
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <CalendarDays className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="datetime-local"
                                            name="date"
                                            value={form.date}
                                            onChange={handleChange}
                                            required
                                            min={new Date().toISOString().slice(0, 16)}
                                            className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4C50] focus:border-transparent outline-none transition text-sm sm:text-base"
                                        />
                                    </div>
                                    <p className="mt-1.5 text-xs text-gray-500">
                                        Your local timezone will be used
                                    </p>
                                </div>

                                {/* Contact Method */}
                                <div>
                                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3">
                                        Preferred Contact Method *
                                    </label>
                                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                                        <label className={`relative flex items-center justify-center gap-2 p-2.5 sm:p-3 border-2 rounded-lg cursor-pointer transition ${
                                            form.method === "email"
                                                ? "border-[#0E4C50] bg-[#0E4C50]/5"
                                                : "border-gray-200 hover:border-gray-300"
                                        }`}>
                                            <input
                                                type="radio"
                                                name="method"
                                                value="email"
                                                checked={form.method === "email"}
                                                onChange={handleChange}
                                                className="sr-only"
                                            />
                                            <Mail className={`w-4 h-4 sm:w-5 sm:h-5 ${
                                                form.method === "email"
                                                    ? "text-[#0E4C50]"
                                                    : "text-gray-600"
                                            }`} />
                                            <span className={`text-sm sm:text-base font-medium ${
                                                form.method === "email"
                                                    ? "text-[#0E4C50]"
                                                    : "text-gray-900"
                                            }`}>
                                                Email
                                            </span>
                                        </label>

                                        <label className={`relative flex items-center justify-center gap-2 p-2.5 sm:p-3 border-2 rounded-lg cursor-pointer transition ${
                                            form.method === "phone"
                                                ? "border-[#0E4C50] bg-[#0E4C50]/5"
                                                : "border-gray-200 hover:border-gray-300"
                                        }`}>
                                            <input
                                                type="radio"
                                                name="method"
                                                value="phone"
                                                checked={form.method === "phone"}
                                                onChange={handleChange}
                                                className="sr-only"
                                            />
                                            <Phone className={`w-4 h-4 sm:w-5 sm:h-5 ${
                                                form.method === "phone"
                                                    ? "text-[#0E4C50]"
                                                    : "text-gray-600"
                                            }`} />
                                            <span className={`text-sm sm:text-base font-medium ${
                                                form.method === "phone"
                                                    ? "text-[#0E4C50]"
                                                    : "text-gray-900"
                                            }`}>
                                                Phone
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full flex items-center justify-center gap-2 py-3 sm:py-3.5 rounded-lg font-medium transition-all text-sm sm:text-base ${
                                        loading
                                            ? "bg-gray-400 cursor-not-allowed"
                                            : "bg-[#0E4C50] hover:bg-[#0a3537] hover:shadow-lg"
                                    } text-white`}
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                                            <span>Submitting...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                                            <span>Book Free Discovery Call</span>
                                        </>
                                    )}
                                </button>

                                {/* Privacy Note */}
                                <p className="text-xs text-center text-gray-500 pt-2">
                                    We respect your privacy. Your information will never be shared.
                                </p>
                            </form>
                        )}
                    </div>

                    {/* Trust Indicators */}
                    {!submitted && (
                        <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-3 sm:gap-4 px-2">
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">
                                    30min
                                </div>
                                <div className="text-xs sm:text-sm text-[#F4ECDE]/80">
                                    Free Call
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">
                                    24hrs
                                </div>
                                <div className="text-xs sm:text-sm text-[#F4ECDE]/80">
                                    Response Time
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">
                                    100%
                                </div>
                                <div className="text-xs sm:text-sm text-[#F4ECDE]/80">
                                    Satisfaction
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                .phone-input-wrapper :global(.phone-container) {
                    width: 100%;
                }
                
                .phone-input-wrapper :global(.phone-input) {
                    width: 100% !important;
                    height: 42px !important;
                    padding-left: 48px !important;
                    border: 1px solid #d1d5db !important;
                    border-radius: 0.5rem !important;
                    font-size: 0.875rem !important;
                }
                
                @media (min-width: 640px) {
                    .phone-input-wrapper :global(.phone-input) {
                        height: 46px !important;
                        font-size: 1rem !important;
                    }
                }
                
                .phone-input-wrapper :global(.phone-input:focus) {
                    border-color: transparent !important;
                    box-shadow: 0 0 0 2px #0E4C50 !important;
                }
                
                .phone-input-wrapper :global(.phone-button) {
                    border: 1px solid #d1d5db !important;
                    border-right: none !important;
                    border-radius: 0.5rem 0 0 0.5rem !important;
                    background: white !important;
                }
                
                .phone-input-wrapper :global(.phone-dropdown) {
                    border-radius: 0.5rem !important;
                }
            `}</style>
        </section>
    );
}