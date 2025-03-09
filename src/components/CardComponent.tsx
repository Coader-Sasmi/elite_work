/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { MdCurrencyRupee } from "react-icons/md";

type PriceItem = {
  id: string;
  title: string;
  price: string;
};

export default function CardComponent({ curElm }: { curElm: PriceItem }) {
  return (
    <div className="relative w-80 h-96 bg-gradient-to-r from-secondary to-primary text-white p-12 rounded-3xl overflow-hidden shadow-sm">
      <div className="absolute bottom-0 right-0 w-full h-full bg-white rounded-tr-[18rem]"></div>

      <div className="relative z-10 text-center p-6">
        <div className="absolute top-4 left-4 text-secondary">{curElm?.id}</div>

        <div className="flex justify-center mb-4">
          <div className="p-3 flex items-center justify-center rounded-3xl bg-tertiary/10">
            <MdCurrencyRupee className="text-5xl text-tertiary" />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-secondary font-semibold text-xl">
            {curElm?.title}
          </p>
          <h2 className="text-gray-800 text-3xl font-bold">{curElm?.price}*</h2>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          whileHover="hover"
          className="relative w-36 cursor-pointer overflow-hidden p-5 bg-secondary rounded-full"
        >
          <motion.div
            className="absolute inset-0 bg-tertiary whitespace-nowrap"
            initial={{ width: "0%" }}
            variants={{
              hover: {
                width: "100%",
                transition: { duration: 0.4, ease: "easeInOut" },
              },
            }}
          >
            <button className="relative z-10 flex gap-3 items-center font-semibold px-4 text-white py-2 text-sm uppercase">
              get free quote
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
