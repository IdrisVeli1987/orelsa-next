import HomePageImg from "@/../public/HomePage/HomePageImg.svg";
import OurProducts from "@/components/UI/OurProducts/OurProducts";
import Rooms from "@/components/UI/Rooms/Rooms";
import TheRange from "@/components/UI/TheRange/TheRange";
import Footer from "@/components/Views/Landing/Footer";
import { Button } from "@nextui-org/react";
import axios from "axios";

export default async function HomePage() {
  const { data } = await axios.get(
    "http://localhost:9089/guest/homeNewCollection"
  );

  const backgroundImage = data[0]?.newproductPhoto
    ? `url(${data[0].newproductPhoto})`
    : `url(${HomePageImg.src})`;
  return (
    <>
      <main
        className="bg-no-repeat bg-cover h-screen flex justify-end items-center"
        style={{ backgroundImage: `${backgroundImage}` }}
      >
        <div className="shadow-2xl bg-white bg-opacity-40 rounded-[16px] px-4 mr-5">
          <h2 className="ml-11 mt-4 font-bold text-[52px] text-[#B88E2F] w-[12ch]">
            {data[0]?.title ?? "Yeni kolleksiya"}
          </h2>
          <p className="ml-11 text-black mt-9 text-lg font-medium text-wrap max-w-lg ">
            {data[0]?.description ?? "Saç gücləndirici"}
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
