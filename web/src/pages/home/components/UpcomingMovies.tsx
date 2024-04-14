import HorizontalMovieTVList from "@/components/HorizontalMovieTVList";
import HorizontalMovieTVListSkeleton from "@/components/skeletons/HorizontalMovieTVListSkeleton";
import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";

const UpcomingMovies = () => {
  const { upcoming, loadingUpcoming } = useSelector(
    (state: RootState) => state.movie
  );

  return loadingUpcoming ? (
    <HorizontalMovieTVListSkeleton />
  ) : (
    <HorizontalMovieTVList title="Upcoming Movies" list={upcoming} />
  );
};

export default UpcomingMovies;
