import HorizontalMovieTVList from "@/components/HorizontalMovieTVList";
import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";

const PopularMovies = () => {
  const popularMovies = useSelector((state: RootState) => state.movie.popular);

  return (
    <div className="container">
      <HorizontalMovieTVList title="Popular Movies" list={popularMovies} />
    </div>
  );
};

export default PopularMovies;
