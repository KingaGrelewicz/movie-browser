import { Globalstyle } from "./GlobalStyle";
import Container from "../../common/Container/styled";
import { PopularMovies } from "../../features/MoviesBrowser/PopularMovies/Popular";

function App() {
  return (
    <Container>
      <Globalstyle />
      <PopularMovies/>
    </Container>
  );
}

export default App;
