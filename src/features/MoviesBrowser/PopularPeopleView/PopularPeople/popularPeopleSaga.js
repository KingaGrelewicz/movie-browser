import { call, put, takeLatest } from "redux-saga/effects";
import {getPopularPeople} from "./popularPeopleAPI";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSuccess,
} from "./popularPeopleSlice";

export function* fetchPopularPeopleHandler({payload: pageIp}) {
  try {
    const people = yield call(getPopularPeople, pageIp);
    yield put(fetchPeopleSuccess(people));
  } catch (error) {
    yield put(fetchPeopleError());
  }
}

export function* popularPeopleSaga() {
  yield takeLatest(fetchPeople.type, fetchPopularPeopleHandler);
}