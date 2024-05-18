import { createSlice } from "@reduxjs/toolkit";

const popularPeopleSlice = createSlice({
  name: "popularPeople",
  initialState: {
    status: "initial",
    data: null,
  },
  reducers: {
    fetchPeople: (state) => {
      state.status = "loading";
    },
    fetchPeopleSuccess: (state, action) => {
      state.status = "success";
      state.data = action.payload;
    },
    fetchPeopleError: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
  },
});

export const { fetchPeople, fetchPeopleSuccess, fetchPeopleError } =
  popularPeopleSlice.actions;

export const selectPopularPeopleState = (state) => state.popularPeople;

export default popularPeopleSlice.reducer;
