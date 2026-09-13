"use client";

import Image from "next/image";

const logos = [
  { image: "/client1.png" },
  { image: "/client2.png" },
  { image: "/client3.png" },
  { image: "/client4.png" },
  { image: "/client5.png" },
   { image: "/client1.png" },
  { image: "/client2.png" },
  { image: "/client3.png" },
  { image: "/client4.png" },
  { image: "/client5.png" },
   { image: "/client1.png" },
  { image: "/client2.png" },
  { image: "/client3.png" },
  { image: "/client4.png" },
  { image: "/client5.png" },
   { image: "/client1.png" },
  { image: "/client2.png" },
  { image: "/client3.png" },
  { image: "/client4.png" },
  { image: "/client5.png" },
];

export default function TrustedBy() {
  // Duplicate the logos array so the marquee can loop seamlessly
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="bg-[#0d0d0d] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">

        {/* Logo Marquee (pure CSS, no external slider package) */}
        <div className="flex items-center gap-6 sm:gap-8">
          <span className="text-white/80 text-xs tracking-[0.2em] uppercase whitespace-nowrap flex-shrink-0">
            Trusted by
          </span>
          <div className="flex-1 overflow-hidden group/marquee">
            <div className="flex w-max animate-marquee group-hover/marquee:[animation-play-state:paused]">
              {marqueeLogos.map((logo, i) => (
                <div key={i} className="px-1.5 flex-shrink-0">
                  <div className="h-32 flex items-center justify-center">
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