import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    status: "initial",
    details: null,
  },
  reducers: {
    fetchMovieDetails: (state) => {
      state.status = "loading";
      state.details = null;
    },
    fetchMovieDetailsSuccess: (state, action) => {
      state.status = "success";
      state.details = action.payload;
    },
    fetchMovieDetailsError: (state) => {
      state.status = "error";
      state.details = null;
    },
  },
});

export const {
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
} = movieDetailsSlice.actions;

export const selectMovieDetailsSlice = (state) => state.movieDetails;
export const getMovieDetailsById = (state, movieId) =>
  selectMovieDetailsSlice(state).find(({id}) => id === movieId);

export default movieDetailsSlice.reducer;
