import { fetchSearchResults } from "@/services/redux/actions/search";
import { useAppDispatch } from "@/services/redux/store";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  return (
    <form
      className="w-full relative"
      onSubmit={(e) => {
        e.preventDefault();
        if (searchRef?.current?.value) {
          dispatch(fetchSearchResults(searchRef.current.value));
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
