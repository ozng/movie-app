import {
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from "@/services/redux/actions/movies";
import { useAppDispatch } from "@/services/redux/store";
import { useEffect } from "react";

const useHomeScreen = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNowPlayingMovies());
    dispatch(fetchPopularMovies());
    dispatch(fetchTopRatedMovies());
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);
};

export default useHomeScreen;
