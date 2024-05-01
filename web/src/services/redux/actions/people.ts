import { fetchCastAndCrews, fetchPeopleDetail } from "@/services/tmdb/people";
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
