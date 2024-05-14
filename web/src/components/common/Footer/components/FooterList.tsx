import { footer } from "@/static/footer";
import FooterListItem from "./FooterListItem";
import { Title } from "@/components/ui/typography/title";

type FooterListProps = {
  title: string;
  list: typeof footer.links;
};

const FooterList = ({ title, list }: FooterListProps) => {
  return (
    <div>
      <Title variant={"h4"} className="mb-2">
        {title}
      </Title>
      <ul className="flex flex-col gap-1">
        {list.map((item) => (
          <FooterListItem key={item.id} label={item.label} link={item.link} />
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
