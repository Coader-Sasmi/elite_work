"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ProgressBar({ progress }: { progress: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative w-full h-px bg-white/10">
      <motion.div
        className="absolute top-0 left-0 h-full bg-[#C9A96E]"
        initial={{ width: 0 }}
        animate={{ width: inView ? `${progress}%` : 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      />
      {/* Dot at end */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#C9A96E]"
        initial={{ left: 0, opacity: 0 }}
        animate={{ left: inView ? `${progress}%` : 0, opacity: inView ? 1 : 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      />
    </div>
  );
}