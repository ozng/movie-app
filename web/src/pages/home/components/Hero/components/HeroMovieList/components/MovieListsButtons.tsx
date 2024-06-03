import { Button } from "@/components/ui/button";
import { scrollHandler } from "@/utils/scroll";
import { FaAngleLeft, FaAngleRight, FaPlay, FaPause } from "react-icons/fa6";
import { HeroMovieListProps, PosterRefType } from "../HeroMovieList";

interface MovieListsButtonsProps
  extends PosterRefType,
    Omit<HeroMovieListProps, "selectedImageIndex" | "setSelectedImageIndex"> {}

const MovieListsButtons = ({
  isAutoPlaying,
  setIsAutoPlaying,
  posterRef,
}: MovieListsButtonsProps) => {
  return (
    <div className="flex gap-4 px-20">
      <Button
        variant={"outlinedGhost"}
        onClick={() => scrollHandler("left", posterRef)}
      >
        <FaAngleLeft className="text-white group-hover:text-black" size={21} />
      </Button>
      {isAutoPlaying ? (
        <Button
          variant={"outlinedGhost"}
          onClick={() => setIsAutoPlaying(false)}
        >
          <FaPause className="text-white group-hover:text-black" size={21} />
        </Button>
      ) : (
        <Button
          variant={"outlinedGhost"}
          onClick={() => setIsAutoPlaying(true)}
        >
          <FaPlay className="text-white group-hover:text-black" size={21} />
        </Button>
      )}

      <Button
        variant={"outlinedGhost"}
        onClick={() => scrollHandler("right", posterRef)}
      >
        <FaAngleRight className="text-white group-hover:text-black" size={21} />
      </Button>
    </div>
  );
};

export default MovieListsButtons;
