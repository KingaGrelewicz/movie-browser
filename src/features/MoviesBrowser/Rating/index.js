import PropTypes from "prop-types";
import {
  RatingAverage,
  RatingWrapper,
  RatingVotesCount,
  RatingImage,
  RatingPoints,
} from "./styled";

const Rating = ({ variant, ratingData }) => {
  console.log(ratingData)
  return (
    <RatingWrapper $variant={variant}>
      <RatingImage alt="Rating Image" $variant={variant} />
      <RatingAverage $variant={variant}>
        {/* {ratingData.vote_average.toFixed(1)}{" "} */}
        <RatingPoints $variant={variant}>/10</RatingPoints>
      </RatingAverage>
      <RatingVotesCount $variant={variant}>
        {/* {ratingData.vote_count} votes */}
      </RatingVotesCount>
    </RatingWrapper>
  );
};

Rating.propTypes = {
  variant: PropTypes.string,
  ratingData: PropTypes.shape({
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
  }).isRequired,
};

export default Rating;
