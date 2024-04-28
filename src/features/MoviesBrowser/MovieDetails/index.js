import { useDispatch, useSelector } from "react-redux";

import {
  fetchMovieDetails,
  selectMovieDetailsSlice,
} from "./movieDetailsSlice";
import { useEffect } from "react";
import Details from "./Details";
import BackdropView from "./BackdropView";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const movieDetails = useSelector(selectMovieDetailsSlice);

  useEffect(() => {
    dispatch(fetchMovieDetails());
  }, [dispatch]);

  return (
    <div>
      {movieDetails.status === "loading" && <p>Loading...</p>}
      {movieDetails.status === "success" && (
        <>
          <BackdropView />
          <Details />
        </>
      )}
      {movieDetails.status === "error" && <p>Error fetching data</p>}
    </div>
  );
};

export default MovieDetails;
