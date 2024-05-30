import { PageStatus } from "../../features";
import Navigation from "../../common/Navigation";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { toPeople } from "./routes";
import MovieDetails from "../../features/MoviesBrowser/MovieDetails";
import PopularPeopleView from "../../features/MoviesBrowser/PopularPeopleView";

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
        <PopularPeopleView />
      </Route>
      <Route path="/">
        <Redirect to="/movies" />
      </Route>
    </Switch>
  </HashRouter>
);
