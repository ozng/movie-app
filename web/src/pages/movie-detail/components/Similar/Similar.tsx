import HorizontalMovieTVList from "@/components/HorizontalMovieTVList";
import useSimilar from "./hooks/useSimilar";

const Similar = () => {
  const { similarMovies } = useSimilar();

  return similarMovies && similarMovies.length > 0 ? (
    <HorizontalMovieTVList
      title="You might like these too"
      list={similarMovies}
    />
  ) : null;
};

export default Similar;
