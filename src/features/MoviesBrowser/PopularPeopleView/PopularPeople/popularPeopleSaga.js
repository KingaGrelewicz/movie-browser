import { call, put, takeLatest } from "redux-saga/effects";
import { getPopularPeople, searchPeople } from "./popularPeopleAPI";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSuccess,
  fetchSearchResults,
  fetchSearchResultsSuccess,
  fetchSearchResultsError,
} from "./popularPeopleSlice";export function* fetchPopularPeopleHandler({ payload: pageIp }) {
  try {
    const people = yield call(getPopularPeople, pageIp);
    yield put(fetchPeopleSuccess(people));
  } catch (error) {
    yield put(fetchPeopleError());
  }
}export function* fetchSearchResultsHandler({ payload: { query, pageNumber } }) {
  try {
    const people = yield call(searchPeople, query, pageNumber);
    yield put(fetchSearchResultsSuccess(people));
  } catch (error) {
    yield put(fetchSearchResultsError());
  }
}export function* popularPeopleSaga() {
  yield takeLatest(fetchPeople.type, fetchPopularPeopleHandler);
  yield takeLatest(fetchSearchResults.type, fetchSearchResultsHandler);
}