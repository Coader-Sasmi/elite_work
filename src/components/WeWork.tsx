/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { CgArrowLongRightL } from "react-icons/cg";

export default function WeWork() {
  return (
    <aside className="bg-secondary h-screen">
      <section className="main-container py-10 flex flex-col gap-10">
        <section className="w-full flex flex-col gap-10">
          <motion.div
            className="flex gap-3 items-center text-white"
            initial={{ y: 50, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
          >
            <CgArrowLongRightL />
            <h5 className="font-medium">How We Work</h5>
          </motion.div>
          <div className="flex lg:flex-row flex-col gap-8 text-white">
            <h1 className="text-5xl font-semibold w-full">
              From concept to completion in
              <br /> <span className="text-quaternary">our work</span>
            </h1>
            <p className="w-full">
              Our comprehensive approach guides you through each phase of the
              design process, from initial brainstorming and conceptualization.
            </p>
          </div>
        </section>
      </section>
    </aside>
  );
}
