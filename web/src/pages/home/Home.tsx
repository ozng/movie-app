import { setNowPlaying } from "@/services/redux/slices/movieSlice";
import { fetchNowPlaying } from "@/services/tmdb/movies";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import NowPlayingCarousel from "./components/NowPlayingCarousel";

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
    <div className="flex flex-col gap-4 mt-4">
      <div className="w-[60%] mx-auto">
        <NowPlayingCarousel />
      </div>
    </div>
  );
};

export default Home;
