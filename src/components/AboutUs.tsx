"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

export default function AboutUs() {
  const [isExpanded, setIsExpanded] = useState(false);

  const features = [
    "Creative design expertise",
    "Client-centered approach",
    "End-to-end project management",
    "Premium material sourcing",
  ];

  return (
    <section
      id="about"
      className="bg-[#0a0a0a] py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: Images ── */}
          <div className="relative">
            {/* Main image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative w-full h-[520px]">
                <Image
                  src="/about_img_1.jpg"
                  alt="Interior design"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Gold border accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C9A96E]/20 pointer-events-none" />
            </motion.div>

            {/* Second image — floating */}
            <motion.div
              className="absolute -bottom-12 right-6 lg:-right-12 w-48 lg:w-64"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative w-full h-40 lg:h-52">
                <Image
                  src="/about_img_2.jpg"
                  alt="Interior design detail"
                  fill
                  className="object-cover shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 border border-[#C9A96E]/30 pointer-events-none" />
            </motion.div>

            {/* Badge */}
            <motion.div
              className="absolute -left-6 top-1/3 bg-[#C9A96E] p-6 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <p className="text-[#0a0a0a] text-3xl font-light leading-none">25+</p>
              <p className="text-[#0a0a0a]/70 text-xs tracking-[0.15em] uppercase mt-1 font-medium">
                Years of<br />Excellence
              </p>
            </motion.div>
          </div>

          {/* ── Right: Content ── */}
          <motion.div
            className="flex flex-col gap-8 pt-12 lg:pt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Label */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="w-8 h-px bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs font-medium tracking-[0.3em] uppercase">
                Our Story
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="text-4xl lg:text-5xl font-light text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Passion for design,
              <br />
              <span className="italic text-[#C9A96E]">your vision realized.</span>
            </motion.h2>

            {/* Body text */}
            <motion.div
              className="text-white/50 text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p>
                Our dedicated team of designers works closely with you to understand
                your vision and bring it to life with thoughtful attention to detail.
                Whether it&apos;s transforming a single room or an entire home.{" "}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.span
                      key="expanded"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      Elite Work is your go-to destination for exceptional home
                      interior design in Bengaluru. Our expert team brings creativity
                      and precision to every project, transforming homes into
                      personalized havens. From modern to timeless, minimalist to
                      luxurious — we cater to all styles, ensuring your space reflects
                      your unique taste. We handle everything from the first concept
                      to the final detail, so you can enjoy a seamless and inspiring
                      design journey.
                    </motion.span>
                  )}
                </AnimatePresence>
                {!isExpanded && <span>...</span>}
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              className="grid grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {features.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 border border-[#C9A96E]/40 rounded-full flex items-center justify-center flex-shrink-0">
                    <TiTick className="text-[#C9A96E] text-xs" />
                  </div>
                  <span className="text-white/60 text-sm">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Read more + CTA */}
            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[#C9A96E] text-sm font-medium tracking-[0.1em] uppercase border-b border-[#C9A96E]/30 pb-0.5 hover:border-[#C9A96E] transition-colors duration-300"
              >
                {isExpanded ? "Show Less" : "Our Story"}
              </button>
              <Link href="tel:+917406299605">
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:border-[#C9A96E]/40 transition-colors duration-300">
                    <FaPhoneAlt className="text-white/40 text-xs group-hover:text-[#C9A96E] transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs tracking-wider uppercase">Call Us</p>
                    <p className="text-white text-sm font-medium">+(91) 7406299605</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Founders */}
            <motion.div
              className="pt-4 border-t border-white/5 flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {[
                { name: "Ram Kripal Yadav", role: "Founder" },
                { name: "Raj Kumar R", role: "Co-Founder & Managing Director" },
              ].map((person, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CgProfile className="text-3xl text-[#C9A96E]/60" />
                  <div>
                    <p className="text-white text-sm font-medium">{person.name}</p>
                    <p className="text-white/30 text-xs">{person.role}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}