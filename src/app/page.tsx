/* eslint-disable @next/next/no-img-element */
"use client";

import { AboutUs, ChooseUs, Process, Services, ShowCase } from "@/components";

export default function Home() {
  return (
    <>
      {/* <HeroSec /> */}
      <AboutUs />
      <ChooseUs />
      <Services />
      <ShowCase />
      <Process />
    </>
  );
}
