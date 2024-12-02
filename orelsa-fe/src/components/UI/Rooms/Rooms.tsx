"use client";

import LandingContainer from "@/components/Views/Landing/LandingContainer";
import "../../../../node_modules/swiper/swiper-bundle.min.css";
import Slider from "../Slider/Slider";

const Rooms: React.FC = () => {
  return (
    <section className="bg-[#FCF8F3]">
      <LandingContainer>
        <div className="w-full lg:h-[641px] items-center grid grid-cols-1 lg:grid-cols-4">
          <div className="col-span-1 lg:col-span-1 flex flex-col items-center justify-center lg:items-start lg:justify-start text-center lg:text-left">
            <h3 className="w-[12ch] font-bold text-[40px] text-[#3A3A3A]">
              50+ Beautiful rooms inspiration
            </h3>
            <p className="w-[255px] pt-4 lg:pt-[105px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="col-span-1 lg:col-span-3 lg:max-h-[556px] h-full">
            <Slider />
          </div>
        </div>
      </LandingContainer>
    </section>
  );
};

export default Rooms;
