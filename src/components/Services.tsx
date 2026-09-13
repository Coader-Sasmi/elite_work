"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const servicesArr = [
    {
      image: "./service/service_1.JPG",
      subtitle: ["Gypsum Ceiling", "Grid Ceiling", "PVC Ceiling", "Ceiling Partition"],
      tag: "False Ceiling",
    },
    {
      image: "./service/service_2.JPG",
      subtitle: ["Modular Kitchen", "Wardrobes", "TV Units", "Custom Furniture", "Dining Tables"],
      tag: "Carpentry",
    },
    {
      image: "./service/service_3.webp",
      subtitle: ["Interior Painting", "Exterior Painting", "Wall Texture", "Putty & Primer", "Wood Polishing"],
      tag: "Painting",
    },
    {
      image: "./service/service_4.webp",
      subtitle: ["Electrical Wiring", "Lighting Installation", "Switches & Sockets", "Fan Installation", "Electrical Fixtures"],
      tag: "Electrical Works",
    },
  ];

  const active = servicesArr[activeIndex];

  return (
    <section id="services" className="bg-[#0d0d0d] py-16">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-20">
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
            className="text-white/70 text-base leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From bespoke concept development to flawless final installation -
            every project is a new story waiting to be told.
          </motion.p>
        </div>

        {/* Services */}
        <motion.div
          className="grid lg:grid-cols-[minmax(0,420px)_1fr] gap-10 lg:gap-16 items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* List */}
          <div className="flex flex-col border-t border-white/10">
            {servicesArr.map((item, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={item.tag + i}
                  type="button"
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => setActiveIndex(i)}
                  className="group text-left border-b border-white/10 py-6 lg:py-7 flex items-start gap-5"
                >
                  <span
                    className={` mt-1.5 tabular-nums transition-colors duration-300 ${
                      isActive ? "text-[#C9A96E]" : "text-white/60"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1">
                    <h3
                      className={`text-2xl lg:text-[1.75rem] font-light transition-colors duration-300 ${
                        isActive ? "text-white" : "text-white/60 group-hover:text-white/70"
                      }`}
                    >
                      {item.tag}
                    </h3>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="text-white/70 leading-relaxed mt-2 overflow-hidden font-medium"
                        >
                          {item.subtitle.join(", ")}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Image panel */}
          <div className="relative w-full h-[320px] lg:h-[460px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.tag}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${active.image})` }}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <span className="absolute bottom-5 left-5 text-[#CEB27D] text-xs tracking-[0.2em] uppercase">
              {active.tag}
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}