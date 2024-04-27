import HorizontalMovieTVList from "@/components/HorizontalMovieTVList";
import { fetchSimilarMovies } from "@/services/redux/actions/movies";
import { RootState, useAppDispatch } from "@/services/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Similar = () => {
  const { movieDetail, similarMovies } = useSelector(
    (state: RootState) => state.movie
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (movieDetail?.id) {
      dispatch(fetchSimilarMovies(movieDetail.id));
    }
  }, [movieDetail, dispatch]);

  return (
    <HorizontalMovieTVList
      title="You might like these too"
      list={similarMovies}
    />
  );
};

export default Similar;
