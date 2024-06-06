import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCastAndCrewsFromSelectedMovie,
  fetchImages,
  fetchPeopleDetails,
  fetchPeopleMovieCredits,
  fetchTaggedImages,
} from "../actions/people";
import { PeopleState } from "../types/People";

const initialState: PeopleState = {
  selectedPeople: null,
  loadingSelectedPeople: false,
  selectedMovieCredit: null,
  filteredMovieCredit: null,
  loadingCastAndCrew: false,
  showAllCast: false,
  movies: null,
  loadingMovies: false,
  images: null,
  loadingImages: false,
  taggedImages: null,
  loadingTaggedImages: false,
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
      state.movies = null;
      state.taggedImages = null;
      state.images = null;
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
    // People Movies
    builder.addCase(fetchPeopleMovieCredits.pending, (state) => {
      state.loadingMovies = true;
    });
    builder.addCase(fetchPeopleMovieCredits.rejected, (state) => {
      state.loadingMovies = false;
    });
    builder.addCase(fetchPeopleMovieCredits.fulfilled, (state, action) => {
      state.loadingMovies = false;
      action.payload.cast.sort((a, b) => {
        if (a.release_date < b.release_date) {
          return 1;
        } else if (b.release_date < a.release_date) {
          return -1;
        } else {
          return 0;
        }
      });
      state.movies = action.payload;
    });
    // Images
    builder.addCase(fetchImages.pending, (state) => {
      state.loadingImages = true;
    });
    builder.addCase(fetchImages.rejected, (state) => {
      state.loadingImages = false;
    });
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      state.loadingImages = false;
      state.images = action.payload;
    });
    // Tagged Images
    builder.addCase(fetchTaggedImages.pending, (state) => {
      state.loadingTaggedImages = true;
    });
    builder.addCase(fetchTaggedImages.rejected, (state) => {
      state.loadingTaggedImages = false;
    });
    builder.addCase(fetchTaggedImages.fulfilled, (state, action) => {
      state.loadingTaggedImages = false;
      state.taggedImages = action.payload;
    });
  },
});

export const { resetCredit, showCast, hideCast, resetPeople } =
  peopleSlice.actions;

export default peopleSlice.reducer;
