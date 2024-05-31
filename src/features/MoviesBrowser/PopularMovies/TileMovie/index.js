import {
  Container,
  Image,
  Description,
  DescriptionTitle,
  Data,
  Rating,
  NumberOfRating,
  AverageRating,
  StyleStarIcon,
} from "./styled";
import Genres from "../../Genres/index.js";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchGenres } from "../../Genres/genresSlice.js";

export const TileMovie = ({ repositories }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  const movies = Object.values(repositories.results);
  console.log(movies);

  return (
    <>
      {movies.map(
        ({
          id,
          title,
          release_date,
          poster_path,
          vote_count,
          vote_average,
          genre_ids,
        }) => (
          <Container key={id}>
            <Image
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt=""
            />
            <Description>
              <DescriptionTitle>{title}</DescriptionTitle>
              <Data>{release_date}</Data>
              <Genres genreIds={genre_ids} />
              <Rating>
                <StyleStarIcon />
                <AverageRating>{vote_average.toFixed(1)}</AverageRating>
                <NumberOfRating>{vote_count} votes</NumberOfRating>
              </Rating>
            </Description>
          </Container>
        )
      )}
    </>
  );
};
