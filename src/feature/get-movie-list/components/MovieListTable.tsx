import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ErrorMessage } from "../../../shared/components/ErrorMessage";
import { Loader } from "../../../shared/components/Loader";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks";
import getMovieListQuery from "../models/getMovieListQuery";

export const MovieListTable = () => {
  const { isLoading, isFailed, movieList } = useAppSelector((store) => store.getMovieList);
  const { page, totalPages } = useAppSelector((store) => store.pagination);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovieListQuery({ page }));
  }, [page]);
  return (
    <div className="my-4 mx-auto w-full">
      {isLoading ? (
        <Loader />
      ) : isFailed ? (
        <ErrorMessage />
      ) : (
        movieList.results?.map((movie, index) => (
          <Link key={movie.id} to={`/movie-details/${movie.id}`}>
            <table className="mb-4 rounded-lg bg-neutral-50 shadow-md p-1 cursor-pointer">
              <tbody className="">
                <tr>
                  <td className="w-10 text-center border-r-2 border-gray-500" rowSpan={14}>
                    {index + 1}
                  </td>
                  <td className="w-40">poster path</td>
                  <td className="w-10">:</td>
                  <td>{movie.poster_path}</td>
                </tr>
                <tr>
                  <td>adult</td>
                  <td>:</td>
                  <td>{movie.adult ? "yes" : "no"}</td>
                </tr>
                <tr>
                  <td>overview</td>
                  <td>:</td>
                  <td>{movie.overview}</td>
                </tr>
                <tr>
                  <td>release date</td>
                  <td>:</td>
                  <td>{movie.release_date}</td>
                </tr>
                <tr>
                  <td>genre ids</td>
                  <td>:</td>
                  <td>{movie.genre_ids}</td>
                </tr>
                <tr>
                  <td>id</td>
                  <td>:</td>
                  <td>{movie.id}</td>
                </tr>
                <tr>
                  <td>original title</td>
                  <td>:</td>
                  <td>{movie.original_title}</td>
                </tr>
                <tr>
                  <td>original language</td>
                  <td>:</td>
                  <td>{movie.original_language}</td>
                </tr>
                <tr>
                  <td>title</td>
                  <td>:</td>
                  <td>{movie.title}</td>
                </tr>
                <tr>
                  <td>backdrop path</td>
                  <td>:</td>
                  <td>{movie.backdrop_path}</td>
                </tr>
                <tr>
                  <td>popularity</td>
                  <td>:</td>
                  <td>{movie.popularity}</td>
                </tr>
                <tr>
                  <td>vote count</td>
                  <td>:</td>
                  <td>{movie.vote_count}</td>
                </tr>
                <tr>
                  <td>video</td>
                  <td>:</td>
                  <td>{movie.video ? "yes" : "no"}</td>
                </tr>
                <tr>
                  <td>vote average</td>
                  <td>:</td>
                  <td>{movie.vote_average}</td>
                </tr>
              </tbody>
            </table>
          </Link>
        ))
      )}
    </div>
  );
};
