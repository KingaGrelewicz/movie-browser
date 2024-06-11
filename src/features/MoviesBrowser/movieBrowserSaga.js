import { takeLatest, put, call } from "redux-saga/effects";
import { 
  fetchRepositories, fetchRepositoriesSuccess, fetchRepositoriesError,
  fetchSearchResults, fetchSearchResultsSuccess, fetchSearchResultsError 
} from "./movieBrowserSlice";
import { getRepositories, searchMovies } from "./movieBrowserApi";function* fetchRepositoriesHandler({ payload: pageNumber }) {
    try {
        const repositories = yield call(getRepositories, pageNumber);
        yield put(fetchRepositoriesSuccess(repositories));
    } catch (error) {
        yield put(fetchRepositoriesError());
    }
}function* fetchSearchResultsHandler({ payload: { query, pageNumber } }) {
    try {
        const repositories = yield call(searchMovies, query, pageNumber);
        yield put(fetchSearchResultsSuccess(repositories));
    } catch (error) {
        yield put(fetchSearchResultsError());
    }
}export function* movieBrowserSaga() {
    yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
    yield takeLatest(fetchSearchResults.type, fetchSearchResultsHandler);
}