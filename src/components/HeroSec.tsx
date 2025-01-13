"use client";

import { BsArrowRight } from "react-icons/bs";
import { LuMoveRight } from "react-icons/lu";

export default function HeroSec() {
  return (
    <>
      <section className="!flex h-fit items-center md:h-[calc(100vh-3rem)]">
        <div
          className="flex h-[calc(100vh-3rem)] w-full cursor-grab flex-col bg-cover bg-center bg-no-repeat bg-black/30 bg-blend-overlay"
          style={{ backgroundImage: `url(hero.jpg)` }}
        >
          <div className="main-container flex flex-col gap-10 justify-start lg:py-32 py-24  w-full h-full text-white">
            <div className="flex gap-3 items-center">
              <LuMoveRight />
              <h5 className="font-medium ">Inspired Interiors</h5>
            </div>
            <h1 className="lg:text-7xl text-3xl font-semibold">
              Designing your dream spaces, <br />
              one room at a time
            </h1>
            <p className="font-semibold text-xl">
              We specialize in creating personalized, functional, and stylish{" "}
              <br />
              interiors that reflect your unique vision.
            </p>
            <div className="flex gap-8">
              <button className="flex items-center gap-3 bg-gray-600 py-3 px-4 font-bold">
                Explore More <BsArrowRight />
              </button>
              <button className="flex items-center gap-3 text-gray-600 bg-white py-3 px-4 font-bold">
                View Projects <BsArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
