"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ProgressBar from "./ProgressBar";

const skills = [
  { title: "Space Planning & Layout Design", number: 95 },
  { title: "Material & Finish Selection", number: 90 },
  { title: "Project Management & Delivery", number: 92 },
  { title: "Sustainable & Eco-Friendly Design", number: 75 },
  { title: "3D Visualization & Rendering", number: 85 },
];

export default function Skills() {
  return (
    <section
      className="bg-[#0a0a0a] py-24 lg:py-32 overflow-hidden"
      style={{ backgroundImage: "url('/skill_bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">

          {/* Left: Content */}
          <div className="flex flex-col gap-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-[#C9A96E]" />
                <span className="text-[#C9A96E] text-xs font-medium tracking-[0.3em] uppercase">
                  Our Expertise
                </span>
              </div>
              <motion.h2
                className="text-4xl lg:text-5xl font-light text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Skills that shape
                <br />
                <span className="italic text-[#C9A96E]">your dream home.</span>
              </motion.h2>
            </div>

            <motion.p
              className="text-white/40 text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our team brings decades of combined expertise across every
              discipline of interior design — from space planning and material
              selection to full-scale project management.
            </motion.p>

            {/* Skills */}
            <div className="flex flex-col gap-8">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">{skill.title}</span>
                    <span className="text-[#C9A96E] text-sm font-light">{skill.number}%</span>
                  </div>
                  <ProgressBar progress={skill.number} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Images */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-4">

              {/* Large top image */}
              <motion.div
                className="col-span-2 relative w-full h-64"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <Image
                  src="/skills1.jpg"
                  alt="Interior design skill"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Bottom left */}
              <motion.div
                className="relative w-full h-52"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image
                  src="/skills2.jpg"
                  alt="Interior design detail"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Bottom right */}
              <motion.div
                className="relative w-full h-52"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Image
                  src="/skills3.jpg"
                  alt="Interior design finish"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Gold accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-[#C9A96E]/20 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}