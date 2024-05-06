import { PopularMovies } from "../../features/MoviesBrowser/PopularMovies/Popular";
import Navigation from "../../common/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { toHomePage, toPeople } from "./routes";

export const App = () => (
	<BrowserRouter>
		<Navigation />

		<Routes>
			<Route path={toHomePage()} element={<PopularMovies />} />
			<Route path={toPeople()}></Route>
		</Routes>
	</BrowserRouter>
);
