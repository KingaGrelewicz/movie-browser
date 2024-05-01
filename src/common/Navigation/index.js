import Search from "./Search";
import { Wrapper, List, Item, StyledNavLink, PageTitle } from "./styled";
import { Icon } from "./Icon";
import { toHomePage, toPeople } from "../../core/App/routes";

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
            <StyledNavLink to={toHomePage()}>MOVIES</StyledNavLink>
          </Item>
          <Item>
            <StyledNavLink path={toPeople()}>PEOPLE</StyledNavLink>
          </Item>
        </Wrapper>
        <Search />
      </List>
    </nav>
  );
};

export default Navigation;
