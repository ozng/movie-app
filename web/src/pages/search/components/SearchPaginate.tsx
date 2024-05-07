import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";

const maxPageToShow = 3;

const SearchPaginate = () => {
  const { results } = useSelector((state: RootState) => state.search);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        {results && results.page && results?.total_pages ? (
          <PaginationItem>
            {[...Array(results?.total_pages)]
              .slice(results?.page - 1, maxPageToShow)
              .map((_item, index) => {
                const page = index + 1;
                const selectedPage = results?.page;
                return (
                  <PaginationLink isActive={selectedPage === page} href="#">
                    {page}
                  </PaginationLink>
                );
              })}
          </PaginationItem>
        ) : null}
        {results &&
        results.total_pages &&
        results.total_pages - maxPageToShow > 0 ? (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">{results?.total_pages}</PaginationLink>
            </PaginationItem>
          </>
        ) : null}

        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default SearchPaginate;
