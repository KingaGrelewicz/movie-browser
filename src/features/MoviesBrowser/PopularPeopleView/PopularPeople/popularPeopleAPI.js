import axios from "axios";

export const getPopularPeople = async (pageIp) => {
  const APIkey = "b024809636d033af8d3a072db3fe8b5d";
  const response = await axios.get(
    `https://api.themoviedb.org/3/person/popular?api_key=${APIkey}&page=${pageIp}`
  );
  
  return response.data;
}
