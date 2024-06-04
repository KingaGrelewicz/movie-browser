import { call, put, takeLatest } from "redux-saga/effects";
import {getCredits} from "./creditsAPI";
import {
  fetchMovieCredits,
  fetchMovieCreditsError,
  fetchMovieCreditsSuccess,
} from "./creditsSlice";

export function* fetchMovieCreditsHandler({payload: movieIp}) {
  try {
    const credits = yield call(getCredits, movieIp);
    yield put(fetchMovieCreditsSuccess(credits));
  } catch (error) {
    yield put(fetchMovieCreditsError());
  }
}

export function* movieCreditsSaga() {
  yield takeLatest(fetchMovieCredits.type, fetchMovieCreditsHandler);
}
