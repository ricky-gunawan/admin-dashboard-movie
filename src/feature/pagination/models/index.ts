import { createSlice } from "@reduxjs/toolkit";
import getMovieListQuery from "../../get-movie-list/models/getMovieListQuery";

interface Pagination {
  page: number;
  totalPages: number;
}

const initialState: Pagination = {
  page: 1,
  totalPages: 29,
};

const pagination = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    firstPage: (state) => {
      state.page = 1;
    },
    prevPage: (state) => {
      state.page -= 1;
    },
    nextPage: (state) => {
      state.page += 1;
    },
    lastPage: (state) => {
      state.page = state.totalPages;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovieListQuery.fulfilled, (state, action) => {
      state.totalPages = action.payload.total_pages || state.totalPages;
    });
  },
});

export const { firstPage, prevPage, nextPage, lastPage } = pagination.actions;

const paginationReducer = pagination.reducer;
export default paginationReducer;
