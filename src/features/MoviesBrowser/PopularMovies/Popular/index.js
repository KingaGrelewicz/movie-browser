import { TileMovie } from "../TileMovie";
import { Title, Movies } from "./styled";

export const Popular = ({ repositories, query}) => {
	const films = Object.values(repositories.results);
	console.log(films);

	const filteredMovies = films.filter(movie =>
        movie.title.includes(query)
    );
        
	return (
			<>
				<Title>Popular movies</Title>
				<Movies>
				{filteredMovies.map((movie) => (
                    <TileMovie key={movie.id} repositories={movie} />
                ))}
				</Movies>
			</>
	);
};