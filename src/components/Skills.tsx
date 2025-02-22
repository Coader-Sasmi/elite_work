/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { CgArrowLongRightL } from "react-icons/cg";
import ProgressBar from "./ProgressBar";

export default function Skills() {
  const SkillsArr = [
    {
      title: "Space Planning And Layout",
      number: "95",
    },
    {
      title: "Project Challenges And Solutions",
      number: "85",
    },
    {
      title: "Sustainability And Eco-Friendly Features",
      number: "75",
    },
  ];
  return (
    <aside
      className="main-container py-10 flex lg:flex-row items-center flex-col lg:gap-56 gap-10 lg:h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(./skill_bg.png)` }}
    >
      <section className="w-full flex flex-col gap-10 pt-16 md:pt-0">
        <motion.div
          className="flex gap-3 items-center text-quaternary"
          initial={{ y: 50, opacity: 0.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
        >
          <CgArrowLongRightL />
          <h5 className="font-medium">Our Skills</h5>
        </motion.div>
        <h1 className="text-5xl font-semibold">
          Skills that shape your
          <br /> <span className="text-quaternary">dream home</span>
        </h1>
        <p>
          Our dedicated team of designers works closely with you to understand
          your vision and bring it to life with thoughtful attention to detail.
        </p>
        <div className="flex flex-col lg:gap-10 gap-6">
          {SkillsArr?.map((curElm, i) => (
            <div key={i}>
              <div className="flex justify-between pb-2">
                <p>{curElm?.title}</p>
                <h1>{curElm?.number}%</h1>
              </div>
              <ProgressBar progress={curElm?.number} />
            </div>
          ))}
        </div>
      </section>
      <section className="relative w-full ">
        <div className="flex md:flex-row flex-col gap-8">
          <img src="./skill_1.jpg" alt="image" className="w-auto h-auto" />
          <div className="absolute hidden md:block lg:right-10 md:right-32 lg:top-[6rem] md:top-[0.1rem]">
            <img src="./skill_2.jpg" alt="image" className="w-auto h-auto" />
          </div>
        </div>
        <div className="md:absolute lg:right-10 md:right-32 lg:top-2/3 md:top-[15rem] mt-8 md:mt-0 lg:mt-8">
          <img
            src="./skill_3.jpg"
            alt="image"
            className="md:w-auto w-full h-auto"
          />
        </div>
      </section>
    </aside>
  );
}
