import { RootState } from "@/services/redux/store";
import { paginationHandler } from "@/utils/pagination";
import { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const useSearchPaginate = () => {
  const { results } = useSelector((state: RootState) => state.search);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pages, setPages] = useState([""]);

  useLayoutEffect(() => {
    const movieName = searchParams.get("movie");
    if (movieName) {
      document.title = `Search | ${movieName}`;
    }

    return () => {
      document.title = "RMTV";
    };
  }, [searchParams]);

  const page = searchParams.get("page");

  useEffect(() => {
    const arr = paginationHandler(Number(page), results!.total_pages);
    setPages(arr);
  }, [page, results]);

  return {
    setSearchParams,
    pages,
    results,
    page,
  };
};

export default useSearchPaginate;
