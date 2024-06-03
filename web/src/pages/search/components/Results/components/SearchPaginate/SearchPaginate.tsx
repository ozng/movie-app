import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { maxPageNumberToShow } from "@/constants/pagination";
import useSearchPaginate from "./hooks/useSearchPaginate";

const SearchPaginate = () => {
  const { pages, setSearchParams, results, page } = useSearchPaginate();

  return (
    <Pagination>
      {results && results.page && results?.total_pages ? (
        <PaginationContent>
          {page && +page > 1 ? (
            <PaginationItem>
              <PaginationPrevious
                onClick={() => {
                  setSearchParams((prev) => {
                    const payload = Number(page) - 1;
                    const movie = prev.get("movie");

                    return {
                      ...prev,
                      movie: movie,
                      page: payload,
                    };
                  });
                }}
              />
            </PaginationItem>
          ) : null}
          {page && Number(page) > maxPageNumberToShow - 1 ? (
            <>
              <PaginationItem>
                <PaginationLink
                  onClick={() =>
                    setSearchParams((prev) => {
                      const movie = prev.get("movie");
                      return {
                        ...prev,
                        movie: movie,
                        page: 1,
                      };
                    })
                  }
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            </>
          ) : null}
          <PaginationItem>
            {pages.map((_item, index) => {
              const selectedPage = results?.page;
              return (
                <PaginationLink
                  key={index}
                  isActive={selectedPage === +_item}
                  onClick={() =>
                    setSearchParams((prev) => {
                      const movie = prev.get("movie");
                      return {
                        ...prev,
                        movie: movie,
                        page: _item,
                      };
                    })
                  }
                >
                  {_item}
                </PaginationLink>
              );
            })}
          </PaginationItem>

          {page &&
          Number(page) < results.total_pages - (maxPageNumberToShow - 2) ? (
            <>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  onClick={() =>
                    setSearchParams((prev) => {
                      const movie = prev.get("movie");
                      return {
                        ...prev,
                        movie: movie,
                        page: results.total_pages,
                      };
                    })
                  }
                >
                  {results.total_pages}
                </PaginationLink>
              </PaginationItem>
            </>
          ) : null}

          {page && +page !== results.total_pages ? (
            <PaginationItem>
              <PaginationNext
                onClick={() => {
                  setSearchParams((prev) => {
                    const payload = Number(page) + 1;
                    const movie = prev.get("movie");

                    return {
                      ...prev,
                      movie: movie,
                      page: payload,
                    };
                  });
                }}
              />
            </PaginationItem>
          ) : null}
        </PaginationContent>
      ) : null}
    </Pagination>
  );
};

export default SearchPaginate;
