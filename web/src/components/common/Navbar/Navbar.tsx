import NavbarLogo from "./components/NavbarLogo";
// import UserAvatar from "./components/UserAvatar";
import Links from "./components/Links";

const Navbar = () => {
  return (
    <nav
      className={
        "bg-transparent backdrop-blur-sm fixed z-50 w-full duration-200"
      }
    >
      <div className="container flex items-center justify-between py-2">
        <div>
          <NavbarLogo />
        </div>
        <div className="flex gap-16 items-center">
          <Links />
          {/* <UserAvatar /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
