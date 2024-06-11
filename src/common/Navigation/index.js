import Search from "./Search";
import { Wrapper, List, Item, StyledNavLink, PageTitle, Icon, NavigationBar } from "./styled";
import { toMovies, toPeople } from "../../core/App/routes";
import { Links } from "../../features/MoviesBrowser/PopularMovies/TileMovie/styled";
const Navigation = () => {
  return (
    <NavigationBar>
      <List>
        <Wrapper>
        <Links to={`/movies/`}>
          <PageTitle>
            <Icon />
           
            Movies Browser
            
          </PageTitle>
          </Links>
          <Item>
            <StyledNavLink to={toMovies()}>MOVIES</StyledNavLink>
          </Item>
          <Item>
            <StyledNavLink to={toPeople()}>PEOPLE</StyledNavLink>
          </Item>
        </Wrapper>
        <Search />
      </List>
    </NavigationBar>
  );
};export default Navigation;