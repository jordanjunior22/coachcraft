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

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handlePhoneChange = (value) => {
        setForm({ ...form, phone: value }); // value contains the full phone number with "+" prefix
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Get user's timezone offset in minutes
            const timezoneOffset = new Date().getTimezoneOffset();

            // Send form data plus timezoneOffset
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, timezoneOffset }),
            });

            if (res.ok) {
                toast.success("Booking submitted! We'll reach out soon.");
                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    service: "web",
                    date: "",
                    method: "email",
                });
                if (window.fbq) window.fbq("track", "Lead");
            } else {
                toast.error("Something went wrong. Try again.");
            }
        } catch (err) {
            toast.error("Server error.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            className="min-h-screen px-4 py-16 bg-[#F4ECDE] text-[var(--cc-primary)]"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(14, 76, 80, 0.9) 50%, rgba(14, 76, 80, 0.2) 100%), url('/appointment.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
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
          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');
        `}
            </Script>

            <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-lg p-8 sm:p-12">
                        {/* Decorative background shapes */}

                <h2 className="text-2xl font-bold mb-8 text-center uppercase">
                    Book Your Free Discovery Call
                </h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="flex items-center border border-gray-300 rounded-md p-3 focus-within:ring-2 focus-within:ring-[var(--cc-primary)]">
                        <User className="mr-3 text-[var(--cc-primary)] flex-shrink-0" />
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            required
                            className="w-full outline-none text-base"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex items-center border border-gray-300 rounded-md p-3 focus-within:ring-2 focus-within:ring-[var(--cc-primary)]">
                        <Mail className="mr-3 text-[var(--cc-primary)] flex-shrink-0" />
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Your email"
                            required
                            className="w-full outline-none text-base"
                        />
                    </div>

                    {/* Replace Phone input with react-phone-input-2 */}
                    <div className="flex items-center border border-gray-300 rounded-md p-3 focus-within:ring-2 focus-within:ring-[var(--cc-primary)]">
                        {/* You can keep the Phone icon here */}
                        <Phone className="mr-3 text-[var(--cc-primary)] flex-shrink-0" />
                        <PhoneInput
                            country={"us"} // default country, change as you want
                            value={form.phone}
                            onChange={handlePhoneChange}
                            inputProps={{
                                name: "phone",
                                required: true,
                                autoFocus: false,
                                className: "w-full outline-none text-base w-full outline-none text-base pl-12",
                                placeholder: "Phone number",
                            }}
                        // optional styling or dropdown options
                        />
                    </div>

                    {/* Service */}
                    <div className="border border-gray-300 rounded-md p-4">
                        <label className="block font-medium mb-3 text-base">Service</label>
                        <div className="flex flex-col sm:flex-row gap-4 text-base">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="service"
                                    value="web"
                                    checked={form.service === "web"}
                                    onChange={handleChange}
                                    className="cursor-pointer"
                                />
                                <Laptop className="text-[var(--cc-primary)]" /> Web Development
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="service"
                                    value="marketing"
                                    checked={form.service === "marketing"}
                                    onChange={handleChange}
                                    className="cursor-pointer"
                                />
                                <Megaphone className="text-[var(--cc-primary)]" /> Marketing
                            </label>
                        </div>
                    </div>

                    {/* Date */}
                    <div className="flex items-center border border-gray-300 rounded-md p-3 focus-within:ring-2 focus-within:ring-[var(--cc-primary)]">
                        <CalendarDays className="mr-3 text-[var(--cc-primary)] flex-shrink-0" />
                        <input
                            type="datetime-local"
                            name="date"
                            value={form.date}
                            onChange={handleChange}
                            required
                            className="w-full outline-none text-base"
                        />
                    </div>

                    {/* Contact Method */}
                    <div className="border border-gray-300 rounded-md p-4">
                        <label className="block font-medium mb-3 text-base">
                            Preferred Contact Method
                        </label>
                        <div className="flex flex-col sm:flex-row gap-4 text-base">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="method"
                                    value="email"
                                    checked={form.method === "email"}
                                    onChange={handleChange}
                                    className="cursor-pointer"
                                />
                                <Mail className="text-[var(--cc-primary)]" /> Email
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="method"
                                    value="phone"
                                    checked={form.method === "phone"}
                                    onChange={handleChange}
                                    className="cursor-pointer"
                                />
                                <Phone className="text-[var(--cc-primary)]" /> Phone
                            </label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full flex items-center justify-center gap-2 py-3 rounded-md transition
                         ${loading
                                ? "bg-[var(--cc-secondary)] cursor-not-allowed"
                                : "bg-[var(--cc-primary)] hover:bg-[var(--cc-secondary)]"
                            } text-white`}
                    >
                        {loading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Submitting...
                            </>
                        ) : (
                            <>
                                <Send className="w-5 h-5" />
                                Submit
                            </>
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
}
