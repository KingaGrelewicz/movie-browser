import { useSelector } from "react-redux";
import { selectMovieDetailsState } from "../movieDetailsSlice";
import Rating from "../../Rating";
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
  const movieDetails = useSelector(selectMovieDetailsState);
  const releaseYear = movieDetails.details.release_date;
  const year = new Date(releaseYear).getFullYear();

  return (
    <DetailsWrapper>
      <DetailsPoster
        src={`https://image.tmdb.org/t/p/w342/${movieDetails.details.poster_path}`}
        alt="Movie Poster"
      />
      <DetailsContent>
        <DetailsHeader>{movieDetails.details.title}</DetailsHeader>
        <DetailsProductionYear>{year}</DetailsProductionYear>
        <DetailsProductionData>
          <DetailsProduction>Production:</DetailsProduction>
          <DetailsProductionContent>
            {movieDetails.details.production_countries.map(
              (country) => country.name
            )}
          </DetailsProductionContent>
          <DetailsReleaseDate>Release date:</DetailsReleaseDate>
          <DetailsReleaseDateContent>
            {movieDetails.details.release_date}
          </DetailsReleaseDateContent>
        </DetailsProductionData>
        <DetailsGenres>
          {movieDetails.details.genres.map((genre) => (
            <DetailsGenereItem key={genre.id}>{genre.name}</DetailsGenereItem>
          ))}
        </DetailsGenres>
        <Rating variant="details" />
      </DetailsContent>
      <DetailsOverview>{movieDetails.details.overview}</DetailsOverview>
    </DetailsWrapper>
  );
};

export default Details;
