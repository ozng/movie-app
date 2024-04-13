import Movie from "@/models/Movie";
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from "../actions/movies";

export interface MovieState {
  nowPlaying: Movie[] | [];
  loadingNowPlaying: boolean;
  popular: Movie[] | [];
  loadingPopular: boolean;
  topRated: Movie[] | [];
  loadingTopRated: boolean;
  upcoming: Movie[] | [];
  loadingUpcoming: boolean;
}

const initialState: MovieState = {
  nowPlaying: [],
  loadingNowPlaying: false,
  popular: [],
  loadingPopular: false,
  topRated: [],
  loadingTopRated: false,
  upcoming: [],
  loadingUpcoming: false,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNowPlayingMovies.pending, (state) => {
      state.loadingNowPlaying = true;
    });
    builder.addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
      state.nowPlaying = action.payload;
      state.loadingNowPlaying = false;
    });
    builder.addCase(fetchNowPlayingMovies.rejected, (state) => {
      state.loadingNowPlaying = false;
      state.nowPlaying = [];
    });
    builder.addCase(fetchPopularMovies.pending, (state) => {
      state.loadingPopular = true;
    });
    builder.addCase(fetchPopularMovies.fulfilled, (state, action) => {
      state.popular = action.payload;
      state.loadingPopular = false;
    });
    builder.addCase(fetchPopularMovies.rejected, (state) => {
      state.loadingPopular = false;
      state.popular = [];
    });
    builder.addCase(fetchTopRatedMovies.pending, (state) => {
      state.loadingTopRated = true;
    });
    builder.addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
      state.topRated = action.payload;
      state.loadingTopRated = false;
    });
    builder.addCase(fetchTopRatedMovies.rejected, (state) => {
      state.loadingTopRated = false;
      state.topRated = [];
    });
    builder.addCase(fetchUpcomingMovies.pending, (state) => {
      state.loadingUpcoming = true;
    });
    builder.addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
      state.upcoming = action.payload;
      state.loadingUpcoming = false;
    });
    builder.addCase(fetchUpcomingMovies.rejected, (state) => {
      state.loadingUpcoming = false;
      state.upcoming = [];
    });
  },
});

export default movieSlice.reducer;
