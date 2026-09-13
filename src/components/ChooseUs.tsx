"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { BsDoorOpen } from "react-icons/bs";
import { GiWoodenChair } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbSofa } from "react-icons/tb";

const features = [
  {
    icon: <BsDoorOpen className="text-xl" />,
    number: "01",
    title: "Tailored Design Solutions",
    subTitle:
      "Every project begins with understanding you - your lifestyle, preferences, and aspirations - creating spaces that feel unmistakably yours.",
  },
  {
    icon: <TbSofa className="text-xl" />,
    number: "02",
    title: "Seamless Execution",
    subTitle:
      "From mood boards to move-in, we orchestrate every element of your project with precision, transparency, and zero surprises.",
  },
  {
    icon: <GiWoodenChair className="text-xl" />,
    number: "03",
    title: "Client-First Collaboration",
    subTitle:
      "Your input shapes every decision. We believe the best interiors are co-created - expert guidance meeting personal vision.",
  },
  {
    icon: <MdOutlineDesignServices className="text-xl" />,
    number: "04",
    title: "Premium Craftsmanship",
    subTitle:
      "We work with curated craftspeople and premium suppliers - delivering finishes that stand the test of time.",
  },
];

const images = [
  { src: "/why_choose_1.jpg", span: "lg:col-span-7 col-span-12" },
  { src: "/why_choose_2.jpg", span: "lg:col-span-5 col-span-12" },
  { src: "/why_choose_3.jpg", span: "lg:col-span-5 col-span-12" },
  { src: "/why_choose_4.jpg", span: "lg:col-span-7 col-span-12" },
];

const stats = [
  { value: "1650+", label: "Projects Delivered" },
  { value: "25+", label: "Years of Experience" },
  { value: "87%", label: "Client Retention" },
  // { value: "12+", label: "Design Awards" },
];

// Animates the numeric part of a stat value (e.g. "1650" in "1650+") from 0
// up to its target once the element scrolls into view. Non-numeric suffixes
// like "+" or "%" are preserved as-is.
function CountUpStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
    // Reset to 0 when it scrolls out of view so it counts up again next time
    count.set(0);
  }, [isInView, target, count]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${latest}${suffix}`;
      }
    });
    return unsubscribe;
  }, [rounded, suffix]);

  return (
    <div className="bg-[#111111] px-8 py-10 flex flex-col gap-2">
      <span ref={ref} className="text-4xl font-semibold text-white font-bold">
        0{suffix}
      </span>
      <span className="text-white/70 text-xs font-medium tracking-[0.15em] uppercase">
        {label}
      </span>
    </div>
  );
}

export default function ChooseUs() {
  return (
    <section className="bg-[#111111] py-16">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-px bg-[#C9A96E]" />
          <span className="text-[#C9A96E] text-xs font-medium tracking-[0.3em] uppercase">
            Why Elite Work
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Content */}
          <div className="flex flex-col gap-12">
            <motion.h2
              className="text-4xl lg:text-5xl font-light text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              A different kind of
              <br />
              <span className="italic text-[#C9A96E]">design studio.</span>
            </motion.h2>

            {/* Feature list */}
            <div className="flex flex-col gap-8">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  className="group flex gap-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.12 }}
                >
                  {/* Number + icon */}
                  <div className="flex flex-col items-center gap-2 flex-shrink-0">
                    {/* <span className="text-[#C9A96E] text-xs font-medium tracking-wider">
                      {item.number}
                    </span> */}
                    <div className="w-10 h-10 border border-white/70 group-hover:border-[#C9A96E]/80 rounded-full flex items-center justify-center transition-colors duration-500">
                      <span className="text-white/70 group-hover:text-[#C9A96E] transition-colors duration-500">
                        {item.icon}
                      </span>
                    </div>
                    {i < features.length - 1 && (
                      <div className="flex-1 w-px bg-white/10 h-8" />
                    )}
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-white text-base font-medium">{item.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{item.subTitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Image grid */}
          <motion.div
            className="grid grid-cols-12 gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {images.map((img, i) => (
              <motion.div
                key={i}
                className={`${img.span} overflow-hidden`}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Fixed-height wrapper required for next/image fill mode */}
                <div className="relative w-full h-52">
                  <Image
                    src={img.src}
                    alt="Interior design"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-px bg-white/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, i) => (
            <CountUpStat key={i} value={stat.value} label={stat.label} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}