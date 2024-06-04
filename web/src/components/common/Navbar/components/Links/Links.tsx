import { Type } from "@/components/ui/typography/type";
import { Link } from "react-router-dom";
import { links } from "./data/links";

const Links = () => {
  return (
    <div className="space-x-10">
      {links.map((item) => (
        <Link key={item.id} to={item.href}>
          <Type variant={"link"} textColor={"light"}>
            {item.label}
          </Type>
        </Link>
      ))}
    </div>
  );
};

export default Links;
