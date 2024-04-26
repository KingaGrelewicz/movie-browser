import { useSelector } from "react-redux";
import { selectMovieDetailsSlice } from "../movieDetailsSlice";
import Rating from "../Rating";
import { BackdropHeader, BackdropImg, BackdropWrapper } from "./styled";

const BackdropView = () => {
  const movieDetails = useSelector(selectMovieDetailsSlice);
  const backdropUrl = `https://image.tmdb.org/t/p/w1280/${movieDetails.details.backdrop_path}`;

  return (
    <>
      <BackdropWrapper>
        <BackdropImg src={backdropUrl} alt="Backdrop Poster" />
        <BackdropHeader>{movieDetails.details.title}</BackdropHeader>
        <Rating color={({ theme }) => theme.color.white} />
      </BackdropWrapper>
    </>
  );
};

export default BackdropView;
