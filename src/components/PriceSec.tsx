/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { CgArrowLongRightL } from "react-icons/cg";
import CardComponent from "./CardComponent";

export default function PriceSec() {
  const priceArr = [
    { id: "01", title: "1 BHK", price: "2.2L" },
    { id: "02", title: "2 BHK", price: "2.8L" },
    { id: "03", title: "3 BHK", price: "3.4L" },
    { id: "04", title: "VILLAS", price: "5.2L" },
  ];

  return (
    <aside className="">
      <section
        className="main-container w-full flex flex-col gap-10 py-10"
        id="price"
      >
        <motion.div
          className="flex gap-3 items-center text-quaternary"
          initial={{ y: 50, opacity: 0.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
        >
          <CgArrowLongRightL />
          <h5 className="font-medium">Our Starting Price</h5>
        </motion.div>
        <div className="flex lg:flex-row flex-col gap-8">
          <h1 className="text-5xl font-semibold w-full">
            Quality services at the
            <br /> <span className="text-quaternary">right price</span>
          </h1>
          <motion.p
            className="w-full"
            initial={{ y: 50, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            We offer flexible pricing options tailored to your specific needs.
            Whether {`it's`} a one-time service or a full-scale project, we
            ensure value and quality at every step.
          </motion.p>
        </div>
        <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
          {priceArr?.map((curElm, i) => (
            <CardComponent curElm={curElm} key={i} />
          ))}
        </section>
      </section>
    </aside>
  );
}
