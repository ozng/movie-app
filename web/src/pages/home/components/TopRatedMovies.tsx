import HorizontalMovieTVList from "@/components/HorizontalMovieTVList";
import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";

const TopRatedMovies = () => {
  const topRatedMovies = useSelector(
    (state: RootState) => state.movie.topRated
  );

  return (
    <div className="container">
      <HorizontalMovieTVList title="Top Rated Movies" list={topRatedMovies} />
    </div>
  );
};

export default TopRatedMovies;