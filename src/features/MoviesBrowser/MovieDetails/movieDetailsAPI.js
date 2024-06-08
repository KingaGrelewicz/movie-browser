import axios from "axios";

const APIkey = "b024809636d033af8d3a072db3fe8b5d";

export const getMovieDetails = async (movieIp) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieIp}?api_key=${APIkey}`
  );
  return response.data;
};
