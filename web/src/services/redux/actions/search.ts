import { searchMovies } from "@/services/tmdb/search";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSearchResults = createAsyncThunk(
  "search/fetchSearchResults",
  async ({ movieName, page }: { movieName: string; page: number }) => {
    const response = await searchMovies(movieName, page);
    return response;
  }
);
