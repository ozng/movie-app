import { useRef } from "react";
import MovieListsButtons from "./components/MovieListsButtons";
import MovieList from "./components/MovieList";

export interface HeroMovieListProps {
  selectedImageIndex: number;
  setSelectedImageIndex: React.Dispatch<React.SetStateAction<number>>;
  isAutoPlaying: boolean;
  setIsAutoPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PosterRefType {
  posterRef: React.RefObject<HTMLDivElement>;
}

const HeroMovieList = ({
  selectedImageIndex,
  setSelectedImageIndex,
  isAutoPlaying,
  setIsAutoPlaying,
}: HeroMovieListProps) => {
  const posterRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <MovieListsButtons
        isAutoPlaying={isAutoPlaying}
        posterRef={posterRef}
        setIsAutoPlaying={setIsAutoPlaying}
      />
      <MovieList
        posterRef={posterRef}
        selectedImageIndex={selectedImageIndex}
        setSelectedImageIndex={setSelectedImageIndex}
      />
    </div>
  );
};

export default HeroMovieList;
