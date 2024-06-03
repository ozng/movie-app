import { fetchMovieDetail } from "@/services/redux/actions/movies";
import { fetchCastAndCrewsFromSelectedMovie } from "@/services/redux/actions/people";
import { resetMedia } from "@/services/redux/slices/mediaSlice";
import { resetMovieDetail } from "@/services/redux/slices/movieSlice";
import { resetCredit } from "@/services/redux/slices/peopleSlice";
import { RootState, useAppDispatch } from "@/services/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const useMovieDetail = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const { movieDetail } = useSelector((state: RootState) => state.movie);

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieDetail(id));
      dispatch(fetchCastAndCrewsFromSelectedMovie(id));
    }

    window.scrollTo({ top: 0, behavior: "smooth" });

    return () => {
      dispatch(resetMovieDetail());
      dispatch(resetCredit());
      dispatch(resetMedia());
    };
  }, [id, dispatch]);

  useEffect(() => {
    if (movieDetail && movieDetail.title) {
      document.title = movieDetail.title;
    }

    return () => {
      document.title = "RMTV";
    };
  }, [movieDetail]);
};

export default useMovieDetail;
