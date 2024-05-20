import { all } from "redux-saga/effects";
import { movieDetailsSaga } from "../../features/MoviesBrowser/MovieDetails/movieDetailsSaga";
import { popularPeopleSaga } from "../../features/MoviesBrowser/PopularPeople/popularPeopleSaga";
import { movieCreditsSaga } from "../../features/MoviesBrowser/MovieDetails/Credits/creditsSaga";
import { movieBrowserSaga } from "../../features/MoviesBrowser/movieBrowserSaga";
import { movieGenreSaga } from "../../features/MoviesBrowser/MoviesGenre/movieGenreSaga";
import { peopleDetailsSaga } from "../../features/MoviesBrowser/PeopleDetails/peopleDetailsSaga";

export default function* rootSaga() {
  yield all([
    movieDetailsSaga(),
    movieBrowserSaga(),
    movieGenreSaga(),
    popularPeopleSaga(),
    movieCreditsSaga(),
    peopleDetailsSaga(),
  ]);
}
