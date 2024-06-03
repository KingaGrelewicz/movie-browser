import axios from "axios";

const APIkey = "b024809636d033af8d3a072db3fe8b5d";

export const getCredits = movieIp => 
axios.get(
    `https://api.themoviedb.org/3/movie/${movieIp}/credits?api_key=${APIkey}`)
    .then(response => response.data);