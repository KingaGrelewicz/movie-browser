import Search from "./Search";
import { Wrapper, List, Item, StyledNavLink, PageTitle, Icon } from "./styled";
import { toMovies, toPeople } from "../../core/App/routes";

const Navigation = () => {
  return (
    <nav>
      <List>
        <Wrapper>
          <PageTitle>
            <Icon />
            Movies Browser
          </PageTitle>
          <Item>
            <StyledNavLink to={toMovies()}>MOVIES</StyledNavLink>
          </Item>
          <Item>
            <StyledNavLink to={toPeople()}>PEOPLE</StyledNavLink>
          </Item>
        </Wrapper>
        <Search />
      </List>
    </nav>
  );
};

export default Navigation;
