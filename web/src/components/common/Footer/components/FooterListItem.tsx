import { Link } from "react-router-dom";

type FooterListItemProps = {
  link: string;
  label: string;
};

const FooterListItem = ({ label, link }: FooterListItemProps) => {
  return (
    <li className="text-sm">
      <Link
        to={link}
        target="_blank"
        className="hover:underline hover:text-accent duration-150"
      >
        {label}
      </Link>
    </li>
  );
};

export default FooterListItem;
