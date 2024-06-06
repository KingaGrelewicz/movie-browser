import { useSelector } from "react-redux";
import { TileMovie } from "../TileMovie";
import { Title, Movies } from "./styled";
import { selectMoviesByQuery } from "../../movieBrowserSlice";

export const Popular = ({ query }) => {
	const repositories = useSelector((state) => selectMoviesByQuery(state, query));

	return (
		<>
			<Title>Popular movies</Title>
			<Movies>
				{Array.isArray(repositories) &&
					repositories?.map(({ movies }) => {
						console.log("Rendering movie:", movies);
						return <TileMovie key={movies.id} {...movies} />;
					})}
			</Movies>
		</>
	);
};
