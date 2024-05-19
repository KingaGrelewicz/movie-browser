import { PageStatus } from "../../features";
import Navigation from "../../common/Navigation";
import { HashRouter, Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { toPeople } from "./routes";
import MovieDetails from "../../features/MoviesBrowser/MovieDetails";

export const App = () => (
	<BrowserRouter>
		<Navigation />
		<Switch>
		<Route path="/movies/:id">
				<MovieDetails />
			</Route>
			<Route path="/movies">
				<PageStatus />
			</Route>
			<Route path="/people">
			</Route>
			<Route path="/">
				<Redirect to="/movies"/>
			</Route>
		</Switch>
	</BrowserRouter>
);
