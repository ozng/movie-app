import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

type ExternalLinkProps = {
  text?: string;
  link: string;
};

const ExternalLink = ({ link = "", text = "" }: ExternalLinkProps) => {
  return (
    <Link
      to={link}
      target="_blank"
      className="underline hover:text-accent flex items-center justify-center gap-2"
    >
      <FaExternalLinkAlt size={12} />
      {text}
    </Link>
  );
};

export default ExternalLink;
