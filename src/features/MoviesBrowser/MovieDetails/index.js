import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieDetails,
  selectMovieDetailsState,
} from "./movieDetailsSlice";
import { useEffect } from "react";
import Details from "./Details";
import Backdrop from "./Backdrop";
import {
  fetchMovieCredits,
  selectMovieCreditsState,
} from "./Credits/creditsSlice";
import Credits from "./Credits";

import { useParams } from "react-router-dom";
import { Loading } from "../../LoadingPage";
import Error from "../../ErrorPage";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const movieData = useSelector(selectMovieDetailsState);
  const movieCredits = useSelector(selectMovieCreditsState);
  
  const { cast, crew } = movieCredits.credits || {};

  const movieDetails = movieData.details;
  const params = useParams();
  const movieIp = params.id;

  useEffect(() => {
    dispatch(fetchMovieDetails(movieIp));
    dispatch(fetchMovieCredits(movieIp));
  }, [dispatch]);

  return (
    <>

      {movieData.status && movieCredits.status === "loading" && <Loading />}
      {movieData.status && movieCredits.status === "success" && (
        <>
          <Backdrop movieDetails={movieDetails} />
          <Details movieDetails={movieDetails} />
          <Credits credits={cast} type="Cast" />
          <Credits credits={crew} type="Crew" />
        </>
      )}
      {movieData.status && movieCredits.status === "error" && <Error />}
    </>
  );
};

export default MovieDetails;
