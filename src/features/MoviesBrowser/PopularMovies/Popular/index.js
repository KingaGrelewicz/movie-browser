import { useSelector } from "react-redux";
import { TileMovie } from "../TileMovie";
import { Title, Movies } from "./styled";
import { selectMoviesByQuery } from "../../movieBrowserSlice";
import {NoResultView} from "../../../NoResultView"

export const Popular = ({ query }) => {
  const films = useSelector((state) => selectMoviesByQuery(state, query));
  const numberOfMovies = films.length;

  const title = query ? `Searches for "${query}" (${numberOfMovies} movies)` : "Popular People";

  return (
    <>
      {numberOfMovies > 0 ? (
        <>
          <Title>Popular Movies</Title>
          <Movies>
            {films.map((movie) => (
              <TileMovie key={movie.id} {...movie} />
            ))}
          </Movies>
        </>
      ) : (
        <NoResultView query={query} />
      )}
    </>
  );
};
