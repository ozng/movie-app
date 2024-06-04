import Logo from "@/components/common/Logo/Logo";
import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <div className="size-16 cursor-pointer">
      <Link to={"/"}>
        <Logo />
      </Link>
    </div>
  );
};

export default NavbarLogo;
