"use client";

import HomePageImg from "@/../public/HomePage/HomePageImg.svg"; // Make sure the path is correct
import OurProducts from "@/components/UI/OurProducts/OurProducts";
import Rooms from "@/components/UI/Rooms/Rooms";
import TheRange from "@/components/UI/TheRange/TheRange";
import Footer from "@/components/Views/Landing/Footer";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

// Define types for the data
interface ProductData {
  newproductPhoto?: string;
  title?: string;
  description?: string;
}

export default function HomePage() {
  const [data, setData] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9089/guest/homeNewCollection"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Ensure loading is set to false in case of error
      }
    };

    fetchData();
  }, []);

  // Handle the case where the data may not be loaded yet
  const backgroundImage =
    data.length > 0 && data[0]?.newproductPhoto
      ? `url(${data[0].newproductPhoto})`
      : `url(${HomePageImg.src})`;

  // Handle loading state
  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  // If data is empty, show a fallback message
  if (data.length === 0) {
    return <div className="text-center py-10">No data available</div>;
  }

  return (
    <>
      <main
        className="bg-no-repeat bg-cover h-screen flex justify-end items-center"
        style={{ backgroundImage }}
      >
        <div className="w-full md:w-[90%] lg:w-[60%] xl:w-[50%] shadow-2xl bg-white bg-opacity-40 rounded-[16px] px-6 py-8 mx-5">
          <h2 className="ml-0 md:ml-11 mt-4 font-bold text-[32px] sm:text-[42px] lg:text-[52px] text-[#B88E2F]">
            {data[0]?.title ?? "Yeni kolleksiya"}
          </h2>
          <p className="ml-0 md:ml-11 text-black mt-6 sm:mt-9 text-base sm:text-lg font-medium text-wrap max-w-full sm:max-w-lg">
            {data[0]?.description ?? "Saç gücləndirici"}
          </p>
          <div className="ml-0 md:ml-11 pb-6 sm:pb-10 pt-6 sm:pt-9">
            <Link
              href="https://wa.me/+994559706747"
              target="_blank"
              className="gap-3 bg-[#B88E2F] w-full sm:w-[222px] h-[60px] sm:h-[75px] font-bold text-base text-white flex items-center justify-center"
            >
              <p className="text-center my-7">İndi sifariş et</p>
            </Link>
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
