import LandingContainer from "@/components/Views/Landing/LandingContainer";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="bg-contact flex items-center justify-center min-h-[300px] w-full bg-no-repeat bg-center bg-cover">
      <div className="flex flex-col justify-center items-center -mt-10">
        <Image
          src="/Contact/Logos-05.svg"
          alt="Logo"
          width={77}
          height={77}
          className="bg-no-repeat bg-center bg-cover"
        />

        <p className="text-5xl font-medium">Contact</p>

        <div className="flex justify-between items-center gap-3">
          <Link href="/" className="text-base font-bold p-3">
            Home
          </Link>

          <span className="font-bold">&gt;</span>

          <Link href="/shop" className="text-base font-medium">
            Contact
          </Link>
        </div>
      </div>
      <LandingContainer>
        {/* <Form /> */}
      </LandingContainer>
    </section>
  );
}
