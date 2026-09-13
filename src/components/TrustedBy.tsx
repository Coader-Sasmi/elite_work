"use client";

import Image from "next/image";

const logos = [
  { image: "/partners/client1.png" },
  { image: "/partners/client2.png" },
  { image: "/partners/client3.png" },
  { image: "/partners/client4.png" },
  { image: "/partners/client5.png" },
   { image: "/partners/client6.jpeg" },
  { image: "/partners/client7.jpeg" },
  { image: "/partners/client8.jpeg" },
  { image: "/partners/client9.jpeg" },
  { image: "/partners/client10.jpeg" },
   { image: "/partners/client11.jpeg" },
  { image: "/partners/client12.jpeg" },
  { image: "/partners/client13.jpeg" },
  { image: "/partners/client14.jpeg" },
  { image: "/partners/client15.jpeg" },
];

export default function TrustedBy() {
  // Duplicate the logos array so the marquee can loop seamlessly
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="bg-[#0d0d0d] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">

        {/* Logo Marquee (pure CSS, no external slider package) */}
        <div className="flex items-center gap-6 sm:gap-8">
          <span className="text-white/90 text-sm tracking-wide font-semibold uppercase whitespace-nowrap flex-shrink-0">
            BRANDS & COMMUNITIES<br/> WE WORK WITH
          </span>
          <div className="flex-1 overflow-hidden group/marquee">
            <div className="flex w-max animate-marquee group-hover/marquee:[animation-play-state:paused]">
              {marqueeLogos.map((logo, i) => (
                <div key={i} className="px-1.5 flex-shrink-0">
                  <div className="h-40 flex items-center justify-center">
                    <Image
                      src={logo.image}
                      alt="Client logo"
                      width={120}
                      height={64}
                      className="h-full w-auto max-w-[320px] object-contain transition-opacity duration-300 filter"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}