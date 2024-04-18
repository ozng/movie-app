import { useEffect, useState } from "react";
import NavbarLogo from "./components/NavbarLogo";
import UserAvatar from "./components/UserAvatar";
import Links from "./components/Links";

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
        <div>
          <NavbarLogo />
        </div>
        <div className="flex gap-16 items-center">
          <Links />
          <UserAvatar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
