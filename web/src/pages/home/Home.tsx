import { useEffect } from "react";
import Hero from "./components/Hero";
import {
  fetchNowPlayingMovies,
  fetchPopularMovies,
} from "@/services/redux/actions/movies";
import { useAppDispatch } from "@/services/redux/store";
import PopularMovies from "./components/PopularMovies";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNowPlayingMovies());
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  return (
    <div className="">
      <div className="relative flex flex-col gap-12">
        <Hero />
        <PopularMovies />
      </div>
    </div>
  );
};

export default Home;
