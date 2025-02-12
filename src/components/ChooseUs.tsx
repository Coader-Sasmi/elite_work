/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { CgArrowLongRightL } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";

export default function ChooseUs() {
  const ChooseUsArr = [
    {
      icon: "",
      title: "Tailored Design Solutions",
      subTitle:
        "We provide personalized interior design services that reflect your unique vision and lifestyle.",
      delayTime: "",
    },
    {
      icon: "",
      title: "Seamless Project Management",
      subTitle:
        " We handle the entire design process, from concept to completion, with flawless execution.",
      delayTime: "",
    },
    {
      icon: "",
      title: "Client-Centered Collaboration",
      subTitle:
        "Your input is valued throughout the entire process, ensuring your vision is fully realized.",
      delayTime: "",
    },
  ];
  return (
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
          From concept to completion, discover how we bring your vision to life
          with innovation, collaboration, and expert craftsmanship.
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
                  className="relative rounded-full overflow-hidden p-5 bg-quaternary "
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
                    <p className="relative z-10 p-2 ">
                      <FaPhoneAlt className="text-white text-xl" />
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
      <section className="w-full"></section>
    </aside>
  );
}
