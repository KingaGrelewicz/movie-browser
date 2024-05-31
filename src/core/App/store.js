import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import movieDetailsReducer from "../../features/MoviesBrowser/MovieDetails/movieDetailsSlice";
import popularPeopleReducer from "../../features/MoviesBrowser/PopularPeopleView/PopularPeople/popularPeopleSlice";
import movieCreditsReducer from "../../features/MoviesBrowser/MovieDetails/Credits/creditsSlice";
import movieBrowserReducer from "../../features/MoviesBrowser/movieBrowserSlice";
import movieGenreReducer from "../../features/MoviesBrowser/MoviesGenre/movieGenreSlice";
import peopleDetailsReducer from "../../features/MoviesBrowser/PeopleView/PeopleDetails/peopleDetailsSlice";
import peopleCreditsReducer from "../../features/MoviesBrowser/PeopleView/PeopleCredits/peopleCreditsSlice";
import genresSlice from "../../features/MoviesBrowser/Genres/genresSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movieDetails: movieDetailsReducer,
    movieBrowser: movieBrowserReducer,
    movieGenre: movieGenreReducer,
    popularPeople: popularPeopleReducer,
    movieCredits: movieCreditsReducer,
    peopleDetails: peopleDetailsReducer,
    peopleCredits: peopleCreditsReducer,
    genres: genresSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
