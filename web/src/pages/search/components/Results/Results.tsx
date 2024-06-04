import { Type } from "@/components/ui/typography/type";
import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";
import SearchPaginate from "./components/SearchPaginate/SearchPaginate";
import VerticalMovieTVList from "@/components/featured/VerticalMovieTVList/VerticalMovieTVList";

const Results = () => {
  const { results, loading } = useSelector((state: RootState) => state.search);

  return (
    <div className="h-full">
      {loading ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Type className="animate-pulse" variant={"accent"}>
            Loading
          </Type>
        </div>
      ) : (
        <div>
          {results && results.results && results.results.length > 0 ? (
            <div className="space-y-12">
              <VerticalMovieTVList movie={results.results} />
              <SearchPaginate />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Results;
