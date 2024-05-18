import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import movieDetailsReducer from "../../features/MoviesBrowser/MovieDetails/movieDetailsSlice";
import popularPeopleReducer from "../../features/MoviesBrowser/PopularPeople/popularPeopleSlice";
import movieCreditsReducer from "../../features/MoviesBrowser/MovieDetails/Credits/creditsSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movieDetails: movieDetailsReducer,
    popularPeople: popularPeopleReducer,
    movieCredits: movieCreditsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
