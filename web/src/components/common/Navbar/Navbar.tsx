import NavbarLogo from "./components/NavbarLogo";
import Links from "./components/Links";

const Navbar = () => {
  return (
    <nav
      className={
        "bg-black/30 backdrop-blur-sm absolute z-50 w-full duration-200"
      }
    >
      <div className="container flex items-center justify-between py-2">
        <div>
          <NavbarLogo />
        </div>
        <div className="flex gap-16 items-center">
          <Links />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
