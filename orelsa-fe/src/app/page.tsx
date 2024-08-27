import Header from "@/components/Views/Landing/Header";
import React from "react";
import HomePage from "./(landing)/page";
import Slider from "@/components/UI/Slider/Slider";

export default function LandingPage() {
  return (
    <>
      <Header />
      <HomePage />
      <Slider />
    </>
  );
}
