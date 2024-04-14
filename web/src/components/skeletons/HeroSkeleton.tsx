import { Skeleton } from "../ui/skeleton";
import MovieCardSkeleton from "./MovieCardSkeleton";

const HeroSkeleton = () => {
  return (
    <div className="min-h-screen w-full text-light-background flex flex-col justify-between">
      <div className="pt-32 px-24 w-[45%] flex flex-col gap-4">
        <Skeleton className="w-full h-16" />
        <div className="flex gap-2 text-faded-1 text-sm">
          <Skeleton className="w-[10%] h-4" />
          <Skeleton className="w-[10%] h-4" />
          <Skeleton className="w-[10%] h-4" />
          <Skeleton className="w-[10%] h-4" />
        </div>
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <div className="flex gap-6">
          <Skeleton className="w-[15%] h-10" />
          <Skeleton className="w-[15%] h-10" />
        </div>
      </div>
      <div>
        <div className="flex gap-4 px-20">
          <Skeleton className="w-16 h-10" />
          <Skeleton className="w-16 h-10" />
          <Skeleton className="w-16 h-10" />
        </div>
        <div className="flex flex-col gap-16 max-w-[100%] overflow-scroll py-12 px-8 no-scrollbar">
          <div className="flex items-center gap-8">
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSkeleton;
