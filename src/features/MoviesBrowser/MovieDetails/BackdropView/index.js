import { useSelector } from "react-redux";
import { selectMovieDetailsSlice } from "../movieDetailsSlice";
import Rating from "../Rating";
import {
  BackdropHeader,
  BackdropImg,
  BackdropTitle,
  BackdropWrapper,
} from "./styled";

const BackdropView = () => {
  const movieDetails = useSelector(selectMovieDetailsSlice);
  const backdropUrl = `https://image.tmdb.org/t/p/w1280/${movieDetails.details.backdrop_path}`;

  return (
    <BackdropHeader>
      <BackdropWrapper>
        <BackdropImg src={backdropUrl} alt="Backdrop Poster" />
        <BackdropTitle>{movieDetails.details.title}</BackdropTitle>
        <Rating color={({ theme }) => theme.color.white} />
      </BackdropWrapper>
    </BackdropHeader>
  );
};

export default BackdropView;
