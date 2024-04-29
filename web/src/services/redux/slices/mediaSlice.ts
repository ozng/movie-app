import { ImageReturnType } from "@/types/Media";
import { createSlice } from "@reduxjs/toolkit";
import { fetchImages } from "../actions/media";

interface MediaState {
  photos: ImageReturnType | null;
  loadingPhotos: boolean;
  videos: null;
  loadingVideos: boolean;
}

const initialState: MediaState = {
  photos: null,
  loadingPhotos: false,
  videos: null,
  loadingVideos: false,
};

export const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    resetMedia: (state) => {
      state.photos = null;
      state.videos = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchImages.pending, (state) => {
      state.loadingPhotos = true;
    });
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      state.loadingPhotos = false;
      state.photos = action.payload;
    });
    builder.addCase(fetchImages.rejected, (state) => {
      state.loadingPhotos = false;
      state.photos = null;
    });
  },
});

export const { resetMedia } = mediaSlice.actions;

export default mediaSlice.reducer;
