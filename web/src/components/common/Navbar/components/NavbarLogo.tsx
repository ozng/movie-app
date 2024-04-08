import Logo from "../../Logo/Logo";

const NavbarLogo = () => {
  console.log(import.meta.env.VITE_PORT);
  return (
    <div className="size-16 cursor-pointer">
      <Logo />
    </div>
  );
};

export default NavbarLogo;
