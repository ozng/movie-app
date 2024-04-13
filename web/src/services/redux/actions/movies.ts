import { fetchNowPlaying, fetchPopular } from "@/services/tmdb/movies";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNowPlayingMovies = createAsyncThunk(
  "movie/fetchNowPlayingMovies",
  async () => {
    const response = await fetchNowPlaying();
    return response;
  }
);

export const fetchPopularMovies = createAsyncThunk(
  "movie/fetchPopularMovies",
  async () => {
    const response = await fetchPopular();
    return response;
  }
);
