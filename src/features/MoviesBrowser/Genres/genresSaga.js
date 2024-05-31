import { call, put, takeLatest } from "redux-saga/effects";
import getGenres from "./genresAPI";
import {fetchGenres, fetchGenresSuccess, fetchGenresError} from "./genresSlice";


export function* fetchGenresHandler() {
  try {
    const genresData = yield call(getGenres);
    yield put(fetchGenresSuccess(genresData));
  } catch (error) {
    yield put(fetchGenresError());
  }
}

export function* genresSaga() {
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
}
