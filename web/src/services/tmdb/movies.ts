import { API_KEY, BASE_URL, MOVIE_URL } from "@/constants/tmdb";
import Movie from "@/models/Movie";
import axios from "axios";

type FetchNowPlaying = () => Promise<Movie[] | []>;

export const fetchNowPlaying: FetchNowPlaying = async () => {
  const { data } = await axios.get(`${BASE_URL}${MOVIE_URL}/now_playing`, {
    params: { api_key: API_KEY },
  });

  return data.results ? data.results : [];
};

type FetchPopular = () => Promise<Movie[] | []>;

export const fetchPopular: FetchPopular = async () => {
  const { data } = await axios.get(`${BASE_URL}${MOVIE_URL}/popular`, {
    params: { api_key: API_KEY },
  });

  return data.results ? data.results : [];
};
