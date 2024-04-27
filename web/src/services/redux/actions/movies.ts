import {
  fetchDetail,
  fetchNowPlaying,
  fetchPopular,
  fetchSimilar,
  fetchTopRated,
  fetchUpcoming,
} from "@/services/tmdb/movies";
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

export const fetchTopRatedMovies = createAsyncThunk(
  "movie/fetchTopRatedMovies",
  async () => {
    const response = await fetchTopRated();
    return response;
  }
);

export const fetchUpcomingMovies = createAsyncThunk(
  "movie/fetchUpcomingMovies",
  async () => {
    const response = await fetchUpcoming();
    return response;
  }
);

export const fetchMovieDetail = createAsyncThunk(
  "movie/fetchMovieDetail",
  async (id: string) => {
    const response = await fetchDetail(id);
    return response;
  }
);

export const fetchSimilarMovies = createAsyncThunk(
  "movie/fetchSimilarMovies",
  async (id: string) => {
    const response = await fetchSimilar(id);
    return response;
  }
);
