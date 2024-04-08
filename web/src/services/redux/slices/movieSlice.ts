import Movie from "@/models/Movie";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MovieState {
  nowPlaying: Movie[] | [];
}

const initialState: MovieState = {
  nowPlaying: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setNowPlaying: (state, action: PayloadAction<Movie[] | []>) => {
      state.nowPlaying = action.payload;
    },
  },
});

export const { setNowPlaying } = movieSlice.actions;

export default movieSlice.reducer;
