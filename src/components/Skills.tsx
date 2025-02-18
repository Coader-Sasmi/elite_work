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
      className="main-container py-10 flex lg:flex-row items-center flex-col gap-10 lg:h-screen bg-cover bg-center bg-no-repeat"
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
      <section className="relative w-full">
        <div className="flex ">
          <img src="./about_img_1.jpg" alt="image" className="" />
          <div className="absolute hidden md:flex items-center gap-3 -rotate-90 right-0 top-1/4 ">
            <motion.div
              whileHover="hover"
              className="relative rounded-full overflow-hidden p-6 bg-quaternary "
            >
              <motion.div
                className="absolute inset-0 bg-secondary "
                initial={{ width: "0%" }}
                variants={{
                  hover: {
                    width: "100%",
                    transition: { duration: 0.4, ease: "easeInOut" },
                  },
                }}
              >
                <p className="relative z-10 p-3 text-white font-semibold">
                  95%
                </p>
              </motion.div>
            </motion.div>
            <p className="text-xl font-semibold tracking-wide">
              Positive Feedback
            </p>
          </div>
        </div>
        <img
          src="./about_img_2.jpg"
          alt="image"
          className="absolute right-0 top-2/3 w-56 md:w-auto"
        />
      </section>
    </aside>
  );
}
