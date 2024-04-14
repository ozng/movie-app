import { IMAGE_URL } from "@/constants/tmdb";
import { RootState } from "@/services/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HeroInfo from "./HeroInfo";
import HeroMovieList from "./HeroMovieList";
import { autoPlay } from "@/utils/autoPlayImages";

export const resolution = "/original";

export const imageBase = IMAGE_URL + resolution;

const Hero = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const nowPlayingMoviesState = useSelector(
    (state: RootState) => state.movie.nowPlaying
  );

  const imageURL =
    imageBase + nowPlayingMoviesState[selectedImageIndex]?.backdrop_path;

  const selectedMovie = nowPlayingMoviesState[selectedImageIndex];

  useEffect(() => {
    const autoplay = setInterval(() => {
      setSelectedImageIndex((prevState) =>
        autoPlay("forward", nowPlayingMoviesState.length - 1, prevState)
      );
    }, 4000);

    return () => clearInterval(autoplay);
  });

  return (
    <div
      className={`min-h-screen w-full text-light-background flex flex-col justify-between`}
      style={{
        backgroundImage: `linear-gradient(275deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%, rgba(0,0,0,1) 100%),url('${imageURL}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <HeroInfo selectedMovie={selectedMovie} />
      <HeroMovieList
        selectedImageIndex={selectedImageIndex}
        setSelectedImageIndex={setSelectedImageIndex}
      />
    </div>
  );
};

export default Hero;
