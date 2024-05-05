import { API_KEY, BASE_URL, MOVIE_URL, PERSON_URL } from "@/constants/tmdb";
import { PeopleImagesReturnType } from "@/types/Media";
import { Cast, Crew, MovieCreditsReturn, People } from "@/types/People";
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

type FetchPeopleDetail = (personID: string | number) => Promise<People>;

export const fetchPeopleDetail: FetchPeopleDetail = async (personID) => {
  const { data } = await axios.get(`${BASE_URL}${PERSON_URL}/${personID}`, {
    params: { api_key: API_KEY },
  });
  return data ? data : null;
};

type FetchMovieCredits = (
  personID: string | number
) => Promise<MovieCreditsReturn>;

export const fetchMovieCredits: FetchMovieCredits = async (personID) => {
  const { data } = await axios.get(
    `${BASE_URL}${PERSON_URL}/${personID}/movie_credits`,
    {
      params: { api_key: API_KEY },
    }
  );
  return data ? data : null;
};

type FetchPeopleImages = (
  personID: string | number
) => Promise<PeopleImagesReturnType>;

export const fetchPeopleImages: FetchPeopleImages = async (personID) => {
  const { data } = await axios.get(
    `${BASE_URL}${PERSON_URL}/${personID}/images`,
    {
      params: { api_key: API_KEY },
    }
  );
  return data ? data : null;
};
