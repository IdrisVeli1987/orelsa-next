"use client"

import OurProducts from "@/components/UI/OurProducts/OurProducts";
import Rooms from "@/components/UI/Rooms/Rooms";
import TheRange from "@/components/UI/TheRange/TheRange";
import Footer from "@/components/Views/Landing/Footer";
import { Button } from "@nextui-org/react";
import axios from "axios";
import Image from "next/image";

export default async function HomePage() {
  const { data } = await axios.get(
    "http://localhost:9089/guest/homeNewCollection"
  );
  console.log(data[0]);
  return (
    <>
      <main
        style={{
          background: `url("${data[0].newproductPhoto}") no-repeat`,
          backgroundSize: "cover",
          display: "flex",
          height: "100vh",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingRight: 50,
        }}
      >
        <div
          style={{ backgroundColor: "rgba(256,256,256,0.4)", borderRadius: 16 }}
        >
          {/* <h5
            id="ArruvalTitle"
            className="text-[#333333] font-semibold text-base ml-11 mt-16"
          >
            Yeni gələn
          </h5> */}
          <h2 className="ml-11 mt-4 font-bold text-[52px] text-[#B88E2F] w-[12ch]">
            {data[0].title}
          </h2>
          <p className="ml-11 mt-9 text-lg font-medium text-wrap max-w-lg ">
            {data[0].description}
          </p>
          <div className="ml-11 pb-10 pt-9">
            <Button className="gap-3 bg-[#B88E2F] w-[222px] h-[75px] font-bold text-base text-white">
              İndi sifariş et
            </Button>
          </div>
        </div>
      </main>
      <TheRange />
      <OurProducts />
      <Rooms />
      <Footer />
    </>
  );
}
