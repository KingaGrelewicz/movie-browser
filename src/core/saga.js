import { all } from "redux-saga/effects";
import { movieBrowserSaga } from "../features/MoviesBrowser/movieBrowserSaga";
import { movieGenreSaga } from "../features/MoviesBrowser/PopularMovies/movieGenreSaga";

export default function* saga() {
    yield all([
        movieBrowserSaga(),
        movieGenreSaga(),
    ]);
}