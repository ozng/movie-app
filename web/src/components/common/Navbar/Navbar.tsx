import { useEffect, useState } from "react";
import NavbarLogo from "./components/NavbarLogo";
import UserAvatar from "./components/UserAvatar";

const Navbar = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });

    return () => window.removeEventListener("scroll", () => console.log(""));
  }, []);

  return (
    <nav
      className={`${
        scroll > 200
          ? "bg-light-background dark:bg-dark-background"
          : "bg-transparent"
      } fixed z-50 w-full duration-200`}
    >
      <div className="container flex items-center justify-between py-2">
        <NavbarLogo />
        <UserAvatar />
      </div>
    </nav>
  );
};

export default Navbar;
