import { fetchNowPlaying } from "@/services/tmdb/movies";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNowPlayingMovies = createAsyncThunk(
  "movie/fetchNowPlayingMovies",
  async () => {
    const response = await fetchNowPlaying();
    return response;
  }
);
