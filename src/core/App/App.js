import { PageStatus } from "../../features/MoviesBrowser/PageStatus";
import Navigation from "../../common/Navigation";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { toPeople } from "./routes";
import MovieDetails from "../../features/MoviesBrowser/MovieDetails";
import PopularPeopleView from "../../features/MoviesBrowser/PopularPeopleView";
import PeopleView from "../../features/MoviesBrowser/PeopleView";

export const App = () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path="/people/:id">
        <PeopleView />
      </Route>
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
