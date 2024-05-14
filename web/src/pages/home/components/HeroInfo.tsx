import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/typography/title";
import { Type } from "@/components/ui/typography/type";
import { Movie } from "@/types/Movie";
import moment from "moment";
import { Link } from "react-router-dom";

type HeroInfoProps = {
  selectedMovie: Movie;
};

const HeroInfo = ({ selectedMovie }: HeroInfoProps) => {
  return (
    <div className="pt-32 px-24 w-[45%] flex flex-col gap-4">
      <Title variant={"h1"} textColor={"light"}>
        {selectedMovie?.title}
      </Title>
      <div className="flex gap-2 text-faded-1 text-sm">
        <Type textColor={"accent"}>TMDB</Type>
        <Type textColor={"fade-2"}>
          {selectedMovie?.vote_average.toFixed(1)}
        </Type>
        <Type textColor={"fade-2"}>({selectedMovie?.vote_count})</Type>
        <Type>|</Type>
        <Type textColor={"fade-2"}>
          {moment(selectedMovie?.release_date).format("YYYY")}
        </Type>
        <Type>|</Type>
        <Type textColor={"fade-2"}>
          {selectedMovie?.original_language.toUpperCase()}
        </Type>
      </div>
      <Type variant={"overview"} textColor={"light"} className="line-clamp-3">
        {selectedMovie?.overview}
      </Type>
      <div className="flex gap-6">
        <Button>Watch Trailer</Button>
        <Link to={`/detail/${selectedMovie?.id}`}>
          <Button variant={"secondary"}>Detail</Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroInfo;
