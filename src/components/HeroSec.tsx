"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { memo, useRef } from "react";

// ── Static data outside component ────────────────────────────────────────────
const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "850+", label: "Projects Completed" },
  { value: "95%", label: "Client Satisfaction" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

// ── Memoized stat item ────────────────────────────────────────────────────────
const StatItem = memo(({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col gap-1">
    <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-white">{value}</span>
    <span className="text-[10px] sm:text-xs text-white/40 tracking-[0.15em] uppercase">{label}</span>
  </div>
));
StatItem.displayName = "StatItem";

export default function HeroSec() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-end overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background with parallax */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: "url('./about_img_1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y,
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-transparent" />

      {/* Decorative gold line */}
      {/* <motion.div
        className="hidden md:block absolute left-8 lg:left-12 top-1/2 w-px bg-gradient-to-b from-transparent via-[#C9A96E] to-transparent"
        style={{ height: "200px", y: "-50%" }}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.2, ease: EASE }}
      /> */}

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-24 pb-16 sm:pb-20 lg:pb-28"
        style={{ opacity }}
      >
        <div className="max-w-4xl">

          {/* Label */}
          <motion.div
            className="flex items-center gap-3 mb-6 sm:mb-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: EASE }}
          >
            <div className="w-8 hidden md:block sm:w-12 h-px bg-[#C9A96E] shrink-0" />
            <span className="text-[#C9A96E] hidden md:block text-xs font-medium tracking-[0.3em] uppercase">
              Inspired Interiors Since 1988
            </span>
          </motion.div>

          {/* Heading */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.0] tracking-tight"
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1.1, ease: EASE }}
            >
              Crafting Spaces
              <br />
              <span className="italic text-[#C9A96E]">That Inspire.</span>
            </motion.h1>
          </div>

          {/* Subheading */}
          <motion.p
            className="text-white/50 text-base md:text-lg font-light max-w-xl leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Bengaluru&apos;s premier interior design studio — where your vision
            meets our passion for creating extraordinary living experiences.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Link href="/#about" prefetch>
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "#D4B87A" }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-[#C9A96E] text-[#0a0a0a] text-sm font-semibold tracking-[0.12em] uppercase rounded-sm transition-colors duration-300"
              >
                Explore Our Work
              </motion.button>
            </Link>
            <Link href="/#projects" prefetch>
              <motion.button
                whileHover={{ scale: 1.03, borderColor: "#C9A96E", color: "#C9A96E" }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 border border-white/20 text-white text-sm font-medium tracking-[0.12em] uppercase rounded-sm transition-colors duration-300"
              >
                View Portfolio
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap gap-10 lg:gap-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {stats.map((s) => (
              <StatItem key={s.label} value={s.value} label={s.label} />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-8 lg:right-12 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <span className="text-white/30 text-xs tracking-[0.2em] uppercase rotate-90 mb-4">
          Scroll
        </span>
        <motion.div
          className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}