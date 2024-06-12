import { useSelector } from "react-redux";
import {
	PopularPeopleDefaultPoster,
	PopularPeopleHeader,
	PopularPeopleHeaderWrapper,
	PopularPeopleName,
	PopularPeoplePhoto,
	PopularPeoplePosterIcon,
	PopularPeopleTile,
	PopularPeopleWrapper,
} from "./styled";
import { selectPeopleByQuery } from "./popularPeopleSlice";
import { Links } from "../../PopularMovies/TileMovie/styled";
import { Paginations } from "../../../Pagination";
import { setPages } from "./popularPeopleSlice";
import { NoResultView } from "../../../NoResultView";

const PopularPeople = ({ pages, query }) => {
  const popularPeople = useSelector((state) =>
    selectPeopleByQuery(state, query)
  );
  const numberOfPeople = popularPeople.length;

  const title = query
    ? `Searches for "${query}" (${numberOfPeople} people)`
    : "Popular People";

	return (
		<>
			{popularPeople.length > 0 ? (
				<>
					<PopularPeopleHeaderWrapper>
						<PopularPeopleHeader>{title}</PopularPeopleHeader>
					</PopularPeopleHeaderWrapper>
					<PopularPeopleWrapper>
						{popularPeople.map((people) => (
							<PopularPeopleTile key={people.id}>
								{people.profile_path ? (
									<Links to={`/people/${people.id}`}>
										<PopularPeoplePhoto src={`https://image.tmdb.org/t/p/w185/${people.profile_path}`} alt={people.name} />
									</Links>
								) : (
									<PopularPeopleDefaultPoster>
										<PopularPeoplePosterIcon />
									</PopularPeopleDefaultPoster>
								)}

								<PopularPeopleName><Links to={`/people/${people.id}`}>{people.name}</Links></PopularPeopleName>

							</PopularPeopleTile>
						))}
					</PopularPeopleWrapper>
					<Paginations pages={pages} setPages={setPages} />
				</>
			) : (
				<NoResultView query={query} />
			)}
		</>
	);
};

export default PopularPeople;
