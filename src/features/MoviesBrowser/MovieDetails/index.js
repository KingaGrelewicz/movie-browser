import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieDetails,
  selectMovieDetailsSlice,
} from "./movieDetailsSlice";
import { useEffect } from "react";
import Details from "./Details";
import Backdrop from "./Backdrop";
import Cast from "./Cast";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


const MovieDetails = () => {
  const dispatch = useDispatch();

  const movieDetails = useSelector(selectMovieDetailsSlice);

  const params = useParams();
  const movieId = params.id
console.log(movieDetails)

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId));
  }, [dispatch]);

  return (
    <div>
      {movieDetails.status === "loading" && <p>Loading...</p>}
      {movieDetails.status === "success" && (
        <>
          <Backdrop />
          <Details />
          <Cast />
        </>
      )}
      {movieDetails.status === "error" && <p>Error fetching data</p>}
    </div>
  );
};

export default MovieDetails;
