import { fetchSimilarMovies } from "@/services/redux/actions/movies";
import { RootState, useAppDispatch } from "@/services/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useSimilar = () => {
  const { movieDetail, similarMovies } = useSelector(
    (state: RootState) => state.movie
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (movieDetail?.id) {
      dispatch(fetchSimilarMovies(movieDetail.id));
    }
  }, [movieDetail, dispatch]);
  return {
    similarMovies,
  };
};

export default useSimilar;
