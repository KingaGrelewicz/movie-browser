import { all } from "redux-saga/effects";
import { movieDetailsSaga } from "../../features/MoviesBrowser/MovieDetails/movieDetailsSaga";
import { popularPeopleSaga } from "../../features/MoviesBrowser/PopularPeople/popularPeopleSaga";
import { movieCreditsSaga } from "../../features/MoviesBrowser/MovieDetails/Credits/creditsSaga";

export default function* rootSaga() {
  yield all([movieDetailsSaga(), popularPeopleSaga(), movieCreditsSaga()]);
}
