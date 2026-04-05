"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const serviceArr = [
    {
      image: "./service_1.jpg",
      number: "01",
      title: "Residential Interior Design",
      subTitle: "Personalized living spaces crafted around your lifestyle, taste, and functional needs.",
      tag: "Homes & Apartments",
    },
    {
      image: "./service_2.jpg",
      number: "02",
      title: "Commercial Interior Design",
      subTitle: "Elevating business environments with professional spaces that inspire productivity.",
      tag: "Offices & Retail",
    },
    {
      image: "./service_3.jpg",
      number: "03",
      title: "Furniture & Decor Curation",
      subTitle: "Handpicked furniture and decor selections that complement your unique aesthetic.",
      tag: "Styling & Selection",
    },
    {
      image: "./service_1.jpg",
      number: "04",
      title: "Renovation & Turnkey Projects",
      subTitle: "Complete transformation from concept to completion — we handle every detail.",
      tag: "Full Renovations",
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#0d0d0d] py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col gap-6 max-w-xl">
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs font-medium tracking-[0.3em] uppercase">
                What We Do
              </span>
            </div>
            <motion.h2
              className="text-4xl lg:text-5xl font-light text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Design services for
              <br />
              <span className="italic text-[#C9A96E]">every vision.</span>
            </motion.h2>
          </div>
          <motion.p
            className="text-white/40 text-base leading-relaxed max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From bespoke concept development to flawless final installation —
            every project is a new story waiting to be told.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-white/5">
          {serviceArr.map((item, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden group cursor-pointer bg-[#0d0d0d]"
              style={{ height: "420px" }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              {/* Background image */}
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
                animate={{ scale: hoveredIndex === i ? 1.06 : 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/10" />
              <motion.div
                className="absolute inset-0 bg-[#C9A96E]/10"
                animate={{ opacity: hoveredIndex === i ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="text-[#C9A96E]/50 text-xs tracking-[0.2em] font-medium uppercase">
                    {item.tag}
                  </span>
                  <motion.div
                    className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center"
                    animate={{
                      rotate: hoveredIndex === i ? 45 : -45,
                      borderColor: hoveredIndex === i ? "#C9A96E" : "rgba(255,255,255,0.2)",
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <MdArrowRightAlt className="text-white text-lg" />
                  </motion.div>
                </div>

                <div className="flex flex-col gap-3">
                  <span className="text-white/20 text-6xl font-light leading-none">
                    {item.number}
                  </span>
                  <h3 className="text-white text-xl font-light">{item.title}</h3>
                  <motion.p
                    className="text-white/50 text-sm leading-relaxed max-w-xs"
                    animate={{ opacity: hoveredIndex === i ? 1 : 0.6 }}
                    transition={{ duration: 0.4 }}
                  >
                    {item.subTitle}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.03, backgroundColor: "#D4B87A" }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 bg-[#C9A96E] text-[#0a0a0a] text-sm font-semibold tracking-[0.15em] uppercase transition-colors duration-300"
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}