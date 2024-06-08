import React from "react";
import { useSelector } from "react-redux";
import { TileMovie } from "../TileMovie";
import { Title, Movies } from "./styled";
import { selectMoviesByQuery } from "../../movieBrowserSlice";
import { NoResultView } from "./../../../NoResultView/index";

export const Popular = ({ query }) => {
  const films = useSelector((state) => selectMoviesByQuery(state, query));

  return (
    <>
      {films.length > 0 && (
        <>
          <Title>Popular movies</Title>
          <Movies>
            {films.map((movie) => (
              <TileMovie key={movie.id} {...movie} />
            ))}
          </Movies>
        </>
      )}
      {films.length === 0 && (
        <NoResultView query={query} />
      )}
    </>
  );
};
