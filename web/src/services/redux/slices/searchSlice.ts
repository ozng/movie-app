import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchResults } from "../actions/search";
import { SearchState } from "../types/Search";

const initialState: SearchState = {
  results: null,
  loading: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    resetSearchResults: (state) => {
      state.loading = false;
      state.results = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchResults.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSearchResults.rejected, (state) => {
      state.loading = false;
      state.results = null;
    });
    builder.addCase(fetchSearchResults.fulfilled, (state, action) => {
      state.loading = false;
      state.results = action.payload;
    });
  },
});

export const { resetSearchResults } = searchSlice.actions;

export default searchSlice.reducer;
