"use client";

import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

type FormState = "idle" | "sending" | "success" | "error";

type FieldConfig = {
    name: string;
    label: string;
    type?: string;
    placeholder: string;
    required?: boolean;
    half?: boolean;
    textarea?: boolean;
    rows?: number;
    options?: string[];
};

const fields: FieldConfig[] = [
    {
        name: "from_name",
        label: "Full Name",
        placeholder: "e.g. Arjun Mehta",
        required: true,
        half: true,
    },
    {
        name: "phone",
        label: "Phone Number",
        type: "tel",
        placeholder: "+(91) XXXXX XXXXX",
        required: true,
        half: true,
    },
    {
        name: "reply_to",
        label: "Email Address",
        type: "email",
        placeholder: "you@email.com",
        required: true,
        half: true,
    },
    {
        name: "city",
        label: "City",
        placeholder: "e.g. Bengaluru",
        required: false,
        half: true,
    },
    {
        name: "project_type",
        label: "Project Type",
        placeholder: "Select a project type",
        required: true,
        options: [
            "1 BHK Residential",
            "2 BHK Residential",
            "3 BHK Residential",
            "Villa / Bungalow",
            "Commercial Office",
            "Retail Space",
            "Renovation",
            "Other",
        ],
    },
    {
        name: "budget",
        label: "Approximate Budget",
        placeholder: "Select your budget range",
        required: false,
        options: [
            "Under ₹5 Lakh",
            "₹5L – ₹10L",
            "₹10L – ₹20L",
            "₹20L – ₹50L",
            "₹50L+",
            "Not Sure Yet",
        ],
    },
    {
        name: "message",
        label: "Tell Us About Your Project",
        placeholder:
            "Describe your space, style preferences, timeline, or anything else you'd like us to know…",
        required: true,
        textarea: true,
        rows: 5,
    },
];

const contactInfo = [
    {
        icon: <FaPhone className="text-xs rotate-90" />,
        label: "Call Us",
        value: "+(91) 7406299605",
        href: "tel:+917406299605",
    },
    {
        icon: <IoIosMail className="text-sm" />,
        label: "Email Us",
        value: "infoeliteworkk@gmail.com",
        href: "mailto:infoeliteworkk@gmail.com",
    },
    {
        icon: <FaWhatsapp className="text-sm" />,
        label: "WhatsApp",
        value: "Chat on WhatsApp",
        href: "https://api.whatsapp.com/send?phone=917406299605",
    },
    {
        icon: <IoLocationSharp className="text-sm" />,
        label: "Studio",
        value: "Elitework, Bannerghatta Road, Karnataka 560083",
        href: undefined,
    },
];

