import Rating from "../../Rating";
import {
  BackdropContainer,
  BackdropHeader,
  BackdropImg,
  BackdropTitle,
  BackdropWrapper,
} from "./styled";

const Backdrop = ({ movieDetails }) => {
  const backdropUrl = `https://image.tmdb.org/t/p/w1280/${movieDetails.backdrop_path}`;

  return (
    <BackdropHeader>
      <BackdropContainer>
        <BackdropImg src={backdropUrl} alt="Backdrop Poster" />
        <BackdropWrapper>
          <BackdropTitle>{movieDetails.title}</BackdropTitle>
          <Rating variant="backdrop" ratingData={movieDetails} />
        </BackdropWrapper>
      </BackdropContainer>
    </BackdropHeader>
  );
};

export default Backdrop;
