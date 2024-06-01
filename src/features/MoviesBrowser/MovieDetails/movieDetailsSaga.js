import { call, put, takeLatest, delay } from "redux-saga/effects";
import {getMovieDetails} from "./movieDetailsAPI";
import {
  fetchMovieDetails,
  fetchMovieDetailsError,
  fetchMovieDetailsSuccess,
} from "./movieDetailsSlice";

export function* fetchMovieDetailsHandler({payload: movieIp}) {
  try {
    const details = yield call(getMovieDetails, movieIp);
    yield put(fetchMovieDetailsSuccess(details));
  } catch (error) {
    yield put(fetchMovieDetailsError());
  }
}

export function* movieDetailsSaga() {
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
}
