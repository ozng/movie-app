import { IMAGE_URL } from "@/constants/tmdb";
import { RootState } from "@/services/redux/store";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { Button } from "@/components/ui/button";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Hero = () => {
  const nowPlayingMoviesState = useSelector(
    (state: RootState) => state.movie.nowPlaying
  );

  const posterRef = useRef<HTMLDivElement>(null);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const resolution = "/original";

  const imageBase = IMAGE_URL + resolution;

  const imageURL =
    imageBase + nowPlayingMoviesState[selectedImageIndex]?.backdrop_path;

  const selectedMovie = nowPlayingMoviesState[selectedImageIndex];

  type NextImage = (direction: "forward" | "back") => void;

  useEffect(() => {
    const autoplay = setInterval(nextImage.bind(null, "forward"), 4000);

    return () => clearInterval(autoplay);
  });

  const nextImage: NextImage = (direction) => {
    const gap = direction === "forward" ? 1 : -1;
    const maxSize = nowPlayingMoviesState.length - 1;

    setSelectedImageIndex((prevState) => {
      if (direction === "forward" && maxSize === prevState) return 0;
      if (direction === "back" && 0 === prevState) return maxSize;
      return prevState + gap;
    });
  };

  type ScrollHandler = (direction: "left" | "right") => void;

  const scrollHandler: ScrollHandler = (direction) => {
    if (direction === "right") {
      posterRef.current?.scrollBy({ left: 144 * 3, behavior: "smooth" });
    } else {
      posterRef.current?.scrollBy({ left: -144 * 3, behavior: "smooth" });
    }
  };

  return (
    <div className="">
      <div
        className={`min-h-screen w-full text-light-background flex flex-col justify-between`}
        style={{
          backgroundImage: `linear-gradient(275deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%, rgba(0,0,0,1) 100%),url('${imageURL}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pt-32 px-24 w-[45%] flex flex-col gap-4">
          <h2 className="text-6xl font-semibold">{selectedMovie?.title}</h2>
          <div className="flex gap-2 text-faded-1 text-sm">
            <span className="text-accent font-semibold">TMDB</span>
            <span>{selectedMovie?.vote_average.toFixed(1)}</span>
            <span className="text-faded-2">({selectedMovie?.vote_count})</span>
            <span>|</span>
            <span>{moment(selectedMovie?.release_date).format("YYYY")}</span>
            <span>|</span>
            <span>{selectedMovie?.original_language.toUpperCase()}</span>
          </div>
          <p className="line-clamp-2">{selectedMovie?.overview}</p>
          <div className="flex gap-6">
            <Button>Watch Trailer</Button>
            <Button variant={"secondary"}>Detail</Button>
          </div>
        </div>
        <div>
          <div className="flex gap-4 px-20">
            <div className="border border-faded-2 rounded-md group">
              <Button variant={"ghost"} onClick={() => scrollHandler("left")}>
                <FaAngleLeft
                  className="text-white group-hover:text-black"
                  size={21}
                />
              </Button>
            </div>
            <div className="border border-faded-2 rounded-md group">
              <Button variant={"ghost"} onClick={() => scrollHandler("right")}>
                <FaAngleRight
                  className="text-white group-hover:text-black"
                  size={21}
                />
              </Button>
            </div>
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
      </div>
    </div>
  );
};

export default Hero;
