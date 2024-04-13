import { useEffect } from "react";
import Hero from "./components/Hero";
import {
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from "@/services/redux/actions/movies";
import { useAppDispatch } from "@/services/redux/store";
import PopularMovies from "./components/PopularMovies";
import TopRatedMovies from "./components/TopRatedMovies";
import UpcomingMovies from "./components/UpcomingMovies";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNowPlayingMovies());
    dispatch(fetchPopularMovies());
    dispatch(fetchTopRatedMovies());
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  return (
    <div className="relative flex flex-col gap-12">
      <Hero />
      <PopularMovies />
      <TopRatedMovies />
      <UpcomingMovies />
    </div>
  );
};

export default Home;
