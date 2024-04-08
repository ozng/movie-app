import { setNowPlaying } from "@/services/redux/slices/movieSlice";
import { RootState } from "@/services/redux/store";
import { fetchNowPlaying } from "@/services/tmdb/movies";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const nowPlayingMoviesState = useSelector(
    (state: RootState) => state.movie.nowPlaying
  );

  console.log(nowPlayingMoviesState);

  useEffect(() => {
    const fetchMoviesHandler = async () => {
      const nowPlayingMoviesTMDB = await fetchNowPlaying();
      dispatch(setNowPlaying(nowPlayingMoviesTMDB));
    };

    fetchMoviesHandler();
  }, [dispatch]);

  return (
    <div>
      {nowPlayingMoviesState?.map((item) => (
        <div>
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Home;
