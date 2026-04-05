"use client";
import Image from "next/image";
import { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { IoMdClose } from "react-icons/io";

export default function LightBox({ images }: { images: string[] }) {
  const [isShow, setIsShow] = useState(false);
  const [click, setClick] = useState(0);

  function leftSide() {
    setClick((prev) => (prev > 0 ? prev - 1 : 0));
  }
  function rightSide() {
    setClick((prev) =>
      images.length - 1 > prev ? prev + 1 : images.length - 1
    );
  }
  const handelClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).dataset.close) {
      document.body.style.overflowY = "auto";
      setIsShow(false);
    }
  };

  return (
    <>
      <div className="pt-3">
        <div className="grid grid-cols-3">
          {images.map((curElm: string, index: number) => (
            <div key={index}>
              <div className="border border-secondary relative flex cursor-pointer items-center justify-center overflow-hidden">
                <div className="relative h-28 md:h-[7rem] w-full">
                  <Image
                    src={`/${curElm}`}
                    alt="Gallery image"
                    fill
                    className="object-cover hover:scale-105 transition duration-300"
                    onClick={() => {
                      setIsShow(!isShow);
                      setClick(index);
                      document.body.style.overflowY = "hidden";
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isShow && (
        <div className="galaxy_slider_card">
          {/* Close button */}
          <nav className="absolute top-32 left-10 flex h-8 w-7 items-center justify-center bg-white rounded-md z-50">
            <IoMdClose
              onClick={() => {
                setIsShow(false);
                document.body.style.overflowY = "auto";
              }}
              className="text-black cursor-pointer"
            />
          </nav>

          {/* Fullscreen image */}
          <div
            data-close="true"
            className="relative flex h-full w-full items-center justify-center"
            onClick={handelClose}
          >
            <div className="absolute z-50 cursor-pointer">
              <div className="relative h-48 w-60 md:h-52 md:w-72 lg:h-[60vh] lg:w-[100vh] overflow-hidden">
                <Image
                  src={`/${images[click]}`}
                  alt="Gallery fullscreen"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Left arrow */}
          <div className="absolute md:left-6 left-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-white z-50">
            <GoChevronLeft onClick={leftSide} className="text-black" />
          </div>

          {/* Right arrow */}
          <div className="absolute md:right-6 right-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-white z-50">
            <GoChevronRight onClick={rightSide} className="text-black" />
          </div>
        </div>
      )}
    </>
  );
}