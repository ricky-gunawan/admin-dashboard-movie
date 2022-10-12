import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ErrorMessage } from "../../../shared/components/ErrorMessage";
import { Loader } from "../../../shared/components/Loader";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks";
import getMovieDetailsQuery from "../models/getMovieDetailsQuery";

export const MovieDetails = () => {
  const { isLoading, isFailed, movieDetails } = useAppSelector((store) => store.getMovieDetails);
  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    params.movie_id && dispatch(getMovieDetailsQuery({ movie_id: params.movie_id }));
  }, [params]);
  return (
    <div className="my-4 mx-auto w-full">
      {isLoading ? (
        <Loader />
      ) : isFailed ? (
        <ErrorMessage />
      ) : (
        <form className="w-full">
          <table className="mb-4 w-full rounded-lg bg-neutral-50 shadow-md cursor-pointer">
            <tbody className="">
              <tr className="">
                <td className="w-40">backdrop_path</td>
                <td className="w-10">:</td>
                <input className="w-full rounded-md" type="text" value={movieDetails.backdrop_path ? movieDetails.backdrop_path : ""} />
              </tr>
              <tr className="">
                <td className="">budget</td>
                <td className="">:</td>
                <input className="w-full rounded-md" type="text" value={movieDetails.budget ? movieDetails.budget : ""} />
              </tr>
              <tr className="">
                <td className="">homepage</td>
                <td className="">:</td>
                <input className="w-full rounded-md" type="text" value={movieDetails.homepage ? movieDetails.homepage : ""} />
              </tr>
              <tr className="">
                <td className="">id</td>
                <td className="">:</td>
                <input className="w-full rounded-md" type="text" value={movieDetails.id ? movieDetails.id : ""} />
              </tr>
              <tr className="">
                <td className="">imdb_id</td>
                <td className="">:</td>
                <input className="w-full rounded-md" type="text" value={movieDetails.imdb_id ? movieDetails.imdb_id : ""} />
              </tr>
              <tr className="">
                <td className="">original_language</td>
                <td className="">:</td>
                <input className="w-full rounded-md" type="text" value={movieDetails.original_language ? movieDetails.original_language : ""} />
              </tr>
              <tr className="">
                <td className="">original_title</td>
                <td className="">:</td>
                <input className="w-full rounded-md" type="text" value={movieDetails.original_title ? movieDetails.original_title : ""} />
              </tr>
              <tr className="">
                <td className="">overview</td>
                <td className="">:</td>
                <input className="w-full rounded-md" type="text" value={movieDetails.overview ? movieDetails.overview : ""} />
              </tr>
              <tr className="">
                <td className="">popularity</td>
                <td className="">:</td>
                <input className="w-full rounded-md" type="text" value={movieDetails.popularity ? movieDetails.popularity : ""} />
              </tr>
              <tr className="">
                <td className="">poster_path</td>
                <td className="">:</td>
                <input className="w-full rounded-md" type="text" value={movieDetails.poster_path ? movieDetails.poster_path : ""} />
              </tr>
              <tr className="">
                <td className="">release_date</td>
                <td className="">:</td>
                <input className="w-full rounded-md" type="text" value={movieDetails.release_date ? movieDetails.release_date : ""} />
              </tr>
              <tr className="">
                <td className="">revenue</td>
                <td className="">:</td>
                <input className="w-full rounded-md" type="text" value={movieDetails.revenue ? movieDetails.revenue : ""} />
              </tr>
              <tr className="">
                <td className="">runtime</td>
                <td className="">:</td>
                <input className="w-full rounded-md" type="text" value={movieDetails.runtime ? movieDetails.runtime : ""} />
              </tr>
              <tr className="">
                <td className="">status</td>
                <td className="">:</td>
                <input className="w-full rounded-md" type="text" value={movieDetails.status ? movieDetails.status : ""} />
              </tr>
              <tr className="">
                <td className="">tagline</td>
                <td className="">:</td>
                <input className="w-full rounded-md" type="text" value={movieDetails.tagline ? movieDetails.tagline : ""} />
              </tr>
              <tr className="">
                <td className="">title</td>
                <td className="">:</td>
                <input className="w-full rounded-md" type="text" value={movieDetails.title ? movieDetails.title : ""} />
              </tr>
              <tr className="">
                <td className="">vote_average</td>
                <td className="">:</td>
                <input className="w-full rounded-md" type="text" value={movieDetails.vote_average ? movieDetails.vote_average : ""} />
              </tr>
              <tr className="">
                <td className="">vote_count</td>
                <td className="">:</td>
                <input className="w-full rounded-md" type="text" value={movieDetails.vote_count ? movieDetails.vote_count : ""} />
              </tr>
              <tr className="">
                <td className="">adult</td>
                <td className="">:</td>
                <input type="checkbox" name="adult" id="adult" checked={movieDetails.adult} />
                <span className="ml-4">yes</span>
              </tr>
              <tr className="">
                <td className="">video</td>
                <td className="">:</td>
                <input type="checkbox" name="video" id="video" checked={movieDetails.video} />
                <span className="ml-4">yes</span>
              </tr>
              <tr className="">
                <td className="">belong_to_collection</td>
                <td className="">:</td>
                <td className="">null</td>
              </tr>
              <tr className="align-top">
                <td className="">genres</td>
                <td className="">:</td>
                <td>
                  {movieDetails.genres?.map((genre) => (
                    <div key={genre.id}>
                      <tr className="">
                        <td className="">id</td>
                        <td className="">:</td>
                        <input className="w-full rounded-md" type="text" value={genre.id} />
                      </tr>
                      <tr className="">
                        <td className="">genre</td>
                        <td className="">:</td>
                        <input className="w-full rounded-md" type="text" value={genre.name} />
                      </tr>
                    </div>
                  ))}
                </td>
              </tr>
              <tr className="align-top">
                <td className="">production_companies</td>
                <td className="">:</td>
                <td>
                  {movieDetails.production_companies?.map((company) => (
                    <div key={company.id}>
                      <tr className="">
                        <td className="">name</td>
                        <td className="">:</td>
                        <input className="w-full rounded-md" type="text" value={company.name} />
                      </tr>
                      <tr className="">
                        <td className="">id</td>
                        <td className="">:</td>
                        <input className="w-full rounded-md" type="text" value={company.id} />
                      </tr>
                      <tr className="">
                        <td className="">logo_path</td>
                        <td className="">:</td>
                        <input className="w-full rounded-md" type="text" value={company.logo_path ? company.logo_path : ""} />
                      </tr>
                      <tr className="">
                        <td className="">origin_country</td>
                        <td className="">:</td>
                        <input className="w-full rounded-md" type="text" value={company.origin_country} />
                      </tr>
                    </div>
                  ))}
                </td>
              </tr>
              <tr className="align-top">
                <td className="">production_countries</td>
                <td className="">:</td>
                <td>
                  {movieDetails.production_countries?.map((country) => (
                    <div key={country.iso_3166_1}>
                      <tr className="">
                        <td className="">iso_3166_1</td>
                        <td className="">:</td>
                        <input className="w-full rounded-md" type="text" value={country.iso_3166_1} />
                      </tr>
                      <tr className="">
                        <td className="">name</td>
                        <td className="">:</td>
                        <input className="w-full rounded-md" type="text" value={country.name} />
                      </tr>
                    </div>
                  ))}
                </td>
              </tr>
              <tr className="align-top">
                <td className="">spoken_languages</td>
                <td className="">:</td>
                <td>
                  {movieDetails.spoken_languages?.map((country) => (
                    <div key={country.iso_639_1}>
                      <tr className="">
                        <td className="">iso_639_1</td>
                        <td className="">:</td>
                        <input className="w-full rounded-md" type="text" value={country.iso_639_1} />
                      </tr>
                      <tr className="">
                        <td className="">name</td>
                        <td className="">:</td>
                        <input className="w-full rounded-md" type="text" value={country.name} />
                      </tr>
                    </div>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      )}
    </div>
  );
};
