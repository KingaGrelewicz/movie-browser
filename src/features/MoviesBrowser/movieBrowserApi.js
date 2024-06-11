import axios from "axios";export const getRepositories = (pageNumber) =>  axios.request(
  {
  method: "GET",
  url: "https://api.themoviedb.org/3/discover/movie",
  params: {
    include_adult: "false",
    include_video: "false",
    language: "en-US",
    page: pageNumber,
    sort_by: "popularity.desc",
  },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTc3YjU0NDQ2ZTRiMzk0MzM5NTJiNDUxNGRlN2QxNyIsInN1YiI6IjY2MmJmZjliZWRlMWIwMDEyMjFmMjFjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r-7tHg4t5_xqFteesKqPnVr1i7K3mMwHa4LCVf8I7kQ",
  },
}).then((response) => response.data);export const searchMovies = (query, pageNumber) => {
return axios.request({
  method: "GET",
  url: "https://api.themoviedb.org/3/search/movie",
  params: {
    query,
    page: pageNumber,
    language: "en-US",
    include_adult: "false",
  },
  headers: {
    accept: "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTc3YjU0NDQ2ZTRiMzk0MzM5NTJiNDUxNGRlN2QxNyIsInN1YiI6IjY2MmJmZjliZWRlMWIwMDEyMjFmMjFjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r-7tHg4t5_xqFteesKqPnVr1i7K3mMwHa4LCVf8I7kQ",
  },
}).then(response => response.data);
};