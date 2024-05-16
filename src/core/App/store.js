import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import movieDetailsReducer from "../../features/MoviesBrowser/MovieDetails/movieDetailsSlice";
import movieBrowserReducer from "../../features/MoviesBrowser/movieBrowserSlice";
import movieGenreReducer from "../../features/MoviesBrowser/MoviesGenre/movieGenreSlice"
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movieDetails: movieDetailsReducer,
    movieBrowser: movieBrowserReducer,
    movieGenre: movieGenreReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
