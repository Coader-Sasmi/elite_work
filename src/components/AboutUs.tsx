/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { CgArrowLongRightL, CgProfile } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

export default function AboutUs() {
  return (
    <>
      {/* <Ticker
        className="lg:text-5xl text-4xl font-bold text-secondary"
        end={20}
      /> */}
      <aside
        className="main-container py-10 flex lg:flex-row items-center flex-col gap-10 lg:h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(./about_bg.png)` }}
        id="about"
      >
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
          <div className="absolute bg-quaternary rounded-full border-[0.4rem] border-white right-1/2 z-10 top-2/3 shadow-md">
            <p className="text-white text-center md:p-7 p-5 font-semibold">
              <span className="md:text-3xl text-xl">15+</span>
              <br />
              <span>
                Years Of <br /> Experience
              </span>
            </p>
          </div>
          <img
            src="./about_img_2.jpg"
            alt="image"
            className="absolute right-0 top-2/3 w-56 md:w-auto"
          />
        </section>
        <section className="w-full flex flex-col gap-10 pt-16 md:pt-0">
          <motion.div
            className="flex gap-3 items-center text-quaternary"
            initial={{ y: 50, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
          >
            <CgArrowLongRightL />
            <h5 className="font-medium">About Us</h5>
          </motion.div>
          <h1 className="text-5xl font-semibold">
            Our passion for design, your
            <br /> <span className="text-quaternary">vision realized</span>
          </h1>
          <p>
            Our dedicated team of designers works closely with you to understand
            your vision and bring it to life with thoughtful attention to
            detail. Whether it’s transforming a single room or an entire home.
          </p>
          <motion.div
            className="flex md:flex-row flex-col-reverse gap-5 justify-between w-full"
            initial={{ y: 50, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5, delay: 0.5 }}
          >
            <div className="flex flex-col gap-4 ">
              <div className="flex items-center gap-3">
                <div className="bg-quaternary rounded-full p-1 text-white">
                  <TiTick className="text-lg" />
                </div>
                <p>creative expertise</p>
              </div>
              <div className="flex items-center gap-3 md:pb-8 pb-5">
                <div className="bg-quaternary rounded-full p-1 text-white">
                  <TiTick className="text-lg" />
                </div>
                <p>client-centered approach</p>
              </div>
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
                  <button className="relative z-10 flex gap-3 items-center font-semibold px-4 py-2 text-white">
                    Read More <BsArrowRight />
                  </button>
                </motion.div>
              </motion.div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
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
                <div>
                  <p>Need Any Help?</p>
                  <Link href="tel:+917406299605">
                    <p className="text-lg font-semibold">+(91) 7406299605</p>
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CgProfile className="text-4xl bg-secondary rounded-full text-white" />
                <div>
                  <p className="text-lg font-semibold">Raj Kumar R</p>
                  <p>Co Founder</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </aside>
    </>
  );
}
