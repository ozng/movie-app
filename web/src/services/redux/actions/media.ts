import { fetchMoviesImages } from "@/services/tmdb/media";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchImages = createAsyncThunk(
  "media/fetchImages",
  async (id: string) => {
    const response = await fetchMoviesImages(id);
    return response;
  }
);
