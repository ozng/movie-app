import { MovieCastCredit } from "@/types/Movie";
import CastMovieCard from "./cards/CastMovieCard";

type PeopleMovieCastListProps = {
  castList: MovieCastCredit[];
};

const PeopleMovieCastList = ({ castList }: PeopleMovieCastListProps) => {
  return (
    <div className="space-y-4">
      {castList.map((item, index, self) => (
        <div key={item.id}>
          <CastMovieCard movie={item} />
          {self.length - 1 !== index ? (
            <div className="h-[1px] w-full bg-faded-1" />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default PeopleMovieCastList;
