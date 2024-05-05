import {
  fetchCastAndCrews,
  fetchMovieCredits,
  fetchPeopleDetail,
  fetchPeopleImages,
} from "@/services/tmdb/people";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCastAndCrewsFromSelectedMovie = createAsyncThunk(
  "people/fetchCastAndCrewsFromSelectedMovie",
  async (movieID: string) => {
    const response = await fetchCastAndCrews(movieID);
    return response;
  }
);

export const fetchPeopleDetails = createAsyncThunk(
  "people/fetchPeopleDetails",
  async (personId: string | number) => {
    const response = await fetchPeopleDetail(personId);
    return response;
  }
);

export const fetchPeopleMovieCredits = createAsyncThunk(
  "people/fetchPeopleMovieCredits",
  async (personId: string | number) => {
    const response = await fetchMovieCredits(personId);
    return response;
  }
);

export const fetchImages = createAsyncThunk(
  "people/fetchImages",
  async (personId: string | number) => {
    const response = await fetchPeopleImages(personId);
    return response;
  }
);
