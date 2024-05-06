import { useSelector } from "react-redux";
import { selectMovieDetailsSlice } from "../movieDetailsSlice";
import Rating from "../Rating";
import {
  BacdropContainer,
  BackdropHeader,
  BackdropImg,
  BackdropTitle,
  BackdropWrapper,
} from "./styled";

const Backdrop = () => {
  const movieDetails = useSelector(selectMovieDetailsSlice);
  const backdropUrl = `https://image.tmdb.org/t/p/w1280/${movieDetails.details.backdrop_path}`;

  return (
    <BackdropHeader>
      <BacdropContainer>
        <BackdropImg src={backdropUrl} alt="Backdrop Poster" />
        <BackdropWrapper>
          <BackdropTitle>{movieDetails.details.title}</BackdropTitle>
          <Rating variant="backdrop" />
        </BackdropWrapper>
      </BacdropContainer>
    </BackdropHeader>
  );
};

export default Backdrop;
