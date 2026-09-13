"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BsDoorOpen } from "react-icons/bs";
import { GoStopwatch } from "react-icons/go";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdOutlineTableRestaurant } from "react-icons/md";

const steps = [
  {
    icon: <HiOutlineLightBulb className="text-2xl" />,
    step: "Step 01",
    title: "Initial Consultation",
    subTitle:
      "We meet to understand your vision, preferences, budget, and timeline - setting the foundation for everything that follows.",
  },
  {
    icon: <BsDoorOpen className="text-2xl" />,
    step: "Step 02",
    title: "Design Planning",
    subTitle:
      "Our team develops detailed concepts, material palettes, space layouts, and stunning 3D renderings for your approval.",
  },
  {
    icon: <GoStopwatch className="text-2xl" />,
    step: "Step 03",
    title: "Project Execution",
    subTitle:
      "We coordinate every vendor, craftsperson, and timeline with meticulous precision - so you don't have to.",
  },
  {
    icon: <MdOutlineTableRestaurant className="text-2xl" />,
    step: "Step 04",
    title: "Final Handover",
    subTitle:
      "A thorough walkthrough of your transformed space ensures every detail exceeds your expectations.",
  },
];

export default function WeWork() {

  return (
    <section className="bg-[#0d0d0d] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs font-medium tracking-[0.3em] uppercase">
                Our Process
              </span>
            </div>
            <motion.h2
              className="text-4xl lg:text-5xl font-light text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              From concept to
              <br />
              <span className="italic text-[#C9A96E]">completion.</span>
            </motion.h2>
          </div>
          <motion.p
            className="text-white/70 text-base leading-relaxed max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A refined four-step process that transforms your brief into a
            beautifully finished space - with clarity at every stage.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="bg-[#0d0d0d] p-8 flex flex-col gap-6 group hover:bg-[#111] transition-colors duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[#C9A96E]/80 text-xs tracking-[0.2em] font-medium uppercase">
                  {step.step}
                </span>
                <div className="w-10 h-10 border border-white/100 rounded-full flex items-center justify-center group-hover:border-[#C9A96E]/50 transition-colors duration-500">
                  <span className="text-white/80 group-hover:text-[#C9A96E] transition-colors duration-500">
                    {step.icon}
                  </span>
                </div>
              </div>
              <div className="w-8 h-px bg-[#C9A96E]/30 group-hover:w-16 group-hover:bg-[#C9A96E] transition-all duration-500" />
              <div className="flex flex-col gap-3">
                <h3 className="text-white text-lg font-light">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.subTitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}