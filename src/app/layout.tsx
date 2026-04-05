import { Footer, HeroSec, Navbar } from "@/components";
import type { Metadata } from "next";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elite Work | Premium Interior Design",
  description:
    "Elite Work is a premium interior design studio crafting elegant, functional spaces tailored to your lifestyle. From concept to completion, we transform homes and offices into stunning environments.",
  keywords: [
    "interior design",
    "home decor",
    "luxury interiors",
    "interior designer",
    "office interior",
    "residential design",
    "commercial interior design",
    "Elite Work",
  ],
  openGraph: {
    title: "Elite Work | Premium Interior Design",
    description:
      "Transform your space with Elite Work — where creativity meets craftsmanship. Explore our interior design services for homes and offices.",
    url: "https://www.elitework.in/",
    siteName: "Elite Work",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Elite Work Interior Design",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Work | Premium Interior Design",
    description:
      "Elegant and functional spaces designed for your lifestyle. Discover Elite Work's interior design services.",
    images: ["/logo.png"],
  },
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <body>
        <Navbar />

        <div
          className="flex w-full flex-col bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url(hero.jpg)` }}
        >
          <HeroSec />
        </div>

        {/* Floating WhatsApp button */}
        <Link
          href="https://api.whatsapp.com/send?phone=917406299605"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-10 right-4 z-50 flex items-center justify-center w-12 h-12 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition hover:scale-110"
        >
          <FaWhatsapp className="text-white w-6 h-6" />
        </Link>

        {children}
        <Footer />
      </body>
    </html>
  );
}