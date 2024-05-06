import { createSlice } from "@reduxjs/toolkit";

const movieCreditsSlice = createSlice({
  name: "movieCredits",
  initialState: {
    status: "initial",
    credits: null,
  },
  reducers: {
    fetchMovieCredits: (state) => {
      state.status = "loading";
      state.credits = null;
    },
    fetchMovieCreditsSuccess: (state, action) => {
      state.status = "success";
      state.credits = action.payload;
    },
    fetchMovieCreditsError: (state) => {
      state.status = "error";
      state.credits = null;
    },
  },
});

export const {
  fetchMovieCredits,
  fetchMovieCreditsSuccess,
  fetchMovieCreditsError,
} = movieCreditsSlice.actions;

export const selectMovieCreditsSlice = (state) => state.movieCredits;

export default movieCreditsSlice.reducer;