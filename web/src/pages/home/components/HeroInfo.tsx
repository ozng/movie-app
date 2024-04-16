import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/typography/title";
import { Type } from "@/components/ui/typography/type";
import { Movie } from "@/models/Movie";
import moment from "moment";
import { Link } from "react-router-dom";

type HeroInfoProps = {
  selectedMovie: Movie;
};

const HeroInfo = ({ selectedMovie }: HeroInfoProps) => {
  return (
    <div className="pt-32 px-24 w-[45%] flex flex-col gap-4">
      <Title size={"6xl"} thickness={"semibold"} variant={"light"}>
        {selectedMovie?.title}
      </Title>
      <div className="flex gap-2 text-faded-1 text-sm">
        <Type variant={"accent"} thickness={"semibold"}>
          TMDB
        </Type>
        <Type variant={"light"} thickness={"semibold"}>
          {selectedMovie?.vote_average.toFixed(1)}
        </Type>
        <Type variant={"fade-2"}>({selectedMovie?.vote_count})</Type>
        <Type>|</Type>
        <Type variant={"light"}>
          {moment(selectedMovie?.release_date).format("YYYY")}
        </Type>
        <Type>|</Type>
        <Type variant={"light"}>
          {selectedMovie?.original_language.toUpperCase()}
        </Type>
      </div>
      <Type variant={"light"} className="line-clamp-3">
        {selectedMovie?.overview}
      </Type>
      <div className="flex gap-6">
        <Button>Watch Trailer</Button>
        <Button variant={"secondary"}>
          <Link to={`/detail/${selectedMovie?.id}`}>Detail</Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroInfo;
