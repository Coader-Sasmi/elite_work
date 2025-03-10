"use client";
/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { ResponsiveNav } from ".";

export const NavArr = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/#about" },
  { title: "Services", path: "/#services" },
  { title: "Portfolio", path: "/#projects" },
  { title: "Price", path: "/#price" },
  { title: "Contact", path: "" },
];

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <nav className="py-5">
        <ResponsiveNav openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />

        <section className="main-container items-center justify-between py-1 lg:flex w-full border-b-[0.01rem] border-gray-500">
          <div className="flex items-center justify-between w-full ">
            <Link href="/">
              <img
                src="main_logo.png"
                alt="main_logo"
                className="lg:h-[4.5rem] h-10 w-auto cursor-pointer rounded-sm"
              />
            </Link>
            <div className="border-2 border-primary text-white px-1 rounded-md text-3xl lg:hidden block">
              <HiOutlineMenuAlt3
                onClick={() => setOpenDrawer(true)}
                className="rotate-180"
              />
            </div>
            <div className="lg:flex w-full justify-center items-center gap-8 hidden">
              {NavArr?.map((curElm, i) => (
                <div key={i}>
                  <Link href={curElm?.path}>
                    <p
                      className={`font-medium tracking-wider rounded-full px-3 py-1 hover:text-gray-400 text-white `}
                    >
                      {curElm?.title}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
            <motion.div
              whileHover="hover"
              className="relative w-36 cursor-pointer overflow-hidden p-5 bg-tertiary rounded-full"
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
                <button className="relative z-10 flex gap-3 items-center font-semibold p-2 text-white text-sm uppercase">
                  get free quote
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </nav>
    </>
  );
}
