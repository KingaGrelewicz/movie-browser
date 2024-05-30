import { useSelector } from "react-redux";
import { selectMovieDetailsState } from "../movieDetailsSlice";
import Rating from "../../Rating";
import {
  BackdropContainer,
  BackdropHeader,
  BackdropImg,
  BackdropTitle,
  BackdropWrapper,
} from "./styled";

const Backdrop = () => {
  const movieDetails = useSelector(selectMovieDetailsState);
  const backdropUrl = `https://image.tmdb.org/t/p/w1280/${movieDetails.details.backdrop_path}`;

  return (
    <BackdropHeader>
      <BackdropContainer>
        <BackdropImg src={backdropUrl} alt="Backdrop Poster" />
        <BackdropWrapper>
          <BackdropTitle>{movieDetails.details.title}</BackdropTitle>
          <Rating variant="backdrop" />
        </BackdropWrapper>
      </BackdropContainer>
    </BackdropHeader>
  );
};

export default Backdrop;
