"use client";
import React from "react";
import Quality from "@/components/UI/Quality/Quality";
import ShopRooms from "@/components/UI/ShopRooms/ShopRooms";
import LandingContainer from "@/components/Views/Landing/LandingContainer";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Link from "next/link";

export default function ShopPage() {
  const [selectedNumberOfProducts, setSelectedNumberOfProducts] =
    React.useState(16);

  const handleNumberOfProductsChange = (numberOfProducts: number): void => {
    setSelectedNumberOfProducts(numberOfProducts);
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
              <div className="flex justify-center items-center gap-8">
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
                    <DropdownItem key={16}>16</DropdownItem>
                    <DropdownItem key={32}>32</DropdownItem>
                    <DropdownItem key={48}>48</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
        </LandingContainer>
      </section>
      <LandingContainer>
        <ShopRooms numberOfProducts={selectedNumberOfProducts} />
      </LandingContainer>
      <Quality />
    </main>
  );
}
