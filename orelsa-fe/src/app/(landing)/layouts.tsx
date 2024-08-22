import Footer from "@/components/Views/Landing/Footer";
import Header from "@/components/Views/Landing/Header";
import Providers from "../providers";

const LandingLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <Header />
      {children}
      <Footer />
    </Providers>
  );
};

export default LandingLayout;
