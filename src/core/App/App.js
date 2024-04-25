import { Globalstyle } from "./GlobalStyle";
import Container from "../../common/Container/styled";
import { PopularMovies } from "../../features/MoviesBrowser/PopularMovies/Popular";
import Navigation from "../../common/Navigation";

function App() {
  return (
    <>
      <Globalstyle />
      <Navigation />
      <Container>
        <PopularMovies />
      </Container>
    </>
  );
}

export default App;
