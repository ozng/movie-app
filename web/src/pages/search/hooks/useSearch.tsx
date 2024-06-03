import { useEffect } from "react";

const useSearch = () => {
  useEffect(() => {
    document.title = "Search";
  }, []);
};

export default useSearch;
