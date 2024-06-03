import { posterSizes } from "@/constants/imageSizes";
import { RootState } from "@/services/redux/store";
import { autoPlay } from "@/utils/autoPlayImages";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useHero = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { nowPlaying, loadingNowPlaying } = useSelector(
    (state: RootState) => state.movie
  );

  const imageURL =
    posterSizes.original + nowPlaying[selectedImageIndex]?.backdrop_path;

  const selectedMovie = nowPlaying[selectedImageIndex];

  useEffect(() => {
    const startAutoPlay = setInterval(() => {
      setSelectedImageIndex((prevState) =>
        autoPlay("forward", nowPlaying.length - 1, prevState)
      );
    }, 8000);

    if (!isAutoPlaying) {
      clearInterval(startAutoPlay);
    }

    return () => clearInterval(startAutoPlay);
  }, [isAutoPlaying, nowPlaying.length]);
  return {
    selectedImageIndex,
    setIsAutoPlaying,
    loadingNowPlaying,
    nowPlaying,
    imageURL,
    selectedMovie,
    setSelectedImageIndex,
    isAutoPlaying,
  };
};

export default useHero;
