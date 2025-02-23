/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { CgArrowLongRightL, CgProfile } from "react-icons/cg";
import { FaStar } from "react-icons/fa";

export default function Testimonial() {
  return (
    <aside className="bg-gray-50 my-20">
      <section className="main-container flex lg:flex-row flex-col-reverse gap-10">
        <div className="w-full">
          <img
            src="./testimonial_img.jpg"
            alt="image"
            className="w-auto lg:h-screen h-auto"
          />
        </div>
        <section className="w-full flex flex-col gap-10 pt-16 md:pt-0">
          <motion.div
            className="flex gap-3 items-center text-quaternary"
            initial={{ y: 50, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
          >
            <CgArrowLongRightL />
            <h5 className="font-medium">Client Testimonials</h5>
          </motion.div>
          <h1 className="text-5xl font-semibold">
            Trusted by thousand of
            <br /> <span className="text-quaternary">people & companies.</span>
          </h1>
          <div className="flex gap-2 text-xl">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="text-xl">
            {` I couldn't be happier with the transformation of my home! From our
            very first consultation, the team at took the time to understand my
            vision and preferences.`}
          </p>
          <div className="flex items-center gap-3">
            <CgProfile className="text-7xl bg-secondary rounded-full text-white" />
            <div>
              <p className="text-lg font-semibold">Raj Kumar Yadav</p>
              <p>Co Founder</p>
            </div>
          </div>
        </section>
      </section>
    </aside>
  );
}
