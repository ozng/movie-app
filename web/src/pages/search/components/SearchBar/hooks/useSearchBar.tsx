import { fetchSearchResults } from "@/services/redux/actions/search";
import { resetSearchResults } from "@/services/redux/slices/searchSlice";
import { useAppDispatch } from "@/services/redux/store";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const useSearchBar = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const movie = searchParams.get("movie");
    const page = searchParams.get("page");
    if (movie && page) {
      dispatch(fetchSearchResults({ movieName: movie, page: +page }));
    }

    return () => {
      dispatch(resetSearchResults());
    };
  }, [searchParams, dispatch]);

  return {
    setSearchParams,
  };
};

export default useSearchBar;