// Minimal floating-label input
function FloatingField({
    config,
    value,
    onChange,
    error,
}: {
    config: FieldConfig;
    value: string;
    onChange: (v: string) => void;
    error?: string;
}) {
    const [focused, setFocused] = useState(false);
    const active = focused || value.length > 0;

    const baseClass =
        "w-full bg-transparent border-b text-white text-sm outline-none transition-all duration-300 placeholder-transparent peer";

    const borderColor = error
        ? "border-red-500/60"
        : active
            ? "border-[#C9A96E]"
            : "border-white/10 hover:border-white/20";

    return (
        <div className="relative flex flex-col gap-1">
            {/* Label */}
            <motion.label
                className="absolute left-0 text-white/30 pointer-events-none origin-left"
                animate={{
                    y: active ? -18 : 0,
                    scale: active ? 0.78 : 1,
                    color: active ? (error ? "#ef4444" : "#C9A96E") : "rgba(255,255,255,0.3)",
                }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
                {config.label}
                {config.required && (
                    <span className="text-[#C9A96E] ml-0.5">*</span>
                )}
            </motion.label>

            {config.options ? (
                <select
                    name={config.name}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className={`${baseClass} ${borderColor} pt-5 pb-2 pr-6 appearance-none cursor-pointer bg-transparent`}
                    style={{ colorScheme: "dark" }}
                >
                    <option value="" disabled hidden></option>
                    {config.options.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#111] text-white">
                            {opt}
                        </option>
                    ))}
                </select>
            ) : config.textarea ? (
                <textarea
                    name={config.name}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    rows={config.rows ?? 4}
                    placeholder={config.placeholder}
                    className={`${baseClass} ${borderColor} pt-5 pb-2 resize-none leading-relaxed`}
                />
            ) : (
                <input
                    type={config.type ?? "text"}
                    name={config.name}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder={config.placeholder}
                    className={`${baseClass} ${borderColor} pt-5 pb-2`}
                />
            )}

            {/* Bottom border animated */}
            <motion.span
                className="absolute bottom-0 left-0 h-px bg-[#C9A96E] origin-left"
                animate={{ scaleX: focused ? 1 : 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{ width: "100%" }}
            />

            {/* Dropdown arrow */}
            {config.options && (
                <span className="absolute right-0 bottom-3 text-white/30 pointer-events-none text-xs">
                    ▾
                </span>
            )}

            {/* Error */}
            <AnimatePresence>
                {error && (
                    <motion.p
                        className="text-red-400 text-xs mt-1"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                    >
                        {error}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function ContactUs() {
    const formRef = useRef<HTMLFormElement>(null);

    const initialValues = Object.fromEntries(fields.map((f) => [f.name, ""]));
    const [values, setValues] = useState<Record<string, string>>(initialValues);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [status, setStatus] = useState<FormState>("idle");

    const validate = () => {
        const newErrors: Record<string, string> = {};
        fields.forEach((f) => {
            if (f.required && !values[f.name]?.trim()) {
                newErrors[f.name] = `${f.label} is required`;
            }
            if (f.type === "email" && values[f.name] && !/\S+@\S+\.\S+/.test(values[f.name])) {
                newErrors[f.name] = "Enter a valid email address";
            }
        });
        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setErrors({});
        setStatus("sending");

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current!,
                { publicKey: EMAILJS_PUBLIC_KEY }
            );
            setStatus("success");
            setValues(initialValues);
        } catch (err) {
            console.error("EmailJS error:", err);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="bg-[#0a0a0a] py-24 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* ── Header ── */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-px bg-[#C9A96E]" />
                            <span className="text-[#C9A96E] text-xs font-medium tracking-[0.3em] uppercase">
                                {`Let's Talk`}
                            </span>
                        </div>
                        <motion.h2
                            className="text-4xl lg:text-5xl font-light text-white leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            Begin your design
                            <br />
                            <span className="italic text-[#C9A96E]">journey with us.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        className="text-white/40 text-base leading-relaxed max-w-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Share your vision and we&apos;ll respond within 24 hours with a
                        tailored plan for your space.
                    </motion.p>
                </div>

                {/* ── Main grid ── */}
                <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">

                    {/* ── Left: Contact info ── */}
                    <motion.div
                        className="lg:col-span-2 flex flex-col gap-12"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                    >
                        {/* Decorative image */}
                        <div className="relative overflow-hidden h-72">
                            <Image
                                src="/about_img_1.jpg"
                                alt="Elite Work Studio"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4">
                                <p className="text-white text-sm font-light">Elite Work Studio</p>
                                <p className="text-white/40 text-xs">Bengaluru, Karnataka</p>
                            </div>
                        </div>

                        {/* Contact details */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-white/20 text-xs tracking-[0.25em] uppercase">
                                Reach Out
                            </h3>
                            {contactInfo.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-start gap-4 group"
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                >
                                    <div className="w-8 h-8 border border-white/10 rounded-full flex items-center justify-center text-white/30 flex-shrink-0 mt-0.5 group-hover:border-[#C9A96E]/40 group-hover:text-[#C9A96E] transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-white/20 text-xs tracking-wider uppercase mb-0.5">
                                            {item.label}
                                        </p>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                target={item.href.startsWith("http") ? "_blank" : undefined}
                                                rel="noreferrer"
                                                className="text-white/60 text-sm hover:text-[#C9A96E] transition-colors duration-300"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-white/60 text-sm leading-relaxed">{item.value}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Working hours */}
                        <div className="border-t border-white/5 pt-8 flex flex-col gap-3">
                            <h3 className="text-white/20 text-xs tracking-[0.25em] uppercase mb-2">
                                Studio Hours
                            </h3>
                            {[
                                { day: "Mon – Sat", hours: "9:00 AM – 7:00 PM" },
                                { day: "Sunday", hours: "By Appointment" },
                            ].map((row, i) => (
                                <div key={i} className="flex justify-between items-center">
                                    <span className="text-white/40 text-sm">{row.day}</span>
                                    <span className="text-white/60 text-sm">{row.hours}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Right: Form ── */}
                    <motion.div
                        className="lg:col-span-3"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                    >
                        {/* Success state */}
                        <AnimatePresence mode="wait">
                            {status === "success" ? (
                                <motion.div
                                    key="success"
                                    className="flex flex-col items-center justify-center gap-6 py-24 text-center"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {/* Gold checkmark */}
                                    <motion.div
                                        className="w-16 h-16 border border-[#C9A96E]/40 rounded-full flex items-center justify-center"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                                    >
                                        <motion.svg
                                            viewBox="0 0 24 24"
                                            className="w-7 h-7 stroke-[#C9A96E]"
                                            fill="none"
                                            strokeWidth={1.5}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 0.6, delay: 0.4 }}
                                        >
                                            <motion.path d="M5 13l4 4L19 7" />
                                        </motion.svg>
                                    </motion.div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-white text-2xl font-light">Message Received</h3>
                                        <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                                            Thank you for reaching out. Our team will get back to you within 24 hours.
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="text-[#C9A96E] text-xs tracking-[0.2em] uppercase border-b border-[#C9A96E]/30 pb-0.5 hover:border-[#C9A96E] transition-colors duration-300"
                                    >
                                        Send Another Message
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    ref={formRef}
                                    onSubmit={handleSubmit}
                                    className="flex flex-col gap-10"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {/* Field grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                                        {fields.map((field) => (
                                            <div
                                                key={field.name}
                                                className={
                                                    field.half === false || field.textarea || field.options
                                                        ? "md:col-span-2"
                                                        : ""
                                                }
                                            >
                                                <FloatingField
                                                    config={field}
                                                    value={values[field.name]}
                                                    onChange={(v) =>
                                                        setValues((prev) => ({ ...prev, [field.name]: v }))
                                                    }
                                                    error={errors[field.name]}
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Error banner */}
                                    <AnimatePresence>
                                        {status === "error" && (
                                            <motion.p
                                                className="text-red-400/80 text-sm border border-red-500/20 px-4 py-3"
                                                initial={{ opacity: 0, y: -8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0 }}
                                            >
                                                Something went wrong. Please try again or call us directly.
                                            </motion.p>
                                        )}
                                    </AnimatePresence>

                                    {/* Submit row */}
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
                                        <motion.button
                                            type="submit"
                                            disabled={status === "sending"}
                                            whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="relative overflow-hidden px-10 py-4 bg-[#C9A96E] text-[#0a0a0a] text-sm font-semibold tracking-[0.15em] uppercase transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:bg-[#D4B87A]"
                                        >
                                            <AnimatePresence mode="wait">
                                                {status === "sending" ? (
                                                    <motion.span
                                                        key="sending"
                                                        className="flex items-center gap-3"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                    >
                                                        <motion.span
                                                            className="inline-block w-4 h-4 border-2 border-[#0a0a0a]/30 border-t-[#0a0a0a] rounded-full"
                                                            animate={{ rotate: 360 }}
                                                            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                                                        />
                                                        Sending…
                                                    </motion.span>
                                                ) : (
                                                    <motion.span
                                                        key="idle"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                    >
                                                        Send Message
                                                    </motion.span>
                                                )}
                                            </AnimatePresence>
                                        </motion.button>

                                        <p className="text-white/20 text-xs leading-relaxed">
                                            We typically respond within{" "}
                                            <span className="text-white/40">24 hours.</span>
                                            <br />
                                            Your information is kept confidential.
                                        </p>
                                    </div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}