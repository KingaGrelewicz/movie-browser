import { useSelector } from "react-redux";
import { TileMovie } from "../TileMovie";
import { Title, Movies } from "./styled";
import { selectMoviesByQuery } from "../../movieBrowserSlice";

export const Popular = ({ query }) => {
	const films = useSelector((state) => selectMoviesByQuery(state, query));

	return (
		<>
			<Title>Popular movies</Title>
			<Movies>
				{Array.isArray(films) &&
					films.map((movie) => {
						return <TileMovie key={movie.id} {...movie} />;
					})}
			</Movies>
		</>
	);
};