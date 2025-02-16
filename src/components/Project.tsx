/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CgArrowLongRightL } from "react-icons/cg";

export default function Project() {
  const projectArr = [
    {
      image: "project_1.jpg",
      title: "Architecture",
      subTitle: "Urban Retreat: Modern Design Meets Comfort",
    },
    {
      image: "project_2.jpg",
      title: "Bedroom",
      subTitle: "Luxurious Loft:Industrial Chic For Living",
    },
    {
      image: "project_3.jpg",
      title: "Furniture",
      subTitle: "Coastal Vibes:Serenity By The Sea",
    },
    {
      image: "project_4.jpg",
      title: "Kitchen",
      subTitle: "Minimalist Haven: Simple, Clean, Inviting Space",
    },
  ];
  const [isActive, setIsActive] = useState<any>(0);
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
          <h5 className="font-medium">Latest Project</h5>
        </motion.div>
        <div className="flex lg:flex-row flex-col gap-8">
          <h1 className="text-5xl font-semibold w-full">
            Creative projects that
            <br /> define
            <span className="text-quaternary">our style</span>
          </h1>
          <motion.p
            className="w-full"
            initial={{ y: 50, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            Our portfolio showcases a diverse range of projects, from
            beautifully crafted residential spaces functional and stylish
            commercial interiors
          </motion.p>
        </div>
      </section>
      <section className="flex gap-5 items-center justify-center">
        {projectArr?.map((curElm, i) => (
          <div
            key={i}
            onClick={() => setIsActive(i)}
            className="flex flex-col gap-2 justify-center cursor-pointer items-center"
          >
            {isActive === i ? (
              <span className="w-full h-[0.1rem] bg-secondary"></span>
            ) : (
              <span className="w-full h-[0.1rem] "></span>
            )}
            {curElm.title}
            {isActive === i && (
              <span className="w-full h-[0.1rem] bg-secondary"></span>
            )}
          </div>
        ))}
      </section>
      <section className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-10 lg:px-20 ">
        {projectArr?.map((curElm, i) => (
          <div
            key={i}
            className="relative flex w-auto h-[30rem] flex-col bg-cover bg-center"
            style={{ backgroundImage: `url(${curElm?.image})` }}
          >
            <div className="flex flex-col gap-1 justify-end items-start font-semibold h-full w-full text-white bg-black/40 bg-blend-overlay p-8">
              <h1 className="text-lg">{curElm?.title}</h1>
              <p className="text-2xl">{curElm?.subTitle}</p>
            </div>
          </div>
        ))}
      </section>
    </aside>
  );
}
