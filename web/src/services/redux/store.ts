import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./slices/movieSlice";
import { useDispatch } from "react-redux";
import peopleSlice from "./slices/peopleSlice";

export const store = configureStore({
  reducer: {
    movie: movieSlice,
    people: peopleSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
