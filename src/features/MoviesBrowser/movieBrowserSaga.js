import { takeLatest, put, call } from "redux-saga/effects";
import { fetchRepositories, fetchRepositoriesSuccess, fetchRepositoriesError } from "./movieBrowserSlice";
import { getRepositories } from "./movieBrowserApi";

function* fetchRepositoriesHendler() {

    try {
        const repositories = yield call(getRepositories);
        yield put(fetchRepositoriesSuccess(repositories));
        yield console.log(repositories);
    } catch (error) {
        yield put(fetchRepositoriesError());
    }
}

export function* movieBrowserSaga() {
    yield takeLatest(fetchRepositories.type, fetchRepositoriesHendler);
}