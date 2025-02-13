/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { BsDoorOpen } from "react-icons/bs";
import { CgArrowLongRightL } from "react-icons/cg";
import { GiWoodenChair } from "react-icons/gi";
import { TbSofa } from "react-icons/tb";

export default function ChooseUs() {
  const ChooseUsArr = [
    {
      icon: <BsDoorOpen className="text-2xl" />,
      title: "Tailored Design Solutions",
      subTitle:
        "We provide personalized interior design services that reflect your unique vision and lifestyle.",
      delayTime: "",
    },
    {
      icon: <TbSofa className="text-2xl" />,
      title: "Seamless Project Management",
      subTitle:
        " We handle the entire design process, from concept to completion, with flawless execution.",
      delayTime: "",
    },
    {
      icon: <GiWoodenChair className="text-2xl" />,
      title: "Client-Centered Collaboration",
      subTitle:
        "Your input is valued throughout the entire process, ensuring your vision is fully realized.",
      delayTime: "",
    },
  ];
  const ImgArr = [
    {
      img: "./why_choose_1.jpg",
      class: "md:col-span-7 col-span-12",
      imgC: "w-full h-full",
    },
    {
      img: "./why_choose_2.jpg",
      class: "md:col-span-5 col-span-12",
      imgC: "w-full h-full",
    },
    {
      img: "./why_choose_3.jpg",
      class: "md:col-span-8 col-span-12",
      imgC: "w-full h-full",
    },
    {
      img: "./why_choose_4.jpg",
      class: "md:col-span-4 col-span-12",
      imgC: "w-full h-full",
    },
  ];
  return (
    <aside className="bg-gray-50 ">
      <aside className="main-container py-10 flex lg:flex-row items-center flex-col gap-10">
        <section className="w-full flex flex-col gap-10 pt-16 md:pt-0">
          <motion.div
            className="flex gap-3 items-center text-quaternary"
            initial={{ y: 50, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
          >
            <CgArrowLongRightL />
            <h5 className="font-medium">Why Choose Us</h5>
          </motion.div>
          <h1 className="text-4xl font-semibold">
            A behind the scenes look at
            <br /> <span className="text-quaternary">our agency</span>
          </h1>
          <p>
            From concept to completion, discover how we bring your vision to
            life with innovation, collaboration, and expert craftsmanship.
          </p>
          {ChooseUsArr?.map((curElm, i) => (
            <motion.div
              key={i}
              className="flex md:flex-row flex-col-reverse gap-5 justify-between w-full"
              initial={{ y: 50, opacity: 0.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1.5, delay: 0.5 }}
            >
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-5">
                  <motion.div
                    whileHover="hover"
                    className="relative rounded-full overflow-hidden p-6 bg-gray-200 "
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
                      <p className="relative z-10 p-3 text-quaternary">
                        {curElm?.icon}
                      </p>
                    </motion.div>
                  </motion.div>
                  <div className="flex flex-col gap-1">
                    <h1 className="text-lg font-semibold">{curElm?.title}</h1>
                    <p>{curElm?.subTitle}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
        <section className="w-full">
          <div className="grid grid-cols-12 gap-5">
            {ImgArr?.map((curElm, i) => (
              <div key={i} className={`${curElm?.class}`}>
                <img
                  src={curElm?.img}
                  alt="image"
                  className={`w-auto h-auto ${curElm?.imgC}`}
                />
              </div>
            ))}
          </div>
        </section>
      </aside>
    </aside>
  );
}
