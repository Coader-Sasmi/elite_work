"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Project() {
  const categories = ["All", "Architecture", "Bedroom", "Kitchen", "Living Space"];
  const [activeCategory, setActiveCategory] = useState("All");

  const projectArr = [
    {
      image: "project_1.jpg",
      category: "Architecture",
      title: "Urban Retreat",
      subTitle: "Modern Design Meets Comfort",
      size: "large",
    },
    {
      image: "project_2.jpg",
      category: "Bedroom",
      title: "Luxurious Loft",
      subTitle: "Industrial Chic for Living",
      size: "small",
    },
    {
      image: "project_3.jpg",
      category: "Living Space",
      title: "Coastal Vibes",
      subTitle: "Serenity by the Sea",
      size: "small",
    },
    {
      image: "project_4.jpg",
      category: "Kitchen",
      title: "Minimalist Haven",
      subTitle: "Simple, Clean, Inviting",
      size: "large",
    },
  ];

  const filtered = activeCategory === "All"
    ? projectArr
    : projectArr.filter(p => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

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
                className={`px-5 py-2 text-xs tracking-[0.15em] uppercase transition-all duration-300 ${activeCategory === cat
                    ? "bg-[#C9A96E] text-[#0a0a0a] font-semibold"
                    : "border border-white/10 text-white/40 hover:text-white hover:border-white/30"
                  }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative overflow-hidden group cursor-pointer ${project.size === "large" ? "md:row-span-1" : ""
                  }`}
                style={{ height: project.size === "large" ? "500px" : "340px" }}
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
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.div
                    className="overflow-hidden"
                    initial={false}
                  >
                    <h3 className="text-white text-2xl font-light mb-1">{project.title}</h3>
                    <p className="text-white/50 text-sm">{project.subTitle}</p>
                  </motion.div>

                  {/* Gold line that slides in on hover */}
                  <motion.div
                    className="h-px bg-[#C9A96E] mt-4 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-4 text-white/60 text-sm tracking-[0.15em] uppercase hover:text-white transition-colors duration-300"
          >
            View All Projects
            <span className="w-12 h-px bg-white/20 group-hover:w-20 group-hover:bg-[#C9A96E] transition-all duration-500" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}