"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { IoIosMail, IoLogoInstagram } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { LightBox } from "./core";

export default function Footer() {
  const navLinks = [
    { title: "About Us", path: "/#about" },
    { title: "Services", path: "/#services" },
    { title: "Portfolio", path: "/#projects" },
    { title: "Terms & Conditions", path: "/term" },
    { title: "Privacy Policy", path: "/privacy" },
  ];

  const galleryImages = [
    "why_choose_1.jpg",
    "why_choose_2.jpg",
    "why_choose_3.jpg",
    "why_choose_4.jpg",
    "service_1.jpg",
    "service_2.jpg",
  ];

  const socials = [
    {
      href: "https://www.youtube.com/@eliteWorkk",
      icon: <AiOutlineYoutube className="text-base" />,
      label: "YouTube",
    },
    {
      href: "https://www.instagram.com/elite_work_/?igsh=NGVidWQ5djQzb2Nh&utm_source=qr#",
      icon: <IoLogoInstagram className="text-base" />,
      label: "Instagram",
    },
    {
      href: "https://api.whatsapp.com/send?phone=917406299605",
      icon: <FaWhatsapp className="text-base" />,
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="bg-[#060606] border-t border-white/5">

      {/* CTA Banner */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl lg:text-4xl font-light text-white mb-3">
                Ready to transform your space?
              </h3>
              <p className="text-white/30 text-sm">
                Book a free consultation and let&apos;s begin your story.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="tel:+917406299605">
                <motion.button
                  whileHover={{ scale: 1.03, backgroundColor: "#D4B87A" }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 bg-[#C9A96E] text-[#0a0a0a] text-sm font-semibold tracking-[0.12em] uppercase transition-colors duration-300"
                >
                  Call Us Now
                </motion.button>
              </Link>
              <Link href="mailto:infoeliteworkk@gmail.com">
                <motion.button
                  whileHover={{ scale: 1.03, borderColor: "#C9A96E", color: "#C9A96E" }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 border border-white/10 text-white/60 text-sm font-medium tracking-[0.12em] uppercase transition-colors duration-300"
                >
                  Email Us
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Brand column */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Elite Work"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-white/30 text-sm leading-relaxed">
              Bengaluru&apos;s premier interior design studio, crafting extraordinary spaces since 1988.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <Link key={i} href={s.href} target="_blank" aria-label={s.label}>
                  <motion.div
                    whileHover={{ y: -2, borderColor: "#C9A96E", color: "#C9A96E" }}
                    className="w-9 h-9 border border-white/10 rounded-full flex items-center justify-center text-white/40 transition-colors duration-300"
                  >
                    {s.icon}
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white/20 text-xs tracking-[0.25em] uppercase font-medium">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((link, i) => (
                <Link key={i} href={link.path}>
                  <span className="text-white/40 hover:text-[#C9A96E] text-sm transition-colors duration-300">
                    {link.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white/20 text-xs tracking-[0.25em] uppercase font-medium">
              Contact
            </h4>
            <div className="flex flex-col gap-5">
              {[
                {
                  icon: <FaPhone className="text-xs rotate-90" />,
                  content: (
                    <Link href="tel:+917406299605">
                      <p className="text-white/40 hover:text-[#C9A96E] text-sm transition-colors duration-300">
                        +(91) 7406299605
                      </p>
                    </Link>
                  ),
                },
                {
                  icon: <IoIosMail className="text-sm" />,
                  content: (
                    <Link href="mailto:infoeliteworkk@gmail.com">
                      <p className="text-white/40 hover:text-[#C9A96E] text-sm transition-colors duration-300">
                        infoeliteworkk@gmail.com
                      </p>
                    </Link>
                  ),
                },
                {
                  icon: <IoLocationSharp className="text-sm" />,
                  content: (
                    <p className="text-white/40 text-sm leading-relaxed">
                      Elitework, Bannerghatta Road,<br />Karnataka 560083
                    </p>
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="w-7 h-7 border border-white/10 rounded-full flex items-center justify-center text-white/20 flex-shrink-0 mt-0.5 group-hover:border-[#C9A96E]/30 transition-colors duration-300">
                    {item.icon}
                  </div>
                  {item.content}
                </div>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white/20 text-xs tracking-[0.25em] uppercase font-medium">
              Gallery
            </h4>
            <LightBox images={galleryImages} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Elite Work. All rights reserved.
          </p>
          <p className="text-white/10 text-xs">
            Crafting extraordinary interiors in Bengaluru.
          </p>
        </div>
      </div>
    </footer>
  );
}