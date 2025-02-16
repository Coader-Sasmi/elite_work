/* eslint-disable @next/next/no-img-element */
"use client";

import {
  AboutUs,
  ChooseUs,
  News,
  Project,
  Services,
  WeWork,
} from "@/components";

export default function Home() {
  return (
    <>
      {/* <HeroSec /> */}
      <AboutUs />
      <ChooseUs />
      <Services />
      <Project />
      <WeWork />
      {/* <ShowCase /> */}
      {/* <Process /> */}
      <News />
    </>
  );
}
