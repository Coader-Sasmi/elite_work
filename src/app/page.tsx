"use client";
/* eslint-disable @next/next/no-img-element */

import { AboutUs, HeroSec, Process, Services } from "@/components";

export default function Home() {
  return (
    <>
      <HeroSec />
      <AboutUs />
      <Services />
      <Process />
    </>
  );
}
