/* eslint-disable @next/next/no-img-element */
"use client";

import { AboutUs, Process, Services, ShowCase } from "@/components";

export default function Home() {
  return (
    <>
      {/* <HeroSec /> */}
      <AboutUs />
      <Services />
      <ShowCase />
      <Process />
    </>
  );
}
