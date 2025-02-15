/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { IoIosMail, IoLogoInstagram } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { LightBox } from "./core";

export default function Footer() {
  const footerArr = [
    {
      heading: "Information",
      title1: "About Our Company",
      title2: "View Our Service",
      title3: "Careers At Company",
      title4: "Read Our Blog",
      title5: "Our Latest Project",
    },
    {
      heading: "Services",
      title1: "Residential Interior Design",
      title2: "Commercial Interior Design",
      title3: "Furniture And Decor Selection",
      title4: "Lighting Design",
      title5: "Color Consultation",
    },
  ];
  const Gallery_Arr = [
    {
      image: "why_choose_1.jpg",
    },
    {
      image: "why_choose_2.jpg",
    },
    {
      image: "why_choose_3.jpg",
    },
    {
      image: "why_choose_4.jpg",
    },
    {
      image: "service_1.jpg",
    },
    {
      image: "service_2.jpg",
    },
  ];
  return (
    <aside className="bg-secondary py-10">
      <section className="main-container flex flex-col gap-10 text-white">
        <div className="flex md:justify-between md:flex-row items-center flex-col gap-5">
          <img src="./logo.png" alt="image" className="w-24 h-auto" />
          <div className="flex gap-5 items-center">
            <h1 className="text-lg  font-semibold">Follow Our Socials</h1>
            <div className="bg-white rounded-full p-1 text-quaternary">
              <TiSocialFacebook className="text-2xl" />
            </div>
            <div className="bg-white rounded-full p-1 text-quaternary">
              <IoLogoInstagram className="text-2xl" />
            </div>
          </div>
        </div>
        <div className="w-full bg-quaternary h-[0.01rem]"></div>
        <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          {footerArr?.map((curElm, i) => (
            <div key={i} className="flex flex-col gap-4">
              <h1 className="text-lg font-semibold">{curElm?.heading}</h1>
              <div className="flex flex-col gap-2">
                <p>{curElm?.title1}</p>
                <p>{curElm?.title2}</p>
                <p>{curElm?.title3}</p>
                <p>{curElm?.title4}</p>
                <p>{curElm?.title5}</p>
              </div>
            </div>
          ))}
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-semibold">Contact Us</h1>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="border border-quaternary/30 rounded-full p-2">
                  <FaPhone className="rotate-90" />
                </div>
                <Link href="tel:+917406299605">
                  <p>+(91) 7406299605</p>
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <div className="border border-quaternary/30 rounded-full p-2">
                  <IoIosMail />
                </div>
                <Link href="mailto:Info@elitework.in">
                  <p>Info@elitework.in</p>
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <div className="border border-quaternary/30 rounded-full p-2">
                  <IoLocationSharp />
                </div>
                <p>Elitework, Bannerghatta Road, Karnataka 560083 </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <h4 className=" text-lg font-semibold">Gallery</h4>
            <LightBox images={Gallery_Arr.map((curElm) => curElm?.image)} />
          </div>
        </section>
        <div className="w-full bg-quaternary h-[0.01rem]"></div>
        <div className="flex justify-center items-center">
          <p className="font-semibold md:tracking-wider text-center">
            &copy; Copyright Elite Work {new Date().getFullYear()} . All right
            reserved.
          </p>
        </div>
      </section>
    </aside>
  );
}
