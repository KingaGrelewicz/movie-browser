import { useDispatch, useSelector } from "react-redux";
import {fetchMovieDetails,selectMovieDetailsState,} from "./movieDetailsSlice";
import { useEffect } from "react";
import Details from "./Details";
import Backdrop from "./Backdrop";
import {fetchMovieCredits,selectMovieCreditsState,} from "./Credits/creditsSlice";
import Credits from "./Credits";
import { MovieDetailsWrapper } from "./styled";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Loading } from "../../LoadingPage";
const MovieDetails = () => {
  const dispatch = useDispatch();
  const movieData = useSelector(selectMovieDetailsState);
  const movieCredits = useSelector(selectMovieCreditsState);
  console.log(movieCredits.credits)
  const { cast, crew } = movieCredits.credits || {};

  const movieDetails = movieData.details;
  const params = useParams();
  const movieIp = params.id

  useEffect(() => {
    dispatch(fetchMovieDetails(movieIp));
    dispatch(fetchMovieCredits(movieIp));
  }, [dispatch]);

  return (
    <>
      {movieData.status && movieCredits.status === "loading" && (
        <p><Loading/></p>
      )}
      {movieData.status && movieCredits.status === "success" && (
        <MovieDetailsWrapper>
          <Backdrop movieDetails={movieDetails}/>
          <Details movieDetails={movieDetails}/>
          <Credits credits={cast} type="Cast" />
          <Credits credits={crew} type="Crew" />
        </MovieDetailsWrapper>
      )}
      {movieData.status && movieCredits.status === "error" && (
        <p>Error fetching data</p>
      )}
    </>
  );
};

export default MovieDetails;
