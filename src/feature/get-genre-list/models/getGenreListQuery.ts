import { createAsyncThunk } from "@reduxjs/toolkit";
import { getGenreListApi } from "../../../shared/api";

export interface GenreList {
  genres?: {
    id?: number;
    name?: string;
  }[];
}

const getGenreListQuery = createAsyncThunk<GenreList>("getGenreList/getGenreListQuery", async () => {
  const resp = await getGenreListApi();
  return resp.data;
});

export default getGenreListQuery;
