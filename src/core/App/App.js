import { Globalstyle } from "./GlobalStyle";
import Container from "../../common/Container/styled";
import { PopularMovies } from "../../features/MoviesBrowser/PopularMovies/Popular";
import Navigation from "../../common/Navigation";
import MovieDetails from "../../features/MoviesBrowser/MovieDetails";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Globalstyle />
        <Navigation />
        <Container>
          <PopularMovies />
          <MovieDetails />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
