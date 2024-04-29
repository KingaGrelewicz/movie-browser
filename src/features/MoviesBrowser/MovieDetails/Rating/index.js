import { useSelector } from "react-redux";
import { selectMovieDetailsSlice } from "../movieDetailsSlice";
import {
  RatingAverage,
  RatingWrapper,
  RatingVotesCount,
  RatingImage,
  RatingPoints,
} from "./styled";
import starImg from "./image/star.png";

const Rating = ({ color }) => {
  const movieDetails = useSelector(selectMovieDetailsSlice);

  return (
    <RatingWrapper color={color}>
      <RatingImage src={starImg} alt="Rating Image" />
      <RatingAverage>
        {movieDetails.details.vote_average.toFixed(1)}{" "}
        <RatingPoints>/10</RatingPoints>
      </RatingAverage>
      <RatingVotesCount>
        {movieDetails.details.vote_count} votes
      </RatingVotesCount>
    </RatingWrapper>
  );
};

export default Rating;
