/* eslint-disable @next/next/no-img-element */
"use client";

import {
  AboutUs,
  ChooseUs,
  News,
  PriceSec,
  Project,
  Services,
  Skills,
  Testimonial,
  WeWork,
} from "@/components";

export default function Home() {
  return (
    <>
      <AboutUs />
      <ChooseUs />
      <Services />
      <Project />
      <PriceSec />
      <WeWork />
      <Skills />
      <Testimonial />
      <News />
    </>
  );
}
