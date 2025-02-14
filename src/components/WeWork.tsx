/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { BsDoorOpen } from "react-icons/bs";
import { CgArrowLongRightL } from "react-icons/cg";
import { GoStopwatch } from "react-icons/go";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdOutlineTableRestaurant } from "react-icons/md";

export default function WeWork() {
  const weWorkArr = [
    {
      icon: <HiOutlineLightBulb />,
      title: "01. Initial Consultation",
      subTitle:
        "We start with a one-on meeting to understand your vision preferences and requirement.",
    },
    {
      icon: <BsDoorOpen />,
      title: "02. Design Planning",
      subTitle:
        "This involves selecting materials, and layouts, furnishings, as well as creating 3D renderings.",
    },
    {
      icon: <GoStopwatch />,
      title: "03. Project Execution",
      subTitle:
        "With the design plans in this place, we manage and coordinate all aspects of the projects.",
    },
    {
      icon: <MdOutlineTableRestaurant />,
      title: "04. Final Review",
      subTitle:
        "After completing project we conduct a thorough walkthrough with you to review the space.",
    },
  ];
  return (
    <aside className="bg-secondary h-screen">
      <section className="main-container py-10 flex flex-col gap-10">
        <section className="w-full flex flex-col gap-10 ">
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
        <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 lg:py-12 py-10">
          {weWorkArr?.map((curElm, i) => (
            <div key={i} className="flex flex-col gap-5 text-white">
              <div className="text-5xl text-quaternary">{curElm?.icon}</div>
              <h1 className="text-xl font-semibold">{curElm?.title}</h1>
              <p>{curElm?.subTitle}</p>
            </div>
          ))}
        </section>
        <div className="w-full bg-quaternary h-[0.01rem]"></div>
      </section>
    </aside>
  );
}
