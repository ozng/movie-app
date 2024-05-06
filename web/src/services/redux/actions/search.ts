import { searchMovies } from "@/services/tmdb/search";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSearchResults = createAsyncThunk(
  "search/fetchSearchResults",
  async (movieName: string) => {
    const response = await searchMovies(movieName);
    return response;
  }
);
