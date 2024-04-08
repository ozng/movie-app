import Movie from "@/models/Movie";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MovieState {
  popularMovies: Movie[] | [];
}

const initialState: MovieState = {
  popularMovies: [{ id: "1", title: "Lord of the rings" }],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setPopularMovies: (state, action: PayloadAction<Movie[] | []>) => {
      state.popularMovies = action.payload;
    },
    add: (state, action: PayloadAction<Movie>) => {
      state.popularMovies = [...state.popularMovies, action.payload];
    },
  },
});

export const { setPopularMovies, add } = movieSlice.actions;

export default movieSlice.reducer;
