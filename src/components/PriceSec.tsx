"use client";

import { motion } from "framer-motion";
import { MdCurrencyRupee } from "react-icons/md";
import { TiTick } from "react-icons/ti";

type PriceItem = {
  id: string;
  title: string;
  price: string;
  features: string[];
  featured?: boolean;
};

const features = [
  "Initial design consultation",
  "2D floor plan & layout",
  "Material & finish recommendations",
  "Project coordination",
];

export function CardComponent({ curElm }: { curElm: PriceItem }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex flex-col gap-6 p-8 border transition-colors duration-500 ${curElm.featured
          ? "border-[#C9A96E] bg-[#C9A96E]/5"
          : "border-white/10 bg-[#111] hover:border-white/20"
        }`}
    >
      {curElm.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#C9A96E] text-[#0a0a0a] text-xs font-semibold tracking-[0.15em] uppercase">
          Most Popular
        </div>
      )}

      <div className="flex items-start justify-between">
        <div>
          <p className="text-white/30 text-xs tracking-[0.2em] uppercase mb-1">{curElm.id}</p>
          <h3 className="text-white text-xl font-light">{curElm.title}</h3>
        </div>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${curElm.featured ? "bg-[#C9A96E]/20" : "bg-white/5"
          }`}>
          <MdCurrencyRupee className={`text-lg ${curElm.featured ? "text-[#C9A96E]" : "text-white/30"}`} />
        </div>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-1">
        <span className="text-white/30 text-sm">Starting at</span>
        <span className="text-white text-4xl font-light">₹{curElm.price}</span>
        <span className="text-white/30 text-sm">*</span>
      </div>

      {/* Divider */}
      <div className={`h-px ${curElm.featured ? "bg-[#C9A96E]/30" : "bg-white/5"}`} />

      {/* Features */}
      <div className="flex flex-col gap-3">
        {curElm.features.map((f, i) => (
          <div key={i} className="flex items-center gap-3">
            <TiTick className={`text-sm flex-shrink-0 ${curElm.featured ? "text-[#C9A96E]" : "text-white/30"}`} />
            <span className="text-white/50 text-sm">{f}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`mt-2 py-3 text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300 ${curElm.featured
            ? "bg-[#C9A96E] text-[#0a0a0a] hover:bg-[#D4B87A]"
            : "border border-white/10 text-white/60 hover:border-white/30 hover:text-white"
          }`}
      >
        Get Free Quote
      </motion.button>
    </motion.div>
  );
}

export default function PriceSec() {
  const priceArr: PriceItem[] = [
    {
      id: "01",
      title: "1 BHK",
      price: "2.2L",
      features: [...features],
    },
    {
      id: "02",
      title: "2 BHK",
      price: "2.8L",
      features: [...features, "3D visualization included"],
      featured: true,
    },
    {
      id: "03",
      title: "3 BHK",
      price: "3.4L",
      features: [...features, "3D visualization included"],
    },
    {
      id: "04",
      title: "Villas & Premium",
      price: "5.2L",
      features: [...features, "3D visualization", "Premium material sourcing", "Dedicated project manager"],
    },
  ];

  return (
    <section id="price" className="bg-[#0a0a0a] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs font-medium tracking-[0.3em] uppercase">
                Investment
              </span>
            </div>
            <motion.h2
              className="text-4xl lg:text-5xl font-light text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Quality design at
              <br />
              <span className="italic text-[#C9A96E]">the right price.</span>
            </motion.h2>
          </div>
          <motion.p
            className="text-white/40 text-base leading-relaxed max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Flexible pricing tailored to your home and vision.
            All prices are starting points — we&apos;ll craft a detailed quote
            for your specific requirements.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {priceArr.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <CardComponent curElm={item} />
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-white/20 text-xs text-center mt-8 tracking-wide">
          * Prices are indicative starting costs and may vary based on project scope, materials, and specifications.
        </p>
      </div>
    </section>
  );
}