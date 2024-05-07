import {configureStore} from "@reduxjs/toolkit";
import movieBrowserReducer from '../features/MoviesBrowser/movieBrowserSlice';
import createSagaMiddleware from "redux-saga";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movieBrowser: movieBrowserReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(saga);

export default store;