import { SearchReturnType } from "@/types/Search";
import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchResults } from "../actions/search";

interface SearchState {
  results: SearchReturnType | null;
  loading: boolean;
}

const initialState: SearchState = {
  results: null,
  loading: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    reset: (state) => {
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

export const { reset } = searchSlice.actions;

export default searchSlice.reducer;
