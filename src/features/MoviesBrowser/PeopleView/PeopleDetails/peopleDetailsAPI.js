import axios from "axios";

const API_KEY = "b024809636d033af8d3a072db3fe8b5d";


export const getPeopleDetails = async peopleIp => {
  const response = await axios.request({
    method: "GET",
    url: `https://api.themoviedb.org/3/person/${peopleIp}`,
    params: { language: "en-US", api_key: API_KEY },
    headers: {
      accept: "application/json",
    },
  });
  return response.data;
};

