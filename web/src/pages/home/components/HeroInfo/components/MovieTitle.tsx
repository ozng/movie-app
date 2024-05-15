import { Title } from "@/components/ui/typography/title";

type MovieTitleProps = {
  title: string;
};

const MovieTitle = ({ title }: MovieTitleProps) => {
  return (
    <Title variant={"h1"} textColor={"light"}>
      {title}
    </Title>
  );
};

export default MovieTitle;
