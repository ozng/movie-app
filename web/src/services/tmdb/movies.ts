import { API_KEY, BASE_URL, MOVIE_URL } from "@/constants/tmdb";
import { Movie, MovieDetail } from "@/models/Movie";
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

type FetchTopRated = () => Promise<Movie[] | []>;

export const fetchTopRated: FetchTopRated = async () => {
  const { data } = await axios.get(`${BASE_URL}${MOVIE_URL}/top_rated`, {
    params: { api_key: API_KEY },
  });

  return data.results ? data.results : [];
};

type FetchUpcoming = () => Promise<Movie[] | []>;

export const fetchUpcoming: FetchUpcoming = async () => {
  const { data } = await axios.get(`${BASE_URL}${MOVIE_URL}/upcoming`, {
    params: { api_key: API_KEY },
  });

  return data.results ? data.results : [];
};

type FetchDetail = (id: string) => Promise<MovieDetail>;

export const fetchDetail: FetchDetail = async (id) => {
  const { data } = await axios.get(`${BASE_URL}${MOVIE_URL}/${id}`, {
    params: { api_key: API_KEY },
  });

  return data;
};
