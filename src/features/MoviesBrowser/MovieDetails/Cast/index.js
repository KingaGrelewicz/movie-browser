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
console.log(movieCredits)
  return (
    <>
      <CastHeader>Cast</CastHeader>
      <CastTile>
        <CastPhoto />
        {/* <CastName>{movieCredits.cast.map((actor) => actor.name)}</CastName> */}
        <CastCharacter></CastCharacter>
      </CastTile>
    </>
  );
};

export default Cast;
