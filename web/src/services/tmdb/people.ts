import { API_KEY, BASE_URL, MOVIE_URL } from "@/constants/tmdb";
import { Cast, Crew } from "@/models/People";
import axios from "axios";

export type CastAndCrewReturnType = {
  id: number;
  cast: Cast[];
  crew: Crew[];
};

type FetchCastAndCrew = (movieID: string) => Promise<CastAndCrewReturnType>;

export const fetchCastAndCrews: FetchCastAndCrew = async (movieID) => {
  const { data } = await axios.get(
    `${BASE_URL}${MOVIE_URL}/${movieID}/credits`,
    {
      params: { api_key: API_KEY },
    }
  );

  return data ? data : [];
};
