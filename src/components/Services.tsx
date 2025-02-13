/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { CgArrowLongRightL } from "react-icons/cg";

export default function Services() {
  return (
    <aside className="main-container py-10 flex flex-col gap-10">
      <section className="w-full flex flex-col gap-10">
        <motion.div
          className="flex gap-3 items-center text-quaternary"
          initial={{ y: 50, opacity: 0.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
        >
          <CgArrowLongRightL />
          <h5 className="font-medium">Our Services</h5>
        </motion.div>
        <div className="flex lg:flex-row flex-col gap-8">
          <h1 className="text-4xl font-semibold w-full">
            Innovative design services for
            <br /> <span className="text-quaternary">every need</span>
          </h1>
          <p className="w-full">
            We offer a range of bespoke interior design services tailored to
            your unique needs. From concept development to final installation.
          </p>
        </div>
      </section>
      <section className="flex justify-center items-center">
        <motion.div
          whileHover="hover"
          className="relative w-48 cursor-pointer overflow-hidden p-5 bg-quaternary"
        >
          <motion.div
            className="absolute inset-0 bg-secondary whitespace-nowrap"
            initial={{ width: "0%" }}
            variants={{
              hover: {
                width: "100%",
                transition: { duration: 0.4, ease: "easeInOut" },
              },
            }}
          >
            <button className="relative z-10 flex gap-3 items-center font-semibold px-6 text-white py-2">
              See All Services <BsArrowRight />
            </button>
          </motion.div>
        </motion.div>
      </section>
    </aside>
  );
}
