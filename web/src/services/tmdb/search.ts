import { API_KEY, BASE_URL, SEARCH_URL } from "@/constants/tmdb";
import { SearchReturnType } from "@/types/Search";
import axios from "axios";

const url = BASE_URL + SEARCH_URL;

type SearchMoviesType = (movieName: string) => Promise<SearchReturnType>;

export const searchMovies: SearchMoviesType = async (movieName) => {
  try {
    const { data } = await axios.get(`${url}/movie`, {
      params: {
        api_key: API_KEY,
        query: movieName,
      },
    });

    console.log(data);

    return data ? data : null;
  } catch (error) {
    console.log(error);
    throw new Error("Search failed");
  }
};
