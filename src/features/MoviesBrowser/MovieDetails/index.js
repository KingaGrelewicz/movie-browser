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
import { MovieDetailsWrapper } from "./styled";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const movieDetails = useSelector(selectMovieDetailsState);
  const movieCredits = useSelector(selectMovieCreditsState);
  const { cast, crew } = movieCredits.data || {};

  useEffect(() => {
    dispatch(fetchMovieDetails());
    dispatch(fetchMovieCredits());
  }, [dispatch]);

  return (
    <>
      {movieDetails.status && movieCredits.status === "loading" && (
        <p>Loading...</p>
      )}
      {movieDetails.status && movieCredits.status === "success" && (
        <MovieDetailsWrapper>
          <Backdrop />
          <Details />
          <Credits credits={cast} type="Cast" />
          <Credits credits={crew} type="Crew" />
        </MovieDetailsWrapper>
      )}
      {movieDetails.status && movieCredits.status === "error" && (
        <p>Error fetching data</p>
      )}
    </>
  );
};

export default MovieDetails;
