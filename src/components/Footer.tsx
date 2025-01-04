"use client";
/* eslint-disable @next/next/no-img-element */

export default function Footer() {
  return (
    <>
      <section
        className="lg:h-[calc(100vh-15rem)] flex justify-center items-center bg-cover bg-center bg-no-repeat bg-black/30 bg-blend-overlay"
        style={{ backgroundImage: `url(./footer_image.jpg)` }}
      >
        <div className="main-container w-full grid grid-cols-12 gap-2 md:gap-4 ">
          <div className=" lg:col-span-4 col-span-12 lg:text-8xl md:text-4xl text-xl font-medium text-white">
            Our <br /> Locations.
          </div>
          <div className=" lg:col-span-8 col-span-12 flex md:flex-row flex-col">
            <div className="bg-black/50 flex flex-col lg:gap-8 gap-5 px-20 lg:py-10 justify-center items-center md:rounded-l-md rounded-t-md">
              <p className="text-white text-3xl font-semibold">Amsterdam</p>
              <div className="text-gray-300 text-center">
                <p>010-1234567</p>
                <p>info@interiozwars.org</p>
              </div>
              <p className="text-center text-gray-300">
                56 Tulip Terrace, 1023 EF Amsterdam, <br />
                Netherlands
              </p>
            </div>
            <div className="h-full bg-gray-300 w-[0.02rem]"></div>
            <div className="bg-black/50 flex flex-col gap-8 px-20 py-10 justify-center items-center md:rounded-r-md rounded-b-md">
              <p className="text-white text-3xl font-semibold">Amsterdam</p>
              <div className="text-gray-300 text-center">
                <p>010-1234567</p>
                <p>info@interiozwars.org</p>
              </div>
              <p className="text-center text-gray-300">
                56 Tulip Terrace, 1023 EF Amsterdam, <br />
                Netherlands
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="py-5 flex justify-center items-center">
        <p className="font-semibold md:tracking-wider">
          &copy; Copyright Elite Work {new Date().getFullYear()} . All right
          reserved.
        </p>
      </div>
    </>
  );
}
