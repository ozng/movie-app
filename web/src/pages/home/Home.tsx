import { setNowPlaying } from "@/services/redux/slices/movieSlice";
import { fetchNowPlaying } from "@/services/tmdb/movies";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "./components/Hero";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMoviesHandler = async () => {
      const nowPlayingMoviesTMDB = await fetchNowPlaying();
      dispatch(setNowPlaying(nowPlayingMoviesTMDB));
    };

    fetchMoviesHandler();
  }, [dispatch]);

  return (
    <div className="">
      <div className="relative">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
