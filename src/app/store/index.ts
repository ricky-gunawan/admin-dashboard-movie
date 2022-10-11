import { configureStore } from "@reduxjs/toolkit";
import getGenreListReducer from "../../feature/get-genre-list/models";
import getMovieDetailsReducer from "../../feature/get-movie-details/models";
import getMovieListReducer from "../../feature/get-movie-list/models";

const store = configureStore({
  reducer: {
    getGenreList: getGenreListReducer,
    getMovieList: getMovieListReducer,
    getMovieDetails: getMovieDetailsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
