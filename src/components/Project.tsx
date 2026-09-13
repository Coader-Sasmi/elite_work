"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Project() {
  const categories = ["All", "Living Space", "Kitchen", "Bedroom", "Carpentry & Furniture", "False Ceilings"];
  const [activeCategory, setActiveCategory] = useState("All");

  const projectArr = [
    {
      image: "/Portfolio/Bedroom/Bedroom-1.webp",
      category: "Bedroom",
      title: "Urban Retreat",
    },
    {
      image: "/Portfolio/Bedroom/Bedroom-2.JPG",
      category: "Bedroom",
      title: "Cozy Comfort",
    },
    {
      image: "/Portfolio/Bedroom/Bedroom-3.JPG",
      category: "Bedroom",
      title: "Tranquil Corner",
    },
    {
      image: "/Portfolio/Bedroom/Bedroom-4.JPG",
      category: "Bedroom",
      title: "Restful Elegance",
    },
    {
      image: "/Portfolio/Ceilings/Ceilings-1.JPG",
      category: "False Ceilings",
      title: "Coastal Vibes",
    },
    {
      image: "/Portfolio/Ceilings/Ceilings-2.JPG",
      category: "False Ceilings",
      title: "Architectural Accent",
    },
    {
      image: "/Portfolio/Ceilings/Ceilings-3.JPG",
      category: "False Ceilings",
      title: "Layered Elegance",
    },
    {
      image: "/Portfolio/Ceilings/Ceilings-4.JPG",
      category: "False Ceilings",
      title: "Statement Overhead",
    },
    {
      image: "/Portfolio/Furniture/Furniture-1.JPG",
      category: "Carpentry & Furniture",
      title: "Minimalist Haven",
    },
    {
      image: "/Portfolio/Furniture/Furniture-2.jpeg",
      category: "Carpentry & Furniture",
      title: "Curated Comfort",
    },
    {
      image: "/Portfolio/Furniture/Furniture-3.JPG",
      category: "Carpentry & Furniture",
      title: "Timeless Pieces",
    },
    {
      image: "/Portfolio/Furniture/Furniture-4.webp",
      category: "Carpentry & Furniture",
      title: "Refined Living",
    },
    {
      image: "/Portfolio/Kitchen/Kitchen-1.webp",
      category: "Kitchen",
      title: "Modern Culinary Space",
    },
    {
      image: "/Portfolio/Kitchen/Kitchen-2.JPG",
      category: "Kitchen",
      title: "Chef's Sanctuary",
    },
    {
      image: "/Portfolio/Kitchen/Kitchen-3.JPG",
      category: "Kitchen",
      title: "Sleek Functionality",
    },
    {
      image: "/Portfolio/Kitchen/Kitchen-4.webp",
      category: "Kitchen",
      title: "Warm Gathering Space",
    },
    {
      image: "/Portfolio/Living-Space/Living-Space-1.webp",
      category: "Living Space",
      title: "Serene Living",
    },
    {
      image: "/Portfolio/Living-Space/Living-Space-2.webp",
      category: "Living Space",
      title: "Open Concept Charm",
    },
    {
      image: "/Portfolio/Living-Space/Living-Space-3.webp",
      category: "Living Space",
      title: "Elegant Comfort",
    },
    {
      image: "/Portfolio/Living-Space/Living-Space-4.jpg",
      category: "Living Space",
      title: "Contemporary Retreat",
    },
  ];

const filtered = activeCategory === "All"
  ? categories
      .filter((cat) => cat !== "All" && cat !== "Carpentry & Furniture")
      .map((cat) => projectArr.find((p) => p.category === cat))
      .filter((p): p is (typeof projectArr)[number] => p !== undefined)
  : projectArr.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] py-16"
    >
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs font-medium tracking-[0.3em] uppercase">
                Portfolio
              </span>
            </div>
            <motion.h2
              className="text-4xl lg:text-5xl font-light text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Projects that define
              <br />
              <span className="italic text-[#C9A96E]">our style.</span>
            </motion.h2>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileTap={{ scale: 0.96 }}
                className={`px-3 py-2 text-xs tracking-[0.15em] uppercase transition-all duration-300 ${activeCategory === cat
                    ? "bg-[#C9A96E] text-[#0a0a0a] font-semibold"
                    : "border text-white border-white/30 hover:border-white/100"
                  }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.image}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative overflow-hidden group cursor-pointer h-[340px] lg:h-[400px]"
              >
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent" />
                <motion.div
                  className="absolute inset-0 bg-[#C9A96E]/5"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Category tag */}
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 bg-[#0a0a0a]/60 backdrop-blur-sm text-white/60 text-xs tracking-[0.15em] uppercase border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 pl-8">
                  <motion.div
                    className="overflow-hidden"
                    initial={false}
                  >
                    <h3 className="text-white text-2xl font-light">{project.title}</h3>
                  </motion.div>

                  {/* Gold line that slides in on hover */}
                  <motion.div
                    className="h-px bg-[#C9A96E] mt-1 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}