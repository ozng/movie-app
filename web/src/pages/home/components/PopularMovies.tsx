import HorizontalMovieTVList from "@/components/HorizontalMovieTVList";
import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";

const PopularMovies = () => {
  const popularMovies = useSelector((state: RootState) => state.movie.popular);

  return <HorizontalMovieTVList title="Popular Movies" list={popularMovies} />;
};

export default PopularMovies;
