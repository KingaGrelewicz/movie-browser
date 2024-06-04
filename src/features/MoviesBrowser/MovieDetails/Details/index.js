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

const Details = ({ movieDetails }) => {
  const releaseYear = movieDetails.release_date;
  const year = new Date(releaseYear).getFullYear();

  return (
    <DetailsWrapper>
      <DetailsPoster
        src={`https://image.tmdb.org/t/p/w342/${movieDetails?.poster_path}`}
        alt="Movie Poster"
      />
      <DetailsContent>
        <DetailsHeader>{movieDetails?.title}</DetailsHeader>
        <DetailsProductionYear>{year}</DetailsProductionYear>
        <DetailsProductionData>
          <DetailsProduction>Production:</DetailsProduction>
          <DetailsProductionContent>
            {movieDetails?.production_countries
              .map((country) => country.name)
              .join(", ")}
          </DetailsProductionContent>
          <DetailsReleaseDate>Release date:</DetailsReleaseDate>
          <DetailsReleaseDateContent>
            {movieDetails?.release_date}
          </DetailsReleaseDateContent>
        </DetailsProductionData>
        <DetailsGenres>
          {movieDetails?.genres.map(({ id, name }) => (
            <DetailsGenereItem key={id}>{name}</DetailsGenereItem>
          ))}
        </DetailsGenres>
        <Rating
          variant="details"
          ratingData={{
            vote_average: movieDetails.vote_average,
            vote_count: movieDetails.vote_count,
          }}
        />
      </DetailsContent>
      <DetailsOverview>{movieDetails?.overview}</DetailsOverview>
    </DetailsWrapper>
  );
};

export default Details;
