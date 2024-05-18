import axios from "axios";

async function getMovieDetails() {
  const APIkey = "b024809636d033af8d3a072db3fe8b5d";
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/693134?api_key=${APIkey}`
  );

  return response.data;
}

export default getMovieDetails;
