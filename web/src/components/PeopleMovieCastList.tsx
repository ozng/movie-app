import { MovieCastCredit } from "@/types/Movie";
import CastMovieCard from "./cards/CastMovieCard";

type PeopleMovieCastListProps = {
  castList: MovieCastCredit[];
};

const PeopleMovieCastList = ({ castList }: PeopleMovieCastListProps) => {
  return (
    <div className="space-y-4">
      {castList.map((item) => (
        <CastMovieCard key={item.id} movie={item} />
      ))}
    </div>
  );
};

export default PeopleMovieCastList;
