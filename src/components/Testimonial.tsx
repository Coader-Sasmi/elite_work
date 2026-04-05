"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaStar } from "react-icons/fa";

export default function Testimonial() {
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      quote:
        "I couldn't be happier with the transformation of my home. From the very first consultation, the team at Elite Work took the time to truly understand my vision. Every detail was considered, every finish was perfect. This isn't just interior design — it's art.",
      name: "Raj Kumar R",
      role: "Co-Founder, Elite Work",
      rating: 5,
    },
    {
      quote:
        "Working with Elite Work was the best decision we made for our office renovation. The space is now a true reflection of our brand — sophisticated, functional, and incredibly inspiring. Our team productivity has visibly improved.",
      name: "Priya Sharma",
      role: "CEO, TechVentures Bangalore",
      rating: 5,
    },
    {
      quote:
        "Our 3BHK apartment looked like a completely different space. The team was professional, punctual, and delivered beyond expectations. The design balances aesthetics with practicality perfectly.",
      name: "Arjun Mehta",
      role: "Homeowner, Whitefield",
      rating: 5,
    },
  ];

  return (
    <section className="bg-[#111111] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Image */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <img
              src="./testimonial_img.jpg"
              alt="Happy client"
              className="w-full h-[560px] object-cover"
            />
            {/* Gold border offset */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-[#C9A96E]/20 pointer-events-none" />
            {/* Dark overlay block */}
            <div className="absolute bottom-8 left-8 right-8 bg-[#0a0a0a]/80 backdrop-blur-sm p-6 border border-white/5">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-[#C9A96E] text-xs" />
                ))}
              </div>
              <p className="text-white/60 text-xs leading-relaxed">
                &ldquo;Rated 4.9/5 across 200+ verified client reviews&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Right: Testimonials */}
          <div className="order-1 lg:order-2 flex flex-col gap-10">
            {/* Label */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-[#C9A96E]" />
                <span className="text-[#C9A96E] text-xs font-medium tracking-[0.3em] uppercase">
                  Client Stories
                </span>
              </div>
              <motion.h2
                className="text-4xl lg:text-5xl font-light text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Trusted by homes
                <br />
                <span className="italic text-[#C9A96E]">across Bengaluru.</span>
              </motion.h2>
            </div>

            {/* Testimonial quote */}
            <motion.div
              key={active}
              className="flex flex-col gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(testimonials[active].rating)].map((_, i) => (
                  <FaStar key={i} className="text-[#C9A96E] text-sm" />
                ))}
              </div>

              {/* Quote mark */}
              <div className="text-[#C9A96E]/20 text-8xl font-serif leading-none -mb-4">&ldquo;</div>

              <p className="text-white/70 text-lg font-light leading-relaxed">
                {testimonials[active].quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-2 border-t border-white/5">
                <CgProfile className="text-4xl text-[#C9A96E]/50" />
                <div>
                  <p className="text-white text-base font-medium">{testimonials[active].name}</p>
                  <p className="text-white/30 text-xs">{testimonials[active].role}</p>
                </div>
              </div>
            </motion.div>

            {/* Pagination dots */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 ${active === i
                      ? "w-8 h-px bg-[#C9A96E]"
                      : "w-4 h-px bg-white/20 hover:bg-white/40"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}