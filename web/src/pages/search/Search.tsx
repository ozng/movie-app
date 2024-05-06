import Container from "@/components/Container";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import { useEffect } from "react";

const Search = () => {
  useEffect(() => {
    document.title = "Search";
  }, []);

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
