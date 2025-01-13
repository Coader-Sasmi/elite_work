import { Footer, HeroSec, Navbar } from "@/components";
import type { Metadata } from "next";
import Head from "next/head";
import { JSX } from "react";
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
        <Navbar />
        <HeroSec />
        {children}
        <Footer />
      </body>
    </html>
  );
}
