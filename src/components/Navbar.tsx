"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { ResponsiveNav } from ".";

export const NavArr = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "" },
  { title: "Services", path: "" },
  { title: "Portfolio", path: "" },
  { title: "Price", path: "" },
  { title: "Contact", path: "" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <div className="main-container flex justify-center font-bold items-center py-2 text-tertiary text-xs tracking-wide uppercase ">
        Available exclusively in Bangalore, Karnataka.
      </div>
      <nav className=" sticky top-0 z-[999] bg-white transition-all duration-100 ease-in-out border-t border-secondary shadow-sm">
        <ResponsiveNav openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />

        <section className="main-container items-center justify-between py-1 lg:flex w-full">
          <div className="flex items-center justify-between w-full ">
            <Link href="/">
              <img
                src="main_logo.png"
                alt="main_logo"
                className="lg:h-[4.5rem] h-10 w-auto cursor-pointer rounded-sm"
              />
            </Link>
            <div className="border-2 border-gray-700 px-1 rounded-md text-3xl lg:hidden block">
              <HiOutlineMenuAlt3
                onClick={() => setOpenDrawer(true)}
                className="rotate-180"
              />
            </div>
            <div className="main-container lg:flex w-full justify-center items-center gap-8 hidden text-">
              {NavArr?.map((curElm, i) => (
                <div key={i}>
                  <Link href={curElm?.path}>
                    <p
                      className={`font-semibold uppercase tracking-wider rounded-full px-3 text-sm py-1 hover:bg-gray-100 ${
                        curElm?.path === pathname
                          ? "bg-secondary text-white"
                          : ""
                      } `}
                    >
                      {curElm?.title}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </nav>
    </>
  );
}
