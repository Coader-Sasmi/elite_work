import { Footer, HeroSec, Navbar } from "@/components";
import type { Metadata } from "next";
import Head from "next/head";
import Link from "next/link";
import { JSX } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elite Work",
  description: "",
};
type Props = {
  children: JSX.Element[] | JSX.Element;
  title?: string;
  description?: string;
  ogImage?: string;
};
export default function RootLayout({
  children = <></>,
  title = "Elite Work",
  description,
  ogImage,
}: Props) {
  return (
    <html>
      <Head>
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={ogImage} />
      </Head>
      <body>
        <div
          className="flex w-full flex-col bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url(hero.jpg)` }}
        >
          <Navbar />
          <HeroSec />
        </div>
        <Link
          href="https://api.whatsapp.com/send?phone=917406299605"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-10 right-4 z-50 flex items-center justify-center w-12 h-12 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp className="text-white w-6 h-6" />
        </Link>
        {children}
        <Footer />
      </body>
    </html>
  );
}
