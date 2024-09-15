import { getDetailsById } from "@/api/ui/requests";
import ProductsDetails from "@/components/UI/Details/ProductsDetails";
import LandingContainer from "@/components/Views/Landing/LandingContainer";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  params: {
    id: string;
  };
}
export default async function ShopDetaiils({ params }: IProps) {
  const data = await getDetailsById(params.id);
  console.log(data);

  return (
    <main>
      <section className="bg-[#F9F1E7] ">
        {}
        <LandingContainer>
          <div className="flex justify-between items-center gap-6 w-full relative">
            <div className="flex justify-between items-center gap-6 fixed ">
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
                <p>{data.name}</p>
              </div>
            </div>
          </div>
        </LandingContainer>
      </section>
      <ProductsDetails {...data} />
      {/* <RelatedProducts /> */}
    </main>
  );
}