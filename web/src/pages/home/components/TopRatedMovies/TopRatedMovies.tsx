import HorizontalMovieTVList from "@/components/featured/HorizontalMovieTVList/HorizontalMovieTVList";
import HorizontalMovieTVListSkeleton from "@/components/skeletons/HorizontalMovieTvListSkeleton/HorizontalMovieTVListSkeleton";
import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";

const TopRatedMovies = () => {
  const { topRated, loadingTopRated } = useSelector(
    (state: RootState) => state.movie
  );

  return loadingTopRated ? (
    <HorizontalMovieTVListSkeleton />
  ) : (
    <HorizontalMovieTVList title="Top Rated Movies" list={topRated} />
  );
};

export default TopRatedMovies;
