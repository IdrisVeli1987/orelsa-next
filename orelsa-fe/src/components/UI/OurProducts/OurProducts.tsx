import { getAllProducts } from "@/api/ui/requests";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import LandingContainer from "@/components/Views/Landing/LandingContainer";
import { IProduct } from "@/interface/ui";
import { Button } from "@nextui-org/react";

const OurProducts: React.FC = async () => {
  const TheOurProducts = await getAllProducts();

  return (
    <section>
      <LandingContainer>
        <div className="w-full">
          <h2 className="text-4xl font-extrabold text-center text-[#333333] mb-6">
            Our Products
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {TheOurProducts.map((TheOurProduct: IProduct) => {
              return (
                TheOurProduct?.active && (
                  <ProductCard key={TheOurProduct?._id} {...TheOurProduct} />
                )
              );
            })}
          </div>
          <div className="w-full my-6 flex justify-center">
            <Button
              variant="solid"
              color="default"
              className="border-2 border-[#B88E2F] bg-white text-center py-8 px-16 font-semibold text-base text-[#B88E2F]"
            >
              Show More
            </Button>
          </div>
        </div>
      </LandingContainer>
    </section>
  );
};

export default OurProducts;
