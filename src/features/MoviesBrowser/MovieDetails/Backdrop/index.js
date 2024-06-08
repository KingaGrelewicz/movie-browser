import Rating from "../../Rating";
import {
  BackdropContainer,
  BackdropHeader,
  BackdropImg,
  BackdropTitle,
  BackdropVignette,
  BackdropWrapper,
} from "./styled";

const Backdrop = ({ movieDetails }) => {
  const backdropUrl = `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`;

  return (
    <BackdropHeader>
      <BackdropContainer>
        <BackdropVignette>
          <BackdropImg src={backdropUrl} alt="Backdrop Poster" />
        </BackdropVignette>
        <BackdropWrapper>
          <BackdropTitle>{movieDetails?.title}</BackdropTitle>
          <Rating variant="backdrop" ratingData={movieDetails} />
        </BackdropWrapper>
      </BackdropContainer>
    </BackdropHeader>
  );
};

export default Backdrop;
