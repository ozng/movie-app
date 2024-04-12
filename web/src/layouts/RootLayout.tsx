import Footer from "@/components/common/Footer/Footer";
import Navbar from "@/components/common/Navbar/Navbar";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
