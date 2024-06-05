import { useSelector } from "react-redux";
import { TileMovie } from "../TileMovie";
import { Title, Movies } from "./styled";
import { selectMoviesByQuery } from "../../movieBrowserSlice";

export const Popular = ({ query }) => {
	const repositories = useSelector((state) => selectMoviesByQuery(state, query));

	const films = Object.values(repositories.results);

        
	return (
			<>
			{films.map(({repositories}) => (
				<>
				<Title>Popular movies</Title>
				<Movies>
                    <TileMovie repositories={repositories} />
				</Movies>
				</>
			))}
			</>
	);
};