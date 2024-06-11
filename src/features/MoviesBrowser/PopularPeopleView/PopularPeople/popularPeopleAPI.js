import axios from "axios";const APIkey = "b024809636d033af8d3a072db3fe8b5d";export const getPopularPeople = async (pageIp) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/person/popular?api_key=${APIkey}&page=${pageIp}`
  );
  return response.data;
};export const searchPeople = async (query, pageNumber) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/person?api_key=${APIkey}&query=${query}&page=${pageNumber}`
  );
  return response.data;
};