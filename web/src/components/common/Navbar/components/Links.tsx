import { Type } from "@/components/ui/typography/type";
import { Link } from "react-router-dom";

const links = [
  { id: "1", label: "Search", href: "/" },
  { id: "2", label: "Watchlist", href: "/" },
  { id: "3", label: "Find me a movie", href: "/" },
];

const Links = () => {
  return (
    <div className="space-x-10">
      {links.map((item) => (
        <Link key={item.id} to={item.href}>
          <Type className="hover:text-accent underline">{item.label}</Type>
        </Link>
      ))}
    </div>
  );
};

export default Links;
