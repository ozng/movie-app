import { Movie, MovieDetail } from "@/models/Movie";
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchMovieDetail,
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
  movieDetail: MovieDetail | null;
  loadingMovieDetail: boolean;
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
  movieDetail: null,
  loadingMovieDetail: false,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    resetMovieDetail: (state) => {
      state.movieDetail = null;
    },
  },
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
    builder.addCase(fetchMovieDetail.pending, (state) => {
      state.loadingMovieDetail = true;
    });
    builder.addCase(fetchMovieDetail.fulfilled, (state, action) => {
      state.movieDetail = action.payload;
      state.loadingMovieDetail = false;
    });
    builder.addCase(fetchMovieDetail.rejected, (state) => {
      state.loadingMovieDetail = false;
      state.movieDetail = null;
    });
  },
});

export const { resetMovieDetail } = movieSlice.actions;

export default movieSlice.reducer;
