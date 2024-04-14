import { footer } from "@/static/footer";
import FooterListItem from "./FooterListItem";

type FooterListProps = {
  title: string;
  list: typeof footer.links;
};

const FooterList = ({ title, list }: FooterListProps) => {
  return (
    <div>
      <h2 className="font-semibold mb-2">{title}</h2>
      <ul className="flex flex-col gap-1">
        {list.map((item) => (
          <FooterListItem key={item.id} label={item.label} link={item.link} />
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
