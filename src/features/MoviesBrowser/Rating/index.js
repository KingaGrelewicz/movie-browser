import { useSelector } from "react-redux";
import { selectMovieDetailsState } from "../movieDetailsSlice";
import {
  RatingAverage,
  RatingWrapper,
  RatingVotesCount,
  RatingImage,
  RatingPoints,
} from "./styled";

const Rating = ({ variant }) => {
  const movieDetails = useSelector(selectMovieDetailsState);

  return (
    <RatingWrapper $variant={variant}>
      <RatingImage alt="Rating Image" $variant={variant} />
      <RatingAverage $variant={variant}>
        {movieDetails.details.vote_average.toFixed(1)}{" "}
        <RatingPoints $variant={variant}>/10</RatingPoints>
      </RatingAverage>
      <RatingVotesCount $variant={variant}>
        {movieDetails.details.vote_count} votes
      </RatingVotesCount>
    </RatingWrapper>
  );
};

export default Rating;
