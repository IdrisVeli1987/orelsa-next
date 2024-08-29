import Header from "@/components/Views/Landing/Header";
import React from "react";
import Slider from "@/components/UI/Slider/Slider";
import HomePage from "./[locale]/(landing)/home/page";
import ShopPage from "./[locale]/(landing)/shop/page";

export default function LandingPage() {
  return (
    <>
      <Header />
      <HomePage />
      <ShopPage/>
      <Slider />
    </>
  );
}
