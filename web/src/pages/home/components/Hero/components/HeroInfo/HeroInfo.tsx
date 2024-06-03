import { Movie } from "@/types/Movie";
import MovieTitle from "./components/MovieTitle";
import MovieRateDateAndLanguage from "./components/MovieRateDateAndLanguage";
import MovieHeroOverview from "./components/MovieHeroOverview";
import HeroButtons from "./components/HeroButtons";

type HeroInfoProps = {
  selectedMovie: Movie;
};

const HeroInfo = ({ selectedMovie }: HeroInfoProps) => {
  return selectedMovie ? (
    <div className="pt-32 px-24 w-[45%] flex flex-col gap-4">
      <MovieTitle title={selectedMovie.title} />
      <MovieRateDateAndLanguage
        originalLanguage={selectedMovie.original_language.toUpperCase()}
        releaseDate={selectedMovie.release_date}
        voteAvarage={selectedMovie.vote_average}
        voteCount={selectedMovie.vote_count}
      />
      <MovieHeroOverview overview={selectedMovie.overview} />
      <HeroButtons movieID={selectedMovie.id} />
    </div>
  ) : null;
};

export default HeroInfo;
