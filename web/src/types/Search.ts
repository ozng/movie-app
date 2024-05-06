import { Movie } from "./Movie";

export type SearchReturnType = {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[];
};
