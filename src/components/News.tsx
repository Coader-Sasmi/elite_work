/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { CgArrowLongRightL } from "react-icons/cg";

export default function News() {
  const serviceArr = [
    {
      image: "./why_choose_1.jpg",
      title: "How Does One Go About a Buying Furniture?",
    },
    {
      image: "./why_choose_2.jpg",
      title: "Innovative Decor Ideas Shaping Homes Today",
    },
    {
      image: "./why_choose_3.jpg",
      title: "Design Industry Updates You Should Know About",
    },
  ];
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
          <h5 className="font-medium">Latest News</h5>
        </motion.div>
        <div className="flex lg:flex-row flex-col gap-8">
          <h1 className="text-5xl font-semibold w-full">
            <span className="text-quaternary">Your guide to</span> inspired{" "}
            <br />
            interiors
          </h1>
          <motion.p
            className="w-full"
            initial={{ y: 50, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            Your journey to inspired interiors begins here. Our blog offers a
            wealth of resources, including design tips, trend analyses.
          </motion.p>
        </div>
      </section>
      <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {serviceArr?.map((curElm, i) => (
          <motion.div
            key={i}
            className="flex flex-col gap-5"
            initial={{ y: 50, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2.5 }}
          >
            <img src={curElm?.image} alt="image" className="h-96 w-auto" />
            <h1 className="text-xl font-semibold">{curElm?.title}</h1>
            <div className="group flex gap-2 items-end cursor-pointer ">
              <p>Read More</p>
              <BsArrowRight className="group-hover:translate-x-2 delay-animation" />
            </div>
          </motion.div>
        ))}
      </section>
      <motion.section
        className="flex justify-center items-center"
        initial={{ y: 50, opacity: 0.5 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 3 }}
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
            <button className="relative z-10 flex gap-3 items-center font-semibold px-6 text-white py-2">
              See All Blogs <BsArrowRight />
            </button>
          </motion.div>
        </motion.div>
      </motion.section>
    </aside>
  );
}
