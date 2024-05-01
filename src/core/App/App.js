import { PopularMovies } from "../../features/MoviesBrowser/PopularMovies/Popular";
import Navigation from "../../common/Navigation";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { toHomePage, toPeople } from "./routes";

export const App = () => (
  <BrowserRouter>
    <Navigation />

    <Switch>
      <Route path={toHomePage()}>
        <PopularMovies/>
      </Route>
      <Route path={toPeople()}>
      </Route>
    </Switch>
  </BrowserRouter>
);