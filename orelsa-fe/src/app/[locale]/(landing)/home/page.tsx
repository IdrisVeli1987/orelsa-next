import OurProducts from "@/components/UI/OurProducts/OurProducts";
import Rooms from "@/components/UI/Rooms/Rooms";
import TheRange from "@/components/UI/TheRange/TheRange";
import Footer from "@/components/Views/Landing/Footer";
import LandingContainer from "@/components/Views/Landing/LandingContainer";
import Image from "next/image";
import React from "react";

export default function HomePage() {
  return (
    <main className="">
      <div className="w-full relative">
        <Image
          src="/HomePage/HomePageImg.svg"
          alt="Content image"
          width={500}
          height={500}
          className="w-full h-auto"
        />

        <div className="bg-[#FFF3E3;] absolute top-1/2 right-[60px] transform -translate-x-1/2 -translate-y-1/2 z-10 p-4 w-[645px] h-[550px] mt-20">
          <div className="w-[560px] h-[345px]">
            <h5
              id="ArruvalTitle"
              className="text-[#333333] font-semibold text-base ml-11 mt-16"
            >
              New Arrival
            </h5>
            <h2 className="ml-11 mt-4 font-bold text-[52px] text-[#B88E2F] w-[12ch]">
              Discover Our New Collection
            </h2>
            <p className="ml-11 mt-9 text-lg font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis
            </p>
            <div className="ml-11 pb-10 pt-9">
              <button className="gap-3 bg-[#B88E2F] w-[222px] h-[75px] font-bold text-base text-white">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <TheRange />
      <OurProducts />
      <Rooms />
      <Footer />
      
    </main>
  );
}
