import {
  Container,
  Image,
  Description,
  DescriptionTitle,
  Data,
  Genre,
  Genres,
  Rating,
  NumberOfRating,
  AverageRating,
  StyleStarIcon,
} from "./styled";
import poster from "../../../images/poster.png";

export const TileMovie = () => (
  <Container>
    <Image src={poster} alt="" />
    <Description>
      <DescriptionTitle>Mulan</DescriptionTitle>
      <Data>2020</Data>
      <Genres>
        <Genre>Action</Genre>
        <Genre>Adwenture</Genre>
        <Genre>Drama</Genre>
      </Genres>
      <Rating>
        <StyleStarIcon />
        <AverageRating>7,8</AverageRating>
        <NumberOfRating>35 votes</NumberOfRating>
      </Rating>
    </Description>
  </Container>
);
