import { Skeleton } from "../ui/skeleton";
import MovieCardSkeleton from "./MovieCardSkeleton";

const HorizontalMovieTVListSkeleton = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-4">
        <Skeleton className="w-full h-16" />
        <div className="flex gap-4 ">
          <div className="rounded-md group">
            <Skeleton className="w-[15%] h-10" />
          </div>
          <div className="rounded-md group">
            <Skeleton className="w-[15%] h-10" />
          </div>
        </div>
      </div>
      <div className="overflow-scroll no-scrollbar">
        <div className="flex gap-6 w-max py-6 px-4">
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
        </div>
      </div>
    </div>
  );
};

export default HorizontalMovieTVListSkeleton;
