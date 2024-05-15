import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";
import { imageBase } from "../../Hero";
import { HeroMovieListProps, PosterRefType } from "../HeroMovieList";

export interface MovieListProps
  extends PosterRefType,
    Omit<HeroMovieListProps, "isAutoPlaying" | "setIsAutoPlaying"> {}

const MovieList = ({
  posterRef,
  setSelectedImageIndex,
  selectedImageIndex,
}: MovieListProps) => {
  const nowPlayingMoviesState = useSelector(
    (state: RootState) => state.movie.nowPlaying
  );

  return (
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
  );
};

export default MovieList;
