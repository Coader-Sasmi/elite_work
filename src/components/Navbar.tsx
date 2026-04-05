"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useCallback, useState } from "react";
import { CustomDrawer } from "./core";

export const NavArr = [
  { title: "About", path: "/#about" },
  { title: "Services", path: "/#services" },
  { title: "Portfolio", path: "/#projects" },
  { title: "Contact", path: "/#contact" },
];

const NavLink = memo(({ item, onClick }: { item: typeof NavArr[0]; onClick?: () => void }) => {
  const pathname = usePathname();
  const isActive = item.path === pathname;

  return (
    <Link href={item.path} onClick={onClick} prefetch={true}>
      <div
        className={`py-4 border-b border-white/5 flex items-center justify-between group transition-colors duration-200 ${isActive ? "text-[#C9A96E]" : "text-white/50 hover:text-white"
          }`}
      >
        <span className="text-xl font-light tracking-wide">{item.title}</span>
        <span className="text-white/20 group-hover:text-[#C9A96E] transition-colors duration-200">→</span>
      </div>
    </Link>
  );
});
NavLink.displayName = "NavLink";

const MobileDrawer = memo(function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <CustomDrawer
      open={open}
      onClose={onClose}
      anchor="right"
      drawerStyle="w-[80vw] sm:w-[60vw] md:w-[45vw] h-screen bg-[#080808] border-l border-white/5"
    >
      <div className="flex flex-col h-full p-6 sm:p-8">

        {/* Close button */}
        <div className="flex justify-end mb-10 sm:mb-12">
          <button
            onClick={onClose}
            className="w-11 h-11 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors duration-200"
          >
            <span className="text-lg leading-none rotate-45">+</span>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1">
          {NavArr.map((item, i) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: open ? 1 : 0, x: open ? 0 : 24 }}
              style={{ willChange: "opacity, transform" }}
              transition={{ delay: i * 0.05 + 0.08, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <NavLink item={item} onClick={onClose} />
            </motion.div>
          ))}
        </nav>

        {/* CTA */}
        <div className="mt-8">
          <Link href="/#contact" onClick={onClose} prefetch={true}>
            <button className="w-full py-3.5 bg-[#C9A96E] text-[#0a0a0a] text-sm font-semibold tracking-[0.1em] uppercase rounded-sm active:scale-95 transition-transform duration-150">
              Get Free Quote
            </button>
          </Link>
        </div>

        {/* Contact info */}
        <div className="mt-auto pt-8 sm:pt-12 border-t border-white/5 flex flex-col gap-3">
          <p className="text-white/20 text-xs tracking-[0.2em] uppercase mb-1">Get In Touch</p>
          <Link href="tel:+917406299605">
            <p className="text-white/40 text-sm hover:text-[#C9A96E] transition-colors duration-200">
              +(91) 7406299605
            </p>
          </Link>
          <Link href="mailto:infoeliteworkk@gmail.com">
            <p className="text-white/40 text-sm hover:text-[#C9A96E] transition-colors duration-200 break-all">
              infoeliteworkk@gmail.com
            </p>
          </Link>
        </div>
      </div>
    </CustomDrawer>
  );
});

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  const handleClose = useCallback(() => setOpenDrawer(false), []);
  const toggleDrawer = useCallback(() => setOpenDrawer((prev) => !prev), []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const shouldScroll = latest > 80;
    if (shouldScroll !== scrolled) setScrolled(shouldScroll);
  });

  return (
    <>
      <MobileDrawer open={openDrawer} onClose={handleClose} />

      <motion.nav
        style={{ willChange: "transform" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "py-3 bg-[#0a0a0a]/90 backdrop-blur-2xl border-b border-white/5"
            : "py-4 sm:py-5 lg:py-6 bg-transparent"
          }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">

          {/* Logo ✅ */}
          <Link href="/" prefetch={true}>
            <motion.div whileHover={{ opacity: 0.8 }} transition={{ duration: 0.15 }}>
              <Image
                src="/main_logo.png"
                alt="Elite Work"
                width={120}
                height={40}
                className="h-8 sm:h-9 lg:h-10 w-auto"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-10">
            {NavArr.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i + 0.3, duration: 0.4 }}
              >
                <Link href={item.path} prefetch={true}>
                  <span className="relative text-white/60 hover:text-white text-sm font-medium tracking-[0.08em] uppercase transition-colors duration-200 group">
                    {item.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C9A96E] group-hover:w-full transition-all duration-200 ease-out" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3 sm:gap-4">

            {/* Desktop CTA */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <Link href="/#contact" prefetch={true}>
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "#D4B87A" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2.5 bg-[#C9A96E] text-[#0a0a0a] text-sm font-semibold tracking-[0.1em] uppercase rounded-sm transition-colors duration-200"
                >
                  Get Free Quote
                </motion.button>
              </Link>
            </motion.div>

            {/* Hamburger */}
            <motion.button
              onClick={toggleDrawer}
              className="lg:hidden flex flex-col gap-[5px] p-2.5 -mr-1"
              whileTap={{ scale: 0.92 }}
              aria-label="Toggle menu"
            >
              <motion.span
                className="w-6 h-px bg-white block origin-center"
                animate={{ rotate: openDrawer ? 45 : 0, y: openDrawer ? 6 : 0 }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="w-4 h-px bg-white/60 block"
                animate={{ opacity: openDrawer ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-6 h-px bg-white block origin-center"
                animate={{ rotate: openDrawer ? -45 : 0, y: openDrawer ? -6 : 0 }}
                transition={{ duration: 0.25 }}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>
    </>
  );
}