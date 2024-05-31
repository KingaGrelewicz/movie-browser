import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
  name: "genres",
  initialState: {
    status: "initial",
    data: [],
    error: null,
  },
  reducers: {
    fetchGenres: (state) => {
      state.status = "loading";
    },
    fetchGenresSuccess: (state, action) => {
      state.status = "success";
      state.data = action.payload;
    },
    fetchGenresError: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
  },
});

export const { fetchGenres, fetchGenresSuccess, fetchGenresError } =
  genresSlice.actions;

export const selectGenresState = (state) => state.genres;

export default genresSlice.reducer;
