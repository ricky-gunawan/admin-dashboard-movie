import { Link } from "react-router-dom";

export const AppBar = () => {
  return (
    <div className="flex h-16 w-full items-center bg-amber-500 px-2 text-neutral-50 shadow-lg md:px-16">
      <div className="text-xl font-extrabold grow">Admin Dashboard</div>
      <nav className="gap-2 md:gap-4 flex text-lg font-bold">
        <Link to="/genre-list">
          <div className="hover:border-b-2 border-neutral-50 cursor-pointer">Genre List</div>
        </Link>
        <Link to="/movie-list">
          <div className="hover:border-b-2 border-neutral-50 cursor-pointer">Movie List</div>
        </Link>
      </nav>
    </div>
  );
};
