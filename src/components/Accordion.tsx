"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const accordionData = [
  {
    key: 1,
    header: "Our History",
    desc: "Founded in 1988, Elite Work was born from a deep passion for creating beautiful and purposeful spaces. What began as a small team of dedicated designers has grown into Bengaluru's most trusted interior design studio — with over 850 completed projects and a reputation built on creative excellence and client trust.",
  },
  {
    key: 2,
    header: "Our Mission",
    desc: "At Elite Work, our mission is to elevate the lives of our clients by creating spaces that are both aesthetically extraordinary and profoundly functional. We believe a well-designed environment shapes how you feel, work, and live — and we take that responsibility seriously.",
  },
  {
    key: 3,
    header: "Our Vision",
    desc: "We aspire to be India's most celebrated interior design studio — renowned not just for beautiful spaces, but for design that endures. We continuously push boundaries, embracing new technologies and timeless principles to create interiors that inspire for decades.",
  },
];

export default function AccordionExpandDefault() {
  const [expanded, setExpanded] = useState<number | false>(1);

  return (
    <div className="flex flex-col divide-y divide-white/5">
      {accordionData.map((item) => (
        <div key={item.key} className="py-5">
          <button
            className="w-full flex items-center justify-between text-left group"
            onClick={() => setExpanded(expanded === item.key ? false : item.key)}
          >
            <span className={`text-base font-light transition-colors duration-300 ${expanded === item.key ? "text-[#C9A96E]" : "text-white/70 group-hover:text-white"
              }`}>
              {item.header}
            </span>
            <motion.div
              animate={{ rotate: expanded === item.key ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className={`w-6 h-6 border rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${expanded === item.key
                  ? "border-[#C9A96E] text-[#C9A96E]"
                  : "border-white/20 text-white/30"
                }`}
            >
              <span className="text-lg leading-none">+</span>
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {expanded === item.key && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <p className="text-white/40 text-sm leading-relaxed pt-4 pr-8">
                  {item.desc}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}