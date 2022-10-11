import { createSlice } from "@reduxjs/toolkit";
import getGenreListQuery, { GenreList } from "./getGenreListQuery";

interface getGenreList {
  isLoading: boolean | undefined;
  genreList: GenreList;
  isFailed: boolean | undefined;
}

const initialState: getGenreList = {
  isLoading: undefined,
  genreList: {},
  isFailed: undefined,
};

const getGenreList = createSlice({
  name: "getGenreList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGenreListQuery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGenreListQuery.fulfilled, (state, action) => {
        state.genreList = action.payload;
        state.isLoading = false;
        state.isFailed = false;
      })
      .addCase(getGenreListQuery.rejected, (state) => {
        state.isLoading = false;
        state.isFailed = true;
      });
  },
});

const getGenreListReducer = getGenreList.reducer;
export default getGenreListReducer;
