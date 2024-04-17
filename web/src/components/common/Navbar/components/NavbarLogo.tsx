import { Link } from "react-router-dom";
import Logo from "../../Logo/Logo";

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
