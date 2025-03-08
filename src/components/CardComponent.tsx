/* eslint-disable @next/next/no-img-element */
"use client";

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

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-36">
        <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-full font-semibold">
          Read More
        </button>
      </div>
    </div>
  );
}
