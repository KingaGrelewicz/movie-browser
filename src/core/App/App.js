import { PageStatus } from "../../features";
import Navigation from "../../common/Navigation";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { toPeople } from "./routes";
import PopularPeople from "../../features/MoviesBrowser/PopularPeople";
import MovieDetails from "../../features/MoviesBrowser/MovieDetails";

export const App = () => (
	<HashRouter>
		<Navigation />
		<Switch>
			<Route path="/movies/:id">
				<MovieDetails />
			</Route>
			<Route path="/movies">
				<PageStatus />
			</Route>
			<Route path={toPeople()}>
				<PopularPeople />
			</Route>
			<Route path="/">
				<Redirect to="/movies" />
			</Route>
		</Switch>
	</HashRouter>
);
