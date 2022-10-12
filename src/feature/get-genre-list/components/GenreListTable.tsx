import { useEffect } from "react";
import { ErrorMessage } from "../../../shared/components/ErrorMessage";
import { Loader } from "../../../shared/components/Loader";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks";
import getGenreListQuery from "../models/getGenreListQuery";

export const GenreListTable = () => {
  const { isLoading, isFailed, genreList } = useAppSelector((store) => store.getGenreList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGenreListQuery());
  }, []);
  return (
    <div className="mx-auto w-fit">
      {isLoading ? (
        <Loader />
      ) : isFailed ? (
        <ErrorMessage />
      ) : (
        <table className="text-center">
          <thead>
            <tr className="border-b-2 border-gray-400">
              <th>No.</th>
              <th className="px-20">Genre</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {genreList.genres?.map((genre, index) => (
              <tr key={genre.id}>
                <td>{index}</td>
                <td>{genre.name}</td>
                <td>{genre.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
