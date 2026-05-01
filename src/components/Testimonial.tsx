"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "They are really professional and on time delivery by the team. Once we saw the sample pictures in website we strongly decided to go with them for our dream house project. And we are happy about our decision. Well planned spacing and vibrant color interior design and structural work at its best. Thanks Elite Interiors team Special mention to Mr. Rajkumar sir for all the process executed.we are very grateful to you sir.we are very happy for such a beautiful interior sir thank u 🙏",
    name: "kokila HC",
    role: "",
    rating: 5,
  },
  {
    quote:
      "I had the pleasure of working with Mr. Rajkumar and his team from Elitework. Their dedication to excellence and attention to detail transformed my home into a stunning space. The team's creativity, professionalism, and timely execution exceeded my expectations. I highly recommend their services for anyone seeking top-notch interior design.",
    name: "Tinu Varghese",
    role: "",
    rating: 5,
  },
  {
    quote:
      "Quality work done on time, Appreciated the changes I need they did without any extra charges.",
    name: "Ravi Vishwakrma",
    role: "",
    rating: 5,
  },
  {
    quote:
      "Elitework exceeded expectations! Exceptional craftsmanship, attention to detail, and a beautifully finished project. Highly recommend Elitework for top-notch carpentry!",
    name: "Dhurv Yadav",
    role: "",
    rating: 5,
  },
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
  {
    quote:
      "Thank you Mr. Raj Kumar work done on time and great work.",
    name: "Raghu poojari",
    role: "",
    rating: 5,
  },
  {
    quote:
      "Highly recommended budget friendly",
    name: "Ashish Yadav",
    role: "",
    rating: 5,
  },
  {
    quote:
      "Really happy with the interior by Elitework. Just how I wanted, thank's Raj.",
    name: "Abhishek Sharma",
    role: "",
    rating: 5,
  },
  {
    quote:
      "Had an amazing experience thankyou for such commendable work.",
    name: "prateek ravi",
    role: "",
    rating: 5,
  },
];

const SLIDE_INTERVAL = 4000; // ms between auto-slides

export default function Testimonial() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, SLIDE_INTERVAL);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleDotClick = (i: number) => {
    setActive(i);
    startAutoSlide(); // reset the timer so it doesn't jump immediately
  };

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
            {/* Fixed height wrapper for next/image fill */}
            <div className="relative w-full h-[560px]">
              <Image
                src="/testimonial_img.jpg"
                alt="Happy client"
                fill
                className="object-cover"
              />
            </div>

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

            {/* Pagination dots with animated progress */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className="relative overflow-hidden transition-all duration-300"
                  style={{ width: active === i ? 32 : 16, height: 2 }}
                >
                  {/* Background track */}
                  <span className="absolute inset-0 bg-white/20" />
                  {/* Animated fill for active dot */}
                  {active === i && (
                    <span
                      className="absolute inset-0 bg-[#C9A96E] origin-left"
                      style={{
                        animation: `progress ${SLIDE_INTERVAL}ms linear forwards`,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Progress animation keyframes */}
      <style jsx>{`
        @keyframes progress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}