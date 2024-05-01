import { API_KEY, BASE_URL, MOVIE_URL } from "@/constants/tmdb";
import { VideoReturnType, type ImageReturnType } from "@/types/Media";
import axios from "axios";

type FetchMoviesImages = (id: string) => Promise<ImageReturnType | null>;

export const fetchMoviesImages: FetchMoviesImages = async (id) => {
  const { data } = await axios.get(`${BASE_URL}${MOVIE_URL}/${id}/images`, {
    params: { api_key: API_KEY },
  });

  return data ? data : null;
};

type FetchMoviesVideos = (id: string) => Promise<VideoReturnType | null>;

export const fetchMoviesVideos: FetchMoviesVideos = async (id) => {
  const { data } = await axios.get(`${BASE_URL}${MOVIE_URL}/${id}/videos`, {
    params: { api_key: API_KEY },
  });

  return data ? data : null;
};
