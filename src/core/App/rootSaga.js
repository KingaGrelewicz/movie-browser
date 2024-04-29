import { all } from "redux-saga/effects";
import { movieDetailsSaga } from "../../features/MoviesBrowser/MovieDetails/movieDetailsSaga";

export default function* rootSaga() {
  yield all([movieDetailsSaga()]);
}
