import { PageStatus } from "../../features";
import Navigation from "../../common/Navigation";
import { HashRouter, Switch, Route, } from "react-router-dom";
import { toPeople } from "./routes";

export const App = () => (
	<HashRouter>
		<Navigation />
		<Switch>
			<Route path="/movies">
				<PageStatus/>
			</Route>
			<Route path={toPeople()}>
			</Route>
		</Switch>
	</HashRouter>
);
