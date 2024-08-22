import LandingFooter from "@/components/UI/Common/Footer/LandingFooter";
import LandingHeader from "@/components/Views/Landing/LandingHeader";
import Providers from "../../providers";

const LandingLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <LandingHeader />
      {children}
      <LandingFooter />
    </Providers>
  );
};

export default LandingLayout;
