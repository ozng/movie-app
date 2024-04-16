import { createSlice } from "@reduxjs/toolkit";
import { fetchCastAndCrewsFromSelectedMovie } from "../actions/people";
import { CastAndCrewReturnType } from "@/services/tmdb/people";

interface PeopleState {
  people: string;
  selectedMovieCredit: CastAndCrewReturnType | null;
  loadingCastAndCrew: boolean;
}

const initialState: PeopleState = {
  people: "",
  selectedMovieCredit: null,
  loadingCastAndCrew: false,
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    resetCredit: (state) => {
      state.selectedMovieCredit = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCastAndCrewsFromSelectedMovie.pending, (state) => {
      state.loadingCastAndCrew = true;
    });
    builder.addCase(fetchCastAndCrewsFromSelectedMovie.rejected, (state) => {
      state.loadingCastAndCrew = false;
    });
    builder.addCase(
      fetchCastAndCrewsFromSelectedMovie.fulfilled,
      (state, action) => {
        state.loadingCastAndCrew = false;
        state.selectedMovieCredit = action.payload;
      }
    );
  },
});

export const { resetCredit } = peopleSlice.actions;

export default peopleSlice.reducer;
