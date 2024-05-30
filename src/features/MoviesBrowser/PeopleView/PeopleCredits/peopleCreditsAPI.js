import axios from "axios";

const getPeopleCredits = async () => {
  const APIkey = "b024809636d033af8d3a072db3fe8b5d";
  const response = await axios.get(
    `https://api.themoviedb.org/3/person/976/combined_credits?api_key=${APIkey}`
  );
  console.log("getPeopleCredits", response.data);
  return response.data;
};
export default getPeopleCredits;
