import Movie from "@/models/Movie";
import { createSlice } from "@reduxjs/toolkit";
import { fetchNowPlayingMovies, fetchPopularMovies } from "../actions/movies";

export interface MovieState {
  nowPlaying: Movie[] | [];
  loadingNowPlaying: boolean;
  popular: Movie[] | [];
  loadingPopular: boolean;
}

const initialState: MovieState = {
  nowPlaying: [],
  loadingNowPlaying: false,
  popular: [],
  loadingPopular: false,
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
  },
});

export default movieSlice.reducer;
