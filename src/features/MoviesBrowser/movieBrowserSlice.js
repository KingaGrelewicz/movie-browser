import { createSlice } from "@reduxjs/toolkit";

const movieBrowserSlice = createSlice({
    name: "movieBrowser",
    initialState: {
        repositories: null,
        status: "initial",
        pages: 1,
    },
    reducers: {
        fetchRepositories: (state) => ({
            ...state,
            status: "loading",
            repositories: null,
        }),
        fetchRepositoriesSuccess: (state, {payload: repositories}) => ({
            ...state,
            status: "success",
            repositories,
        }),
        fetchRepositoriesError: () => ({
            status: "error",
            repositories: null,
        }),
        setPages: (state, { payload: pages }) => ({
            ...state,
            pages,
        }),
    },
});

export const {
fetchRepositories,
fetchRepositoriesSuccess,
fetchRepositoriesError,
setPages,
}= movieBrowserSlice.actions;

const selectMovieBrowserState = state => state.movieBrowser;

export const selectRepositories = state => selectMovieBrowserState(state).repositories;
export const selectPages = state => selectMovieBrowserState(state).pages;
export const selectRepositoriesStatus = state => selectMovieBrowserState(state).status;

export default movieBrowserSlice.reducer;