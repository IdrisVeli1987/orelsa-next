import LandingContainer from "@/components/Views/Landing/LandingContainer";
import Image from "next/image";
import Link from "next/link";

export default function ShopPage() {
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

            <Link href="/" className="text-base font-medium">
              Shop
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#F9F1E7] h-[100px] ">
        <LandingContainer>
          <div className="flex justify-center items-center gap-3 h-[100px]">
            <Image
              src="/Shop/mixer.svg"
              alt="mixer imag"
              width={100}
              height={100}
              className="w-auto h-auto relative "
            />
            <p>Filter</p>
            <Image
              src="/Shop/dot.svg"
              alt="mixer imag"
              width={100}
              height={100}
              className="w-auto h-auto relative "
            />
          </div>
        </LandingContainer>
      </section>
    </main>
  );
}
