/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { CgArrowLongRightL } from "react-icons/cg";
import { MdArrowRightAlt } from "react-icons/md";

export default function Services() {
  const serviceArr = [
    {
      image: "./service_1.jpg",
      title: "Residential Interior Design",
      subTitle:
        "We create personalized living spaces that reflect your style and functional needs.",
    },
    {
      image: "./service_2.jpg",
      title: "Commercial Interior Design",
      subTitle:
        "Enhancing business environments with professional, functional, and aesthetically.",
    },
    {
      image: "./service_3.jpg",
      title: "Furniture And Decor Selection",
      subTitle:
        "Our experts help you choose the perfect furniture and decor complement your style.",
    },
    {
      image: "./service_1.jpg",
      title: "Residential Interior Design",
      subTitle:
        "We create personalized living spaces that reflect your style and functional needs.",
    },
  ];
  return (
    <aside className="main-container py-10 flex flex-col gap-10" id="services">
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
          <h1 className="text-5xl font-semibold w-full">
            Innovative design services for
            <br /> <span className="text-quaternary">every need</span>
          </h1>
          <motion.p
            className="w-full"
            initial={{ y: 50, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            We offer a range of bespoke interior design services tailored to
            your unique needs. From concept development to final installation.
          </motion.p>
        </div>
      </section>
      <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        {serviceArr?.map((curElm, i) => (
          <motion.div
            key={i}
            className="relative flex w-auto h-[30rem] flex-col bg-cover bg-center"
            style={{ backgroundImage: `url(${curElm?.image})` }}
            initial={{ y: 50, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2.5 }}
          >
            <div className="absolute delay-animation right-5 top-5 rounded-full -rotate-45 bg-quaternary text-white p-1 hover:rotate-0 hover:bg-secondary ">
              <MdArrowRightAlt className="text-4xl" />
            </div>
            <div className="flex flex-col gap-3 justify-end items-start font-semibold h-full w-full text-white bg-black/40 bg-blend-overlay p-8">
              <h1 className="text-xl">{curElm?.title}</h1>
              <p>{curElm?.subTitle}</p>
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
      </motion.section>
    </aside>
  );
}
