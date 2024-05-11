import { fetchSearchResults } from "@/services/redux/actions/search";
import { resetSearchResults } from "@/services/redux/slices/searchSlice";
import { useAppDispatch } from "@/services/redux/store";
import { useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const searchRef = useRef<HTMLInputElement>(null);
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

  return (
    <form
      className="w-full relative"
      onSubmit={(e) => {
        e.preventDefault();
        if (searchRef?.current?.value) {
          setSearchParams((prev) => ({
            ...prev,
            movie: searchRef.current?.value,
            page: 1,
          }));
        }
      }}
    >
      <input
        ref={searchRef}
        type="text"
        placeholder="Search"
        className="border border-faded-1 rounded-2xl focus:outline-none w-full pl-4 pr-10 py-3 text-faded-2 text-sm"
      />
      <div className="cursor-pointer">
        <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-faded-3" />
      </div>
    </form>
  );
};

export default SearchBar;
