import Search from "./Search";
import { Wrapper, List, Item, NavLink, PageTitle } from "./styled";
import { Icon } from "./Icon";

export default () => {
	return (
		<nav>
			<List>
				<Wrapper>
					<PageTitle>
						<Icon />
						Movies Browser
					</PageTitle>
					<Item>
						<NavLink>MOVIES</NavLink>
					</Item>
					<Item>
						<NavLink>PEOPLE</NavLink>
					</Item>
				</Wrapper>
				<Search />
			</List>
		</nav>
	);
};
