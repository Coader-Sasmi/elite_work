/* eslint-disable @next/next/no-img-element */
"use client";

import {
  AboutUs,
  ChooseUs,
  News,
  Project,
  Services,
  Skills,
  WeWork,
} from "@/components";

export default function Home() {
  return (
    <>
      <AboutUs />
      <ChooseUs />
      <Services />
      <Project />
      <WeWork />
      <Skills />
      {/* <Testimonial /> */}
      <News />
    </>
  );
}
