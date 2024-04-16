import { fetchCastAndCrews } from "@/services/tmdb/people";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCastAndCrewsFromSelectedMovie = createAsyncThunk(
  "movie/fetchCastAndCrewsFromSelectedMovie",
  async (movieID: string) => {
    const response = await fetchCastAndCrews(movieID);
    return response;
  }
);
