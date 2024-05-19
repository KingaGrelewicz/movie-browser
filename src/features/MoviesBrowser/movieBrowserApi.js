import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/discover/movie',
  params: {
    include_adult: 'false',
    include_video: 'false',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTc3YjU0NDQ2ZTRiMzk0MzM5NTJiNDUxNGRlN2QxNyIsInN1YiI6IjY2MmJmZjliZWRlMWIwMDEyMjFmMjFjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r-7tHg4t5_xqFteesKqPnVr1i7K3mMwHa4LCVf8I7kQ'
  }
};

export const getRepositories = () =>
  axios
    .request(options)
    .then(response => response.data)

const Genreoptions = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/genre/movie/list?language=en',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTc3YjU0NDQ2ZTRiMzk0MzM5NTJiNDUxNGRlN2QxNyIsInN1YiI6IjY2MmJmZjliZWRlMWIwMDEyMjFmMjFjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r-7tHg4t5_xqFteesKqPnVr1i7K3mMwHa4LCVf8I7kQ'
  }
};

export const getGenre = () =>
  axios
    .request(Genreoptions)
    .then(response => response.data)