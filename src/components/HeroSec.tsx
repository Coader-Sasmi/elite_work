"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { LuMoveRight } from "react-icons/lu";

export default function HeroSec() {
  return (
    <>
      <section className="!flex h-fit items-center">
        <div className="main-container flex flex-col gap-10 justify-start lg:py-40 py-24  w-full h-full text-white">
          <motion.div
            className="flex gap-3 items-center"
            initial={{ y: 50, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
          >
            <LuMoveRight />
            <h5 className="font-medium">Inspired Interiors</h5>
          </motion.div>
          <h1 className="lg:text-7xl text-3xl font-semibold">
            Designing your dream spaces, <br />
            one room at a time
          </h1>
          <motion.p
            className="font-semibold text-xl"
            initial={{ y: 50, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5, delay: 0.5 }}
          >
            We specialize in creating personalized, functional, and stylish{" "}
            <br />
            interiors that reflect your unique vision.
          </motion.p>
          <motion.div
            className="flex flex-row md:gap-8 gap-4"
            initial={{ y: 50, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5, delay: 1 }}
          >
            <motion.div
              whileHover="hover"
              className="relative w-40 cursor-pointer overflow-hidden p-5 bg-quaternary"
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
                <button className="relative z-10 flex gap-3 items-center font-semibold px-4 py-2">
                  Explore More <BsArrowRight />
                </button>
              </motion.div>
            </motion.div>
            <motion.div
              whileHover="hover"
              className="relative w-40 cursor-pointer overflow-hidden p-5 bg-secondary"
            >
              <motion.div
                className="absolute inset-0 bg-quaternary whitespace-nowrap"
                initial={{ width: "0%" }}
                variants={{
                  hover: {
                    width: "100%",
                    transition: { duration: 0.4, ease: "easeInOut" },
                  },
                }}
              >
                <Link href="/#projects">
                  <button className="relative z-10 flex gap-3 items-center font-semibold px-4 py-2 text-white">
                    View Projects <BsArrowRight />
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
