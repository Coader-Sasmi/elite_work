/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { IoIosMail, IoLogoInstagram } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { LightBox } from "./core";

export default function Footer() {
  const footerArr = [
    {
      heading: "Information",
      list: [
        {
          title: "About Our Company",
          path: "/#about",
        },
        {
          title: "View Our Service",
          path: "/#services",
        },
        {
          title: "Term & Conditions",
          path: "/term",
        },
        {
          title: "Privacy Policy",
          path: "/privacy",
        },
        {
          title: "Our Latest Project",
          path: "/#projects",
        },
      ],
    },
    {
      heading: "Services",
      list: [
        {
          title: "Residential Interior Design",
          path: "/",
        },
        {
          title: "Commercial Interior Design",
          path: "/",
        },
        {
          title: "Furniture And Decor Selection",
          path: "/",
        },
        {
          title: "Lighting Design",
          path: "/",
        },
        {
          title: "Color Consultation",
          path: "/",
        },
      ],
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
    <aside className="bg-secondary py-8">
      <section className="main-container flex flex-col gap-8 text-white">
        <div className="flex md:justify-between md:flex-row items-center flex-col gap-5">
          <img src="./logo.png" alt="image" className="w-24 h-auto" />
          <div className="flex gap-4 items-center">
            <h1 className="text-lg  font-semibold">Follow Our Socials</h1>
            <Link href="https://www.youtube.com/@eliteWorkk" target="_">
              <div className="bg-gradient-to-r from-primary/85 via-primary/50 to-primary p-1 text-secondary rounded-xl">
                <AiOutlineYoutube className="text-2xl" />
              </div>
            </Link>
            <Link
              href="https://www.instagram.com/elite_work_/?igsh=NGVidWQ5djQzb2Nh&utm_source=qr#"
              target="_"
            >
              <div className="bg-gradient-to-r from-primary/85 via-primary/50 to-primary p-1 text-secondary rounded-xl">
                <IoLogoInstagram className="text-2xl" />
              </div>
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=917406299605"
              target="_"
            >
              <div className="bg-gradient-to-r from-primary/85 via-primary/50 to-primary p-1 text-secondary rounded-xl">
                <FaWhatsapp className="text-2xl" />
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full bg-quaternary h-[0.01rem]"></div>
        <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 lg:gap-0">
          {footerArr?.map((curElm, i) => (
            <div key={i} className="flex flex-col gap-4">
              <h1 className="text-lg font-semibold">{curElm?.heading}</h1>
              <div className="flex flex-col gap-2">
                {curElm?.list.map((innerElm, i) => (
                  <div key={i}>
                    <Link href={innerElm?.path}>
                      <p>{innerElm?.title}</p>
                    </Link>
                  </div>
                ))}
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
                <Link href="mailto:infoeliteworkk.gmail.com">
                  <p>infoeliteworkk.gmail.com</p>
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
