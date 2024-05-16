import { all } from "redux-saga/effects";
import { movieDetailsSaga } from "../../features/MoviesBrowser/MovieDetails/movieDetailsSaga";
import { movieBrowserSaga } from "../../features/MoviesBrowser/movieBrowserSaga";
import { movieGenreSaga } from "../../features/MoviesBrowser/MoviesGenre/movieGenreSaga";

export default function* rootSaga() {
  yield all([
    movieDetailsSaga(),
    movieBrowserSaga(),
    movieGenreSaga(),

  ]);
}
