import { Skeleton } from "@/components/ui/skeleton";

const HeroSkeleton = () => {
  return (
    <div className="min-h-screen w-full text-light-background flex flex-col justify-between">
      <div className="pt-32 px-24 w-[45%] flex flex-col gap-4">
        <Skeleton variant={"title"} />
        <div className="flex gap-2 text-faded-1 text-sm">
          <Skeleton variant={"smText"} />
          <Skeleton variant={"smText"} />
          <Skeleton variant={"smText"} />
          <Skeleton variant={"smText"} />
        </div>
        <Skeleton variant={"paragraph"} />
        <Skeleton variant={"paragraph"} />
        <div className="flex gap-6">
          <Skeleton variant={"button"} />
          <Skeleton variant={"button"} />
        </div>
      </div>
      <div>
        <div className="flex gap-4 px-20">
          <Skeleton variant={"icon"} />
          <Skeleton variant={"icon"} />
          <Skeleton variant={"icon"} />
        </div>
        <div className="flex flex-col gap-16 max-w-[100%] overflow-scroll py-12 px-8 no-scrollbar">
          <div className="flex items-center gap-8">
            <Skeleton variant={"card"} />
            <Skeleton variant={"card"} />
            <Skeleton variant={"card"} />
            <Skeleton variant={"card"} />
            <Skeleton variant={"card"} />
            <Skeleton variant={"card"} />
            <Skeleton variant={"card"} />
            <Skeleton variant={"card"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSkeleton;
