import {
  Container,
  Image,
  Description,
  DescriptionTitle,
  Data,
  Links,
} from "./styled";
import Genres from "../../Genres/index.js";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchGenres } from "../../Genres/genresSlice.js";
import Rating from "../../Rating";

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
              <DescriptionTitle>
                <Links to={`/movies/${id}`}>{title}</Links>
              </DescriptionTitle>
              <Data>{release_date}</Data>
              <Genres genreIds={genre_ids} />
              <Rating
                variant="movies"
                ratingData={{ vote_average, vote_count }}
              />
            </Description>
          </Container>
        )
      )}
    </>
  );
};
