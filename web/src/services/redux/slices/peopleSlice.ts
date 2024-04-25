import { createSlice } from "@reduxjs/toolkit";
import { fetchCastAndCrewsFromSelectedMovie } from "../actions/people";
import { CastAndCrewReturnType } from "@/services/tmdb/people";

interface PeopleState {
  people: string;
  selectedMovieCredit: CastAndCrewReturnType | null;
  filteredMovieCredit: CastAndCrewReturnType | null;
  loadingCastAndCrew: boolean;
  showAllCast: boolean;
}

const initialState: PeopleState = {
  people: "",
  selectedMovieCredit: null,
  filteredMovieCredit: null,
  loadingCastAndCrew: false,
  showAllCast: false,
};

const maxCastLength = 8;

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    resetCredit: (state) => {
      state.selectedMovieCredit = null;
      state.filteredMovieCredit = null;
    },
    showCast: (state) => {
      state.filteredMovieCredit = state.selectedMovieCredit
        ? { ...state.selectedMovieCredit }
        : null;
      state.showAllCast = true;
    },
    hideCast: (state) => {
      state.filteredMovieCredit = state.selectedMovieCredit
        ? {
            ...state.selectedMovieCredit,
            cast: state.selectedMovieCredit.cast.slice(0, maxCastLength),
          }
        : null;
      state.showAllCast = false;
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
        state.filteredMovieCredit = {
          ...action.payload,
          cast: action.payload.cast.slice(0, maxCastLength),
        };
        state.showAllCast = false;
      }
    );
  },
});

export const { resetCredit, showCast, hideCast } = peopleSlice.actions;

export default peopleSlice.reducer;
