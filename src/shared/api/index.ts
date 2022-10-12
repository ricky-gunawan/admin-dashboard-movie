import axios from "axios";
import { api_key } from "../config";

export const getGenreListApi = () => {
  return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`);
};
export const getMovieListApi = (page: number) => {
  return axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&page=${page}`);
};
export const getMovieDetailApi = (movie_id: string) => {
  return axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}`);
};
