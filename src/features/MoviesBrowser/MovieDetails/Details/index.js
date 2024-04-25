import { useSelector } from "react-redux";
import { selectMovieDetailsSlice } from "../movieDetailsSlice";
import Rating from "../Rating";
import {
  DetailsContent,
  DetailsGenereItem,
  DetailsGenres,
  DetailsHeader,
  DetailsOverview,
  DetailsPoster,
  DetailsProduction,
  DetailsProductionContent,
  DetailsProductionData,
  DetailsProductionYear,
  DetailsReleaseDate,
  DetailsReleaseDateContent,
  DetailsWrapper,
} from "./styled";

const Details = () => {
  const movieDetails = useSelector(selectMovieDetailsSlice);

  return (
    <DetailsWrapper>
      <DetailsPoster
        src={`https://image.tmdb.org/t/p/w342/${movieDetails.details.poster_path}`}
        alt="Movie Poster"
      />
      <DetailsContent>
        <DetailsHeader>{movieDetails.details.title}</DetailsHeader>
        <DetailsProductionYear>
          {movieDetails.details.release_date}
        </DetailsProductionYear>
        <DetailsProductionData>
          <DetailsProduction>
            Production:
            <DetailsProductionContent>
              {movieDetails.details.production_countries.map(
                (country) => country.name
              )}
            </DetailsProductionContent>
          </DetailsProduction>
          <DetailsReleaseDate>
            Release date:
            <DetailsReleaseDateContent>
              {movieDetails.details.release_date}
            </DetailsReleaseDateContent>
          </DetailsReleaseDate>
        </DetailsProductionData>
        <DetailsGenres>
          {movieDetails.details.genres.map((genre) => (
            <DetailsGenereItem key={genre.id}>{genre.name}</DetailsGenereItem>
          ))}
        </DetailsGenres>
        <Rating />
        <DetailsOverview>{movieDetails.details.overview}</DetailsOverview>
      </DetailsContent>
    </DetailsWrapper>
  );
};

export default Details;
