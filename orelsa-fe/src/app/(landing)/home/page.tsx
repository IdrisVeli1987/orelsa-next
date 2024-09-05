import OurProducts from "@/components/UI/OurProducts/OurProducts";
import Rooms from "@/components/UI/Rooms/Rooms";
import TheRange from "@/components/UI/TheRange/TheRange";
import Footer from "@/components/Views/Landing/Footer";
import { Button } from "@nextui-org/react";
import Image from "next/image";

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

        <div className="">
          <div className="shadow-2xl border-none rounded-lg absolute top-1/2 right-[60px] transform -translate-y-1/2 z-10 p-4 w-[645px] h-[600px] mt-20">
            <div className="flex justify-between w-10 ">
              <div className="w-[560px] full">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper{" "}
                  <span className="text-[#B88E2F] bg-transparent font-black  text-2xl ">
                    mattis
                  </span>
                </p>
                <div className="ml-11 pb-10 pt-9">
                  <Button className="gap-3 bg-[#B88E2F] w-[222px] h-[75px] font-bold text-base text-white">
                    BUY NOW
                  </Button>
                </div>
              </div>
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
