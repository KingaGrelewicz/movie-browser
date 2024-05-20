import { createSlice } from "@reduxjs/toolkit";

export const peopleDetailsSlice = createSlice({
  name: "peopleDetails",
  initialState: {
    status: "initial",
    details: null,
  },
  reducers: {
    fetchPeopleDetails: (state) => {
      state.status = "loading";
    },
    fetchPeopleDetailsSuccess: (state, action) => {
      state.status = "success";
      state.details = action.payload;
    },
    fetchPeopleDetailsError: (state) => {
      state.status = "error";
      state.details = null;
    },
  },
});

export const {
  fetchPeopleDetails,
  fetchPeopleDetailsSuccess,
  fetchPeopleDetailsError,
} = peopleDetailsSlice.actions;

export const selectPeopleDetailsState = (state) => state.peopleDetails;

export default peopleDetailsSlice.reducer;
