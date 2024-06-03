import { TileMovie } from "../TileMovie";
import { Title, Movies } from "./styled";

export const Popular = ({ repositories, inputValue}) => {
	const films = Object.values(repositories.results);
	console.log(films);

	const filteredMovies = films.filter(movie =>
        movie.title.includes(inputValue)
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