import { API_KEY, BASE_URL, SEARCH_URL } from "@/constants/tmdb";
import { SearchReturnType } from "@/types/Search";
import axios from "axios";

const url = BASE_URL + SEARCH_URL;

type SearchMoviesType = (
  movieName: string,
  page: number
) => Promise<SearchReturnType>;

export const searchMovies: SearchMoviesType = async (movieName, page) => {
  try {
    const { data } = await axios.get(`${url}/movie`, {
      params: {
        api_key: API_KEY,
        query: movieName,
        page: page,
      },
    });

    return data ? data : null;
  } catch (error) {
    console.log(error);
    throw new Error("Search failed");
  }
};
