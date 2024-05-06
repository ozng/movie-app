import VerticalMovieTVList from "@/components/VerticalMovieTVList";
import { Type } from "@/components/ui/typography/type";
import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";

const Results = () => {
  const { results, loading } = useSelector((state: RootState) => state.search);

  return (
    <div>
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <Type className="animate-pulse">Loading</Type>
        </div>
      ) : (
        <div>
          {results && results.results && results.results.length > 0 ? (
            <VerticalMovieTVList movie={results.results} />
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Results;
