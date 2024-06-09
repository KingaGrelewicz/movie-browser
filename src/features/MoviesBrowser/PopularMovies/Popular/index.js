import React from "react";
import { useSelector } from "react-redux";
import { TileMovie } from "../TileMovie";
import { Title, Movies } from "./styled";
import { selectMoviesByQuery } from "../../movieBrowserSlice";
import { NoResultView } from "./../../../NoResultView/index";
import { Paginations } from "../../../Pagination";
import { setPages } from "../../movieBrowserSlice";

export const Popular = ({ query, pages }) => {
  const films = useSelector((state) => selectMoviesByQuery(state, query));
  const numberOfMovies = films.length;

  const title = query ? `Searches for "${query}" (${numberOfMovies} movies)` : "Popular People";

  return (
    <>
      {numberOfMovies > 0 ? (
        <>
          <Title>{title}</Title>
          <Movies>
            {films.map((movie) => (
              <TileMovie key={movie.id} {...movie} />
            ))}
          </Movies>
          <Paginations pages={pages} setPages={setPages} />
        </>
      ) : (
        <NoResultView query={query} />
      )}
    </>
  );
};
