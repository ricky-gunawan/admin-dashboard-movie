import { createSlice } from "@reduxjs/toolkit";
import getMovieListQuery, { MovieList } from "./getMovieListQuery";

interface getMovieList {
  isLoading: boolean | undefined;
  movieList: MovieList;
  isFailed: boolean | undefined;
}

const initialState: getMovieList = {
  isLoading: undefined,
  movieList: {},
  isFailed: undefined,
};

const getMovieList = createSlice({
  name: "getMovieList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovieListQuery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovieListQuery.fulfilled, (state, action) => {
        state.movieList = action.payload;
        state.isLoading = false;
        state.isFailed = false;
      })
      .addCase(getMovieListQuery.rejected, (state) => {
        state.isLoading = false;
        state.isFailed = true;
      });
  },
});

const getMovieListReducer = getMovieList.reducer;
export default getMovieListReducer;
