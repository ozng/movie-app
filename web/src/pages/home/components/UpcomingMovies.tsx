import HorizontalMovieTVList from "@/components/HorizontalMovieTVList";
import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";

const UpcomingMovies = () => {
  const upcomingMovies = useSelector(
    (state: RootState) => state.movie.upcoming
  );

  return (
    <div className="container">
      <HorizontalMovieTVList title="Upcoming Movies" list={upcomingMovies} />
    </div>
  );
};

export default UpcomingMovies;
