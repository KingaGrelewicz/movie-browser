import { useSelector } from "react-redux";
import {
  CastCharacter,
  CastHeader,
  CastName,
  CastPhoto,
  CastTile,
} from "./styled";
import { selectMovieCreditsSlice } from "./creditsSlice";

const Cast = () => {
  const movieCredits = useSelector(selectMovieCreditsSlice);

  return (
    <>
      <CastHeader>Cast</CastHeader>
      <CastTile>
        <CastPhoto />
        <CastName></CastName>
        <CastCharacter></CastCharacter>
      </CastTile>
    </>
  );
};

export default Cast;
