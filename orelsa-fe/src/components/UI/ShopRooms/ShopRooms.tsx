"use client";

import ProductCard from "@/components/shared/ProductCard/ProductCard";
import { ProductDetail } from "@/Utils/db";
import axios from "axios";
import { useEffect, useState } from "react";

const ShopRooms = ({ numberOfProducts }: { numberOfProducts: number }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsList = async () => {
      const url = "http://localhost:9089/guest/product";

      try {
        const { data } = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProductsList();
  }, []);

  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mt-10 pb-3">
        {products.slice(0, numberOfProducts).map((product: ProductDetail) => {
          return <ProductCard {...product} />;
        })}
      </div>
    </section>
  );
};
export default ShopRooms;
