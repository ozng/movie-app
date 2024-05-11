import { maxPageNumberToShow } from "@/constants/pagination";
import { createArrayForPagination } from "./createArray";

export const paginationHandler = (currentPage: number, maxPage: number) => {
  const originalArray = createArrayForPagination(maxPage);

  if (maxPage < maxPageNumberToShow) {
    return originalArray;
  } else {
    if (currentPage === 1) {
      return originalArray.slice(0, maxPageNumberToShow);
    } else if (currentPage === maxPage) {
      return originalArray.slice(maxPage - maxPageNumberToShow, maxPage);
    } else {
      return originalArray.slice(currentPage - 2, currentPage + 1);
    }
  }
};
