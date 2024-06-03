import Container from "@/components/Container";
import SearchBar from "./components/SearchBar/SearchBar";
import Results from "./components/Results/Results";
import useSearch from "./hooks/useSearch";

const Search = () => {
  useSearch();

  return (
    <div className="min-h-screen py-24">
      <Container className="space-y-8">
        <SearchBar />
        <Results />
      </Container>
    </div>
  );
};

export default Search;
