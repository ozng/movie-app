import HorizontalMovieTVList from "@/components/featured/HorizontalMovieTVList/HorizontalMovieTVList";
import HorizontalMovieTVListSkeleton from "@/components/skeletons/HorizontalMovieTvListSkeleton/HorizontalMovieTVListSkeleton";
import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";

const PopularMovies = () => {
  const { popular, loadingPopular } = useSelector(
    (state: RootState) => state.movie
  );

  return loadingPopular ? (
    <HorizontalMovieTVListSkeleton />
  ) : (
    <HorizontalMovieTVList title="Popular Movies" list={popular} />
  );
};

export default PopularMovies;
