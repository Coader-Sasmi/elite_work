/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { IoMdAdd, IoMdClose } from "react-icons/io";

export default function LightBox({ images }: any) {
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
  const handelClose = (e: any) => {
    if (e.target.dataset.close) {
      document.body.style.overflowY = "auto";
      setIsShow(false);
    }
  };

  return (
    <>
      <div className="pt-3">
        <div className="grid grid-cols-3 ">
          {images.map((curElm: string, index: number) => {
            return (
              <div key={index}>
                <div className="border border-secondary galaxy_card indivisual_gallery_div relative  flex  cursor-pointer items-center justify-center justify-items-center overflow-hidden ">
                  <img
                    src={curElm}
                    alt="image"
                    onClick={() => {
                      setIsShow(!isShow);
                      setClick(index);
                      document.body.style.overflowY = "invisible";
                    }}
                    className="hover:scale-105 hover:transition hover:duration-300 md:h-[7rem] h-28 w-full"
                  />
                  <span className="Eye_icon invisible absolute -translate-y-4  pt-[0.3rem] pl-[0] text-black  hover:black  ">
                    <IoMdAdd
                      onClick={() => {
                        setIsShow(!isShow);
                        setClick(index);
                        // document.body.style.overflowY = "invisible";
                      }}
                      className="!text-4xl"
                    />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {isShow ? (
        <div className="galaxy_slider_card">
          <nav
            className="absolute top-32 border left-10
          flex h-[2rem]
          w-7 items-center justify-between justify-items-center bg-white rounded-md"
          >
            <span className="cursor-pointer ">
              <IoMdClose
                onClick={(e) => {
                  setIsShow(false);
                  document.body.style.overflowY = "auto";
                }}
                className="text-black"
              />
            </span>
          </nav>
          <div
            data-close
            className=" relative flex h-full w-full items-center justify-center"
            onClick={handelClose}
          >
            <div className="indivisual_gallery_div absolute z-50 cursor-pointer">
              <div className="relative h-48 w-60 md:h-52 md:w-72 overflow-hidden lg:h-[60vh] lg:w-[100vh] ">
                <Image
                  layout="fill"
                  objectFit="cover"
                  unoptimized
                  //   src={item?.image}
                  src={images[click]}
                  alt="logo"
                />
              </div>
            </div>
          </div>

          <div
            className="absolute md:left-6 left-0 flex h-[2rem]
          w-[2rem] cursor-pointer items-center justify-center justify-items-center rounded-lg bg-white z-50"
          >
            <GoChevronLeft onClick={leftSide} className="!text-black" />
          </div>
          <div
            className="absolute md:right-6 right-0 flex h-[2rem]
          w-[2rem] cursor-pointer items-center justify-center justify-items-center rounded-lg bg-white z-50"
          >
            <GoChevronRight onClick={rightSide} className="!text-black" />
          </div>
        </div>
      ) : null}
    </>
  );
}
