import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMovieListApi } from "../../../shared/api";

export interface MovieList {
  page?: number;
  results?: {
    poster_path?: string | null;
    adult?: boolean;
    overview?: string;
    release_date?: string;
    genre_ids?: number[];
    id?: number;
    original_title?: string;
    original_language?: string;
    title?: string;
    backdrop_path?: string | null;
    popularity?: number;
    vote_count?: number;
    video?: boolean;
    vote_average?: number;
  }[];
  dates?: {
    maximum?: string;
    minimum?: string;
  };
  total_pages?: number;
  total_results?: number;
}

const getMovieListQuery = createAsyncThunk<MovieList, { page: number }>("getMovieList/getMovieListQuery", async (payload, thunkAPI) => {
  const resp = await getMovieListApi(payload.page);
  return resp.data;
});

export default getMovieListQuery;
