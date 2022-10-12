import { MovieListTable } from "../feature/get-movie-list/components/MovieListTable";
import { Pagination } from "../feature/pagination/components/Pagination";

const MovieListPage = () => {
  return (
    <>
      <Pagination />
      <MovieListTable />
      <Pagination />
    </>
  );
};

export default MovieListPage;
