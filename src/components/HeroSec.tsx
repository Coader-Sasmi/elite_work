"use client";
import Slider from "react-slick";

const heroArr = [
  { url: "./Hero_1.jpg" },
  { url: "./Hero_2.jpg" },
  { url: "./Hero_3.jpg" },
];

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  cssEase: "linear",
  autoplaySpeed: 4000,
  pauseOnHover: false,
  arrows: false,
};

export default function HeroSec() {
  return (
    <>
      <Slider {...settings}>
        {heroArr?.map((curElm, i) => (
          <section
            className="!flex h-fit items-center md:h-[calc(100vh-11rem)]"
            key={i}
          >
            <div
              className="flex h-[calc(100vh-11rem)] w-full cursor-grab flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-black/30 bg-blend-overlay"
              style={{ backgroundImage: `url(${curElm.url})` }}
            >
              <div className="flex flex-col gap-5 justify-start lg:py-32 py-24 items-center w-full h-full text-white">
                <h5 className="font-medium text-gray-300 tracking-widest uppercase">
                  Timeless Charm
                </h5>
                <h1 className="lg:text-7xl text-3xl font-medium">
                  Heritage Manor
                </h1>
                <p className="font-medium">Special offers to suit your plan</p>
              </div>
            </div>
          </section>
        ))}
      </Slider>
    </>
  );
}
