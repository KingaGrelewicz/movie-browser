import { createSlice } from "@reduxjs/toolkit";

const popularPeopleSlice = createSlice({
  name: "popularPeople",
  initialState: {
    status: "initial",
    data: null,
    pages: 1,
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
      state.data = action.payload;
    },
    setPages: (state, { payload: pages }) => ({
      ...state,
      pages,
  }),
  },
});

export const { fetchPeople, fetchPeopleSuccess, fetchPeopleError, setPages } =
  popularPeopleSlice.actions;

export const selectPopularPeopleState = (state) => state.popularPeople;

export const selectPopularPeopleData = (state) =>selectPopularPeopleState(state).data;
export const selectPages= (state) =>selectPopularPeopleState(state).pages;
export const selectPopularPeopleStatus = (state) =>selectPopularPeopleState(state).status;

export const selectPeopleByQuery = (state, query) => {
  const data = selectPopularPeopleData(state)?.results || [];

  if (!query || query.trim() === "") {
      return data;
  }

  return data.filter(({name}) => 
  name.toUpperCase().includes(query.trim().toUpperCase()));
}

export default popularPeopleSlice.reducer;
