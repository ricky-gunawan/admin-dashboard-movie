import { Provider } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import GenreListPage from "../pages/GenreListPage";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import MovieListPage from "../pages/MovieListPage";
import NotFoundPage from "../pages/NotFoundPage";
import { AppBar } from "./AppBar";
import store from "./store";
import "./styles/index.css";

function App() {
  return (
    <Provider store={store}>
      <div className="mx-auto px-1 max-w-screen-2xl">
        <div className="fixed top-0 left-1/2 z-10 h-16 w-full max-w-screen-2xl -translate-x-1/2">
          <AppBar />
        </div>
        <div className="mt-20">
          <Routes>
            <Route index element={<Navigate to="/genre-list" />} />
            <Route path="/genre-list" element={<GenreListPage />} />
            <Route path="/movie-list" element={<MovieListPage />} />
            <Route path="/movie-details" element={<MovieDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default App;
