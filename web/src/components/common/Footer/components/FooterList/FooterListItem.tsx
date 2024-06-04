import { Type } from "@/components/ui/typography/type";
import { Link } from "react-router-dom";

type FooterListItemProps = {
  link: string;
  label: string;
};

const FooterListItem = ({ label, link }: FooterListItemProps) => {
  return (
    <li className="text-sm">
      <Link to={link} target="_blank">
        <Type variant={"link"}>{label}</Type>
      </Link>
    </li>
  );
};

export default FooterListItem;
