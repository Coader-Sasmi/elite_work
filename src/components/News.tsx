"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function News() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const articles = [
    {
      image: "./why_choose_1.jpg",
      category: "Design Tips",
      date: "March 2025",
      title: "How to Choose the Perfect Furniture for Small Spaces",
      excerpt: "Smart furniture choices can make even the smallest rooms feel generous and intentional.",
    },
    {
      image: "./why_choose_2.jpg",
      category: "Trends",
      date: "February 2025",
      title: "Innovative Decor Ideas Shaping Bengaluru Homes in 2025",
      excerpt: "From biophilic design to warm minimalism — the trends defining Indian interiors this year.",
    },
    {
      image: "./why_choose_3.jpg",
      category: "Industry",
      date: "January 2025",
      title: "The Craft of Timeless Interior Design",
      excerpt: "Beyond trends: understanding the principles that make a space feel enduringly beautiful.",
    },
  ];

  return (
    <section className="bg-[#0d0d0d] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs font-medium tracking-[0.3em] uppercase">
                Journal
              </span>
            </div>
            <motion.h2
              className="text-4xl lg:text-5xl font-light text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Your guide to
              <br />
              <span className="italic text-[#C9A96E]">inspired living.</span>
            </motion.h2>
          </div>
          <motion.p
            className="text-white/40 text-base leading-relaxed max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Design insights, trend analyses, and expert advice from the
            Elite Work studio — curated for the discerning homeowner.
          </motion.p>
        </div>

        {/* Articles */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.article
              key={i}
              className="flex flex-col gap-5 cursor-pointer group"
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              {/* Image */}
              <div className="overflow-hidden relative" style={{ height: "280px" }}>
                <motion.img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  animate={{ scale: hoveredIndex === i ? 1.06 : 1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                />
                {/* Category overlay */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#0a0a0a]/70 text-[#C9A96E] text-xs tracking-[0.15em] uppercase">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3">
                <span className="text-white/20 text-xs tracking-wider">{article.date}</span>
                <h3 className="text-white text-lg font-light leading-snug group-hover:text-[#C9A96E] transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{article.excerpt}</p>
              </div>

              {/* Read more link */}
              <div className="flex items-center gap-3 group/link">
                <span className="text-white/40 text-xs tracking-[0.15em] uppercase group-hover:text-[#C9A96E] transition-colors duration-300">
                  Read Article
                </span>
                <motion.span
                  className="w-6 h-px bg-white/20 group-hover:w-12 group-hover:bg-[#C9A96E] transition-all duration-500"
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-4 text-white/50 text-sm tracking-[0.15em] uppercase hover:text-white transition-colors duration-300"
          >
            View All Articles
            <span className="w-12 h-px bg-white/20 group-hover:w-20 group-hover:bg-[#C9A96E] transition-all duration-500" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}