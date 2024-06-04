import Container from "@/components/featured/Container/Container";
import Hero from "./components/Hero/Hero";
import useHomeScreen from "./hooks/useHomeScreen";
import PopularMovies from "./components/PopularMovies/PopularMovies";
import TopRatedMovies from "./components/TopRatedMovies/TopRatedMovies";
import UpcomingMovies from "./components/UpcomingMovies/UpcomingMovies";

const Home = () => {
  useHomeScreen();

  return (
    <div className="relative flex flex-col gap-12">
      <Hero />
      <Container className="flex flex-col gap-12">
        <PopularMovies />
        <TopRatedMovies />
        <UpcomingMovies />
      </Container>
    </div>
  );
};

export default Home;
