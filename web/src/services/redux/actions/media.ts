import { fetchMoviesImages, fetchMoviesVideos } from "@/services/tmdb/media";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchImages = createAsyncThunk(
  "media/fetchImages",
  async (id: string) => {
    const response = await fetchMoviesImages(id);
    return response;
  }
);

export const fetchVideos = createAsyncThunk(
  "media/fetchVideos",
  async (id: string) => {
    const response = await fetchMoviesVideos(id);
    return response;
  }
);
