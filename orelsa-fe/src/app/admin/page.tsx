import LandingContainer from "@/components/Views/Landing/LandingContainer";
import { Input } from "@nextui-org/react";

// Define the type for input variants
// type InputVariant = "flat" | "bordered" | "underlined" | "faded";

const AdminDashboard = () => {
  // List of input variants with explicit type
  // const variants: InputVariant[] = ["flat", "bordered", "underlined", "faded"];

  return (
    <section className="">
      <LandingContainer>
        <div className="w-svw h-svh flex items-center justify-center">
          {/* Background styling */}
          {/* Centered container with shadow and border */}
          <div className="shadow-2xl border-2 border-white-500/100 relative p-14 lg:w-[50%] mx-auto">
            <div className="w-full flex flex-col gap-4">
              {/* Render input fields with different variants */}
              <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input type="email" variant={"underlined"} label="User Name" />
              </div>

              <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input
                  type="password"
                  variant={"underlined"}
                  label="Password"
                />
              </div>
            </div>
          </div>
        </div>
      </LandingContainer>
    </section>
  );
};

export default AdminDashboard;

// {
//   variants.map((variant) => (
//     <div
//       key={variant}
//       className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
//     >
//       <Input
//         type="email"
//         variant={variant as InputVariant} // Type assertion to match the expected type
//         label="username" // Note: Consider updating the label as needed
//       />
//       {/* Uncomment and modify this placeholder as needed */}
//       <Input
//         type="email"
//         variant={variant as InputVariant}
//         label="Email"
//         placeholder="Enter your email"
//       />
//     </div>
//   ));
// }
