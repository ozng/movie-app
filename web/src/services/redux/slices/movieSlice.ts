import Movie from "@/models/Movie";
import { createSlice } from "@reduxjs/toolkit";
import { fetchNowPlayingMovies } from "../actions/movies";

export interface MovieState {
  nowPlaying: Movie[] | [];
  loadingNowPlaying: boolean;
}

const initialState: MovieState = {
  nowPlaying: [],
  loadingNowPlaying: false,
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
  },
});

export default movieSlice.reducer;
