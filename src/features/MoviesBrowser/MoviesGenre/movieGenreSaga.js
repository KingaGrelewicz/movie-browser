import { fetchGenre,fetchGenreError, fetchGenreSuccess } from "./movieGenreSlice";
import { takeLatest, put, call } from "redux-saga/effects";
import { getGenre } from "../movieBrowserApi";

function* fetchGenreHendler() {

    try {
        const genres = yield call(getGenre);
        yield put(fetchGenreSuccess(genres));
    } catch (error) {
        yield put(fetchGenreError());
    }
}

export function* movieGenreSaga() {
    yield takeLatest(fetchGenre.type, fetchGenreHendler);
}
