"use client";

import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

export default function Slider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
    >
      {/* <SwiperSlide>
        <div className="h-[300px] md:h-[350px] p-6 md:pt-10 md:pl-10 mb-10 flex flex-col justify-center items-center">
          <Image
            src="/rooms/R-1.svg" // Replace with your actual image path
            alt="Room 1"
            width={100}
            height={100}
            style={{
              width: 500,
              height: 500,
              objectPosition: "center",
            }}
            className="mb-4 md:mb-8 rounded-full w-[330px] h-560px"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[300px] md:h-[350px] p-6 md:pt-10 md:pl-10 mb-10 flex flex-col justify-center items-center">
          <Image
            src="/rooms/R-2.svg" // Replace with your actual image path
            alt="Room 2"
            width={100}
            height={100}
            style={{
              width: 100,
              height: 100,
              objectPosition: "center",
            }}
            className="mb-4 md:mb-8 rounded-full"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[300px] md:h-[350px] p-6 md:pt-10 md:pl-10 mb-10 flex flex-col justify-center items-center">
          <Image
            src="/rooms/R-3.svg" // Replace with your actual image path
            alt="Room 3"
            width={100}
            height={100}
            style={{
              width: 100,
              height: 100,
              objectPosition: "center",
            }}
            className="mb-4 md:mb-8 rounded-full"
          />
        </div>
      </SwiperSlide> */}
    </Swiper>
  );
}
