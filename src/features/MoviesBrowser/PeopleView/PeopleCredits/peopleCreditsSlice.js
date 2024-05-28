import { createSlice } from "@reduxjs/toolkit";

const peopleCreditsSlice = createSlice({
  name: "peopleCredits",
  initialState: {
    status: "initial",
    creditsData: null,
  },
  reducers: {
    fetchPeopleCredits: (state) => {
      state.status = "loading";
    },
    fetchPeopleCreditsSuccess: (state, action) => {
      state.status = "success";
      state.creditsData = action.payload;
    },
    fetchPeopleCreditsError: (state) => {
      state.status = "error";
      state.creditsData = null;
    },
  },
});

export const {
  fetchPeopleCredits,
  fetchPeopleCreditsSuccess,
  fetchPeopleCreditsError,
} = peopleCreditsSlice.actions;

export const selectPeopleCreditsState = (state) => state.peopleCredits;

export default peopleCreditsSlice.reducer;
