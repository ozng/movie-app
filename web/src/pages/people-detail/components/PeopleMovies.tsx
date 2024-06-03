import PeopleMovieCastList from "@/components/PeopleMovieCastList";
import { Type } from "@/components/ui/typography/type";
import usePeoplePicture from "./PeoplePoster/hooks/usePeoplePicture";

const PeopleMovies = () => {
  const { movies } = usePeoplePicture();

  return (
    <div className="space-y-4">
      <Type thickness={"semibold"}>Movies</Type>
      {movies && movies.cast && movies.cast.length > 0 ? (
        <PeopleMovieCastList castList={movies.cast} />
      ) : null}
    </div>
  );
};

export default PeopleMovies;
