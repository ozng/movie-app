import { Skeleton } from "@/components/ui/skeleton";

const HorizontalMovieTVListSkeleton = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-4">
        <Skeleton variant={"title"} />
        <div className="flex gap-4 ">
          <div className="rounded-md group">
            <Skeleton variant={"icon"} />
          </div>
          <div className="rounded-md group">
            <Skeleton variant={"icon"} />
          </div>
        </div>
      </div>
      <div className="overflow-scroll no-scrollbar">
        <div className="flex gap-6 w-max py-6 px-4">
          <Skeleton variant={"card"} />
          <Skeleton variant={"card"} />
          <Skeleton variant={"card"} />
          <Skeleton variant={"card"} />
          <Skeleton variant={"card"} />
          <Skeleton variant={"card"} />
        </div>
      </div>
    </div>
  );
};

export default HorizontalMovieTVListSkeleton;
