import { all } from "redux-saga/effects";
import { movieBrowserSaga } from "../features/MoviesBrowser/movieBrowserSaga";

export default function* saga() {
    yield all([
        movieBrowserSaga(),
    ]);
}