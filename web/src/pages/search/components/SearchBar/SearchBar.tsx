import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import useSearchBar from "./hooks/useSearchBar";
import { onSubmitHandler } from "./handlers/submit";

const SearchBar = () => {
  const { setSearchParams } = useSearchBar();
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="w-full relative"
      onSubmit={(e) => onSubmitHandler(e, searchRef, setSearchParams)}
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
