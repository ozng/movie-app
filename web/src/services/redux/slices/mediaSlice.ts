import { ImageReturnType, VideoReturnType } from "@/types/Media";
import { createSlice } from "@reduxjs/toolkit";
import { fetchImages, fetchVideos } from "../actions/media";

interface MediaState {
  photos: ImageReturnType | null;
  loadingPhotos: boolean;
  videos: VideoReturnType | null;
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
    // Images
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
    // Videos
    builder.addCase(fetchVideos.pending, (state) => {
      state.loadingVideos = true;
    });
    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      state.loadingVideos = false;
      state.videos = action.payload;
    });
    builder.addCase(fetchVideos.rejected, (state) => {
      state.loadingVideos = false;
      state.photos = null;
    });
  },
});

export const { resetMedia } = mediaSlice.actions;

export default mediaSlice.reducer;
