import { Movie } from "@/types/Movie";
import VerticalMovieTvCard from "../../cards/VerticalMovieTvCard/VerticalMovieTvCard";

type VerticalMovieTVListProps = {
  movie: Movie[];
};

const VerticalMovieTVList = ({ movie }: VerticalMovieTVListProps) => {
  return (
    <div className="space-y-4">
      {movie && movie.length > 0
        ? movie.map((item, index, self) => {
            const lastItemIndex = self.length - 1;
            const isLastItem = index === lastItemIndex;
            return (
              <div key={item.id} className="space-y-4">
                <VerticalMovieTvCard movie={item} />
                {isLastItem ? null : (
                  <div className="h-[1px] w-full bg-faded-1" />
                )}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default VerticalMovieTVList;
