import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchPeopleDetails,
  fetchPeopleDetailsError,
  fetchPeopleDetailsSuccess,
} from "./peopleDetailsSlice";
import { getPeopleDetails } from "../PeopleDetails/peopleDetailsAPI";

export function* fetchPeopleDetailsHandler({payload: peopleIp}) {
  try {
    const details = yield call(getPeopleDetails, peopleIp);
    yield put(fetchPeopleDetailsSuccess(details));
  } catch (error) {
    yield put(fetchPeopleDetailsError());
  }
}

export function* peopleDetailsSaga() {
  yield takeLatest(fetchPeopleDetails.type, fetchPeopleDetailsHandler);
}
