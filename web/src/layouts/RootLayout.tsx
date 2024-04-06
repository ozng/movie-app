import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
