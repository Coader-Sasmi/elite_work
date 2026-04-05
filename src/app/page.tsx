/* eslint-disable @next/next/no-img-element */
"use client";

import {
  AboutUs,
  ChooseUs,
  News,
  Project,
  Services,
  Skills,
  Testimonial,
  WeWork
} from "@/components";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <>
      <AboutUs />
      <ChooseUs />
      <Services />
      <Project />
      {/* <PriceSec /> */}
      <WeWork />
      <Skills />
      <Testimonial />
      <ContactUs />
      <News />
    </>
  );
}
