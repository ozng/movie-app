import { Type } from "@/components/ui/typography/type";

type MovieHeroOverviewProps = {
  overview: string;
};

const MovieHeroOverview = ({ overview }: MovieHeroOverviewProps) => {
  return (
    <Type variant={"overview"} textColor={"light"} className="line-clamp-3">
      {overview}
    </Type>
  );
};

export default MovieHeroOverview;
