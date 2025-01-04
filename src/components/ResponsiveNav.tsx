"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { RxCross2 } from "react-icons/rx";
import { NavArr } from "./Navbar";
import { CustomDrawer } from "./core";

type CaseFixedProps = {
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
};
export default function ResponsiveDrawer({
  openDrawer,
  setOpenDrawer,
}: CaseFixedProps) {
  const pathname = usePathname();
  return (
    <CustomDrawer
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
      anchor="right"
      drawerStyle="w-[75vw] md:w-[50vw] h-screen "
    >
      <section className="p-5">
        <div className="flex justify-end items-end text-2xl">
          <RxCross2 onClick={() => setOpenDrawer(false)} />
        </div>
        <div className="flex flex-col gap-2">
          {NavArr?.map((curElm, i) => (
            <div key={i}>
              <Link href={curElm?.path}>
                <p
                  className={`font-semibold ${
                    curElm?.path === pathname
                      ? "border-b-2 border-secondary w-fit"
                      : ""
                  }`}
                >
                  {curElm?.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </CustomDrawer>
  );
}
