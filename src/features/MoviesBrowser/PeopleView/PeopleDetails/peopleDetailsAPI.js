import axios from "axios";

const API_KEY = "b024809636d033af8d3a072db3fe8b5d";

const options = {
  method: "GET",
  url: `https://api.themoviedb.org/3/person/976`,
  params: { language: "en-US", api_key: API_KEY },
  headers: {
    accept: "application/json",
  },
};

export const getPeopleDetails = async () => {
  const response = await axios.request(options);
  return response.data;
};
