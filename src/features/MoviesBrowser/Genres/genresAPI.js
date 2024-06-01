import axios from "axios";

export const getGenres = async () => {
  const APIkey = "b024809636d033af8d3a072db3fe8b5d";
  const response = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIkey}`
  );
  console.log("getGenres", response);
  return response.data.genres;
};

export default getGenres;
