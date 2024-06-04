import HorizontalMovieTVList from "@/components/featured/HorizontalMovieTVList/HorizontalMovieTVList";
import HorizontalMovieTVListSkeleton from "@/components/skeletons/HorizontalMovieTvListSkeleton/HorizontalMovieTVListSkeleton";
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
