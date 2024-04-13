import { useEffect } from "react";
import Hero from "./components/Hero";
import { fetchNowPlayingMovies } from "@/services/redux/actions/movies";
import { useAppDispatch } from "@/services/redux/store";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNowPlayingMovies());
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
