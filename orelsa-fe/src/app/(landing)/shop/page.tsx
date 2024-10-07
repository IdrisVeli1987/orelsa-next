"use client";
import Quality from "@/components/UI/Quality/Quality";
import ShopRooms from "@/components/UI/ShopRooms/ShopRooms";
import LandingContainer from "@/components/Views/Landing/LandingContainer";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function ShopPage() {
  const [selectedNumberOfProducts, setSelectedNumberOfProducts] =
    React.useState("16");
  const [selectedSortOption, setSelectedSortOption] = React.useState("Default");

  const handleNumberOfProductsChange = (numberOfProducts: string): void => {
    setSelectedNumberOfProducts(numberOfProducts);
  };

  const handleSortOptionChange = (sortBy: string) => {
    setSelectedSortOption(sortBy);
  };

  return (
    <main className="w-full h-full overflow-hidden">
      <section className="bg-hero flex items-center justify-center min-h-[300px] w-full relative bg-no-repeat bg-center bg-cover">
        <div className="">
          <p className="mt-3 text-center font-medium text-5xl w-full p-2 ">
            Shop
          </p>

          <div className="flex justify-between items-center">
            <Link href="/" className="text-base font-bold">
              Home
            </Link>

            <span className="font-bold">&gt;</span>

            <Link href="/shop" className="text-base font-medium">
              Shop
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#F9F1E7] py-6">
        <LandingContainer>
          <div className="flex justify-between items-center gap-6 w-full">
            <div className="flex justify-between items-center gap-6">
              <div className="flex gap-3">
                <Link href="">
                  <Image
                    src="/Shop/mixer.svg"
                    alt="mixer imag"
                    width={100}
                    height={100}
                    className="w-auto h-auto relative "
                  />
                </Link>
                <p>Filter</p>
              </div>

              <Link href="">
                <Image
                  src="/Shop/dot.svg"
                  alt="dot image"
                  width={100}
                  height={100}
                  className="w-auto h-auto relative "
                />
              </Link>

              <Link href="">
                <Image
                  src="/Shop/icon-3.svg"
                  alt="icon 3"
                  width={100}
                  height={100}
                  className="w-auto h-auto relative "
                />
              </Link>

              <div className="flex justify-center items-center gap-8">
                <Image
                  src="/Shop/Line.svg"
                  alt="line separator"
                  width={100}
                  height={100}
                  className="w-auto h-auto relative "
                />
                <p>Showing 1–16 of 32 results</p>
              </div>
            </div>

            <div className="flex justify-between items-center gap-4">
              <div className="flex justify-center items-center gap-4">
                <p className="">Show</p>
                <Dropdown className="w-[4rem] bg-slate-50">
                  <DropdownTrigger>
                    <Button variant="bordered" className="capitalize">
                      {selectedNumberOfProducts}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Number of products to show"
                    variant="flat"
                    selectionMode="single"
                    selectedKeys={new Set([selectedNumberOfProducts])}
                    onSelectionChange={handleNumberOfProductsChange}
                  >
                    <DropdownItem key="16">16</DropdownItem>
                    <DropdownItem key="32">32</DropdownItem>
                    <DropdownItem key="48">48</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>

              <div className="flex justify-center items-center gap-4">
                <p className="">Sort by</p>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered" className="capitalize">
                      {selectedSortOption}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Sort options"
                    variant="flat"
                    selectionMode="single"
                    selectedKeys={new Set([selectedSortOption])}
                    onSelectionChange={handleSortOptionChange}
                  >
                    <DropdownItem key="Default">Default</DropdownItem>
                    <DropdownItem key="Date">Date</DropdownItem>
                    <DropdownItem key="Category">Category</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
        </LandingContainer>
      </section>
      <LandingContainer>
        <ShopRooms />
      </LandingContainer>
      <Quality />
    </main>
  );
}
