import { createSlice } from "@reduxjs/toolkit";
import getMovieDetailsQuery, { MovieDetails } from "./getMovieDetailsQuery";

interface getMovieDetails {
  isLoading: boolean | undefined;
  movieDetails: MovieDetails;
  isFailed: boolean | undefined;
}

const initialState: getMovieDetails = {
  isLoading: undefined,
  movieDetails: {},
  isFailed: undefined,
};

const getMovieDetails = createSlice({
  name: "getMovieDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovieDetailsQuery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovieDetailsQuery.fulfilled, (state, action) => {
        state.movieDetails = action.payload;
        state.isLoading = false;
        state.isFailed = false;
      })
      .addCase(getMovieDetailsQuery.rejected, (state) => {
        state.isLoading = false;
        state.isFailed = true;
      });
  },
});

const getMovieDetailsReducer = getMovieDetails.reducer;
export default getMovieDetailsReducer;
