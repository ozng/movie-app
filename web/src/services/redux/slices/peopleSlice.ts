import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCastAndCrewsFromSelectedMovie,
  fetchPeopleDetails,
} from "../actions/people";
import { CastAndCrewReturnType } from "@/services/tmdb/people";
import { People } from "@/types/People";

interface PeopleState {
  selectedPeople: People | null;
  loadingSelectedPeople: boolean;
  selectedMovieCredit: CastAndCrewReturnType | null;
  filteredMovieCredit: CastAndCrewReturnType | null;
  loadingCastAndCrew: boolean;
  showAllCast: boolean;
}

const initialState: PeopleState = {
  selectedPeople: null,
  loadingSelectedPeople: false,
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
    resetPeople: (state) => {
      state.selectedPeople = null;
      state.loadingSelectedPeople = false;
    },
  },
  extraReducers: (builder) => {
    // Cast And Crew
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
    // People
    builder.addCase(fetchPeopleDetails.pending, (state) => {
      state.loadingSelectedPeople = true;
    });
    builder.addCase(fetchPeopleDetails.rejected, (state) => {
      state.loadingSelectedPeople = false;
    });
    builder.addCase(fetchPeopleDetails.fulfilled, (state, action) => {
      state.loadingSelectedPeople = false;
      state.selectedPeople = action.payload;
    });
  },
});

export const { resetCredit, showCast, hideCast, resetPeople } =
  peopleSlice.actions;

export default peopleSlice.reducer;
