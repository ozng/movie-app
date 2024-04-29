import { API_KEY, BASE_URL, MOVIE_URL } from "@/constants/tmdb";
import { type ImageReturnType } from "@/types/Media";
import axios from "axios";

type FetchMoviesImages = (id: string) => Promise<ImageReturnType | null>;

export const fetchMoviesImages: FetchMoviesImages = async (id) => {
  const { data } = await axios.get(`${BASE_URL}${MOVIE_URL}/${id}/images`, {
    params: { api_key: API_KEY },
  });

  return data ? data : null;
};
