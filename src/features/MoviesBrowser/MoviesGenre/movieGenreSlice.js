import { createSlice } from "@reduxjs/toolkit";

const movieGenreSlice = createSlice({
    name: "movieGenre",
    initialState: {
        genre: null,
        status: "initial",
    },
    reducers: {
        fetchGenre: (state) => ({
            status: "loading",
            genre: null,
            
        }),
        fetchGenreSuccess: (state, {payload: genre}) => ({
            status: "success",
            genre,
            
        }),
        fetchGenreError: () => ({
            status: "error",
            genre: null,
            
        }),
    },
});

export const {
fetchGenre,
fetchGenreSuccess,
fetchGenreError,
}= movieGenreSlice.actions;

const selectMovieGenreState = state => state.movieGenre;

export const selectGenre = state => selectMovieGenreState(state).genre;
export const selectGenreStatus = state => selectMovieGenreState(state).status;

export default movieGenreSlice.reducer;