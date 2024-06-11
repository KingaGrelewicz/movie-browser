import axios from "axios";

const getPeopleCredits = async (peopleIp) => {
  const APIkey = "b024809636d033af8d3a072db3fe8b5d";
  const response = await axios.get(
    `https://api.themoviedb.org/3/person/${peopleIp}/combined_credits?api_key=${APIkey}`
  );

  return response.data;
};
export default getPeopleCredits;
