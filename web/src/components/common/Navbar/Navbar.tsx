import NavbarLogo from "./components/NavbarLogo";
import UserAvatar from "./components/UserAvatar";

const Navbar = () => {
  return (
    <nav className="bg-light-background dark:bg-dark-background">
      <div className="container flex items-center justify-between py-2">
        <NavbarLogo />
        <UserAvatar />
      </div>
    </nav>
  );
};

export default Navbar;
