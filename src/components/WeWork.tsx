"use client";

import { motion } from "framer-motion";
import { BsDoorOpen } from "react-icons/bs";
import { GoStopwatch } from "react-icons/go";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdOutlineTableRestaurant } from "react-icons/md";
import Slider from "react-slick";

const steps = [
  {
    icon: <HiOutlineLightBulb className="text-2xl" />,
    step: "Step 01",
    title: "Initial Consultation",
    subTitle:
      "We meet to understand your vision, preferences, budget, and timeline — setting the foundation for everything that follows.",
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
      "We coordinate every vendor, craftsperson, and timeline with meticulous precision — so you don't have to.",
  },
  {
    icon: <MdOutlineTableRestaurant className="text-2xl" />,
    step: "Step 04",
    title: "Final Handover",
    subTitle:
      "A thorough walkthrough of your transformed space ensures every detail exceeds your expectations.",
  },
];

const logos = [
  { image: "./client1.png" },
  { image: "./client2.png" },
  { image: "./client3.png" },
  { image: "./client4.png" },
  { image: "./client5.png" },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 0,
  cssEase: "linear",
  pauseOnHover: false,
  arrows: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

export default function WeWork() {
  return (
    <section className="bg-[#0d0d0d] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

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
            className="text-white/40 text-base leading-relaxed max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A refined four-step process that transforms your brief into a
            beautifully finished space — with clarity at every stage.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 mb-24">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="bg-[#0d0d0d] p-8 flex flex-col gap-6 group hover:bg-[#111] transition-colors duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              {/* Step number + icon */}
              <div className="flex items-center justify-between">
                <span className="text-[#C9A96E]/30 text-xs tracking-[0.2em] font-medium uppercase">
                  {step.step}
                </span>
                <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:border-[#C9A96E]/30 transition-colors duration-500">
                  <span className="text-white/30 group-hover:text-[#C9A96E] transition-colors duration-500">
                    {step.icon}
                  </span>
                </div>
              </div>

              {/* Gold accent line */}
              <div className="w-8 h-px bg-[#C9A96E]/30 group-hover:w-16 group-hover:bg-[#C9A96E] transition-all duration-500" />

              <div className="flex flex-col gap-3">
                <h3 className="text-white text-lg font-light">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.subTitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 mb-16" />

        {/* Logo Slider */}
        <div className="flex items-center gap-6 sm:gap-8">
          <span className="text-white/20 text-xs tracking-[0.2em] uppercase whitespace-nowrap flex-shrink-0">
            Trusted by
          </span>
          <div className="flex-1 overflow-hidden">
            <Slider {...sliderSettings}>
              {logos.map((logo, i) => (
                <div key={i} className="px-4 sm:px-6">
                  {/* Fixed-height container equalizes all logos */}
                  <div className="h-16 flex items-center justify-center">
                    <img
                      src={logo.image}
                      alt="Client logo"
                      className="h-full w-auto max-w-[120px] object-contain opacity-30 hover:opacity-60 transition-opacity duration-300 filter grayscale"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

      </div>
    </section>
  );
}