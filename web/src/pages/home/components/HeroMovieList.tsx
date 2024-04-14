import { RootState } from "@/services/redux/store";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { imageBase } from "./Hero";
import { scrollHandler } from "@/utils/scroll";
import { FaAngleLeft, FaAngleRight, FaPlay, FaPause } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

type HeroMovieListProps = {
  selectedImageIndex: number;
  setSelectedImageIndex: React.Dispatch<React.SetStateAction<number>>;
  isAutoPlaying: boolean;
  setIsAutoPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeroMovieList = ({
  selectedImageIndex,
  setSelectedImageIndex,
  isAutoPlaying,
  setIsAutoPlaying,
}: HeroMovieListProps) => {
  const posterRef = useRef<HTMLDivElement>(null);
  const nowPlayingMoviesState = useSelector(
    (state: RootState) => state.movie.nowPlaying
  );

  return (
    <div>
      <div className="flex gap-4 px-20">
        <Button
          variant={"outlinedGhost"}
          onClick={() => scrollHandler("left", posterRef)}
        >
          <FaAngleLeft
            className="text-white group-hover:text-black"
            size={21}
          />
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
          <FaAngleRight
            className="text-white group-hover:text-black"
            size={21}
          />
        </Button>
      </div>
      <div
        className="flex flex-col gap-16 max-w-[100%] overflow-scroll py-12 px-8 no-scrollbar"
        ref={posterRef}
      >
        <div className="flex items-center justify-center gap-8 w-max">
          {nowPlayingMoviesState.map((item, index) => (
            <div
              className="flex items-end hover:cursor-pointer group"
              onClick={() => setSelectedImageIndex(index)}
              key={item.id}
            >
              <img
                src={imageBase + item.poster_path}
                alt="poster"
                className={
                  index === selectedImageIndex
                    ? "w-36 scale-125 rounded-lg duration-200"
                    : "w-36 grayscale hover:grayscale-[50%] rounded-lg duration-200"
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroMovieList;
