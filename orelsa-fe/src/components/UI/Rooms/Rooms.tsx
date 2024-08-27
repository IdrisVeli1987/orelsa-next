"use client";

import { IRooms } from "@/components/Views/Landing/db";
import LandingContainer from "@/components/Views/Landing/LandingContainer";
import Image from "next/image";
import { useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Rooms: React.FC = () => {
  const [roomsSlide, setRoomsSlide] = useState<IRooms[]>([]);
  return (
    <section className="bg-[#FCF8F3]">
      <LandingContainer>
        <div className="w-full h-[641px] grid grid-rows-4 ">
          <div className="w-2/4 pt-[130px]">
            <h3 className="w-[12ch] font-bold text-[40px] text-[#3A3A3A]">
              50+ Beautiful rooms inspiration
            </h3>
            <p className="w-[255px] pt-[105px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <Swiper
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={false}
            spaceBetween={30}
            style={{ overflow: "hidden", maxWidth: "100%" }}
            modules={[Autoplay, Navigation]}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {roomsSlide.map(({ id, src }) => {
              return (
                <SwiperSlide key={id}>
                  <div>
                    <Image src="src" alt="Images" width={100} height={100}/>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </LandingContainer>
    </section>
  );
};

export default Rooms;
