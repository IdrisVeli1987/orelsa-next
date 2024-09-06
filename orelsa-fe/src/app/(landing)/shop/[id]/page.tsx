import ShopDetails from "@/components/UI/Details/ShopDetails";
import RelatedProducts from "@/components/UI/Releated/Products";
import LandingContainer from "@/components/Views/Landing/LandingContainer";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  params: {
    id: string;
  };
}
export default function ShopDetaiils({ params }: IProps) {
  return (
    <main>
      <section className="bg-[#F9F1E7]">
        <LandingContainer>
          <div className="flex justify-between items-center gap-6 w-full">
            <div className="flex justify-between items-center gap-6">
              <div className="flex gap-4">
                <Link href="/">Home</Link>
                <span className="font-bold">&gt;</span>
              </div>

              <div className="flex gap-4">
                <Link href="/shop">Shop</Link>
                <span className="font-bold">&gt;</span>
              </div>

              <div className="flex justify-between items-center gap-5 py-10">
                <Image
                  src="/Shop/Line.svg"
                  alt="mixer imag"
                  width={100}
                  height={100}
                  className="w-auto h-auto relative "
                />
                <p>Asgaard sofa</p>
              </div>
            </div>
          </div>
        </LandingContainer>
      </section>
      <ShopDetails />
      <RelatedProducts />
    </main>
  );
}
