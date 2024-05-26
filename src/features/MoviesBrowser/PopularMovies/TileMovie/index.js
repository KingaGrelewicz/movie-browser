import {
    Container,
    Image,
    Description,
    DescriptionTitle,
    Data,
    Rating,
    NumberOfRating,
    AverageRating,
    StyleStarIcon,
    Links
} from "./styled";
import { GenresList } from "../../MoviesGenre/index.js";

export const TileMovie = ({ repositories }) => {
    const movies = Object.values(repositories.results);
    console.log(movies)

    return (
        <>
            {movies.map(({ id, title, release_date, poster_path, vote_count, vote_average, genre_ids }) => (

                <Container key={id}>
                    <Image src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="" />
                    <Description>
                        <DescriptionTitle><Links to={`/movies/${id}`}>{title}</Links></DescriptionTitle>
                        <Data>{release_date}</Data>
                        <GenresList genre_ids={genre_ids} />
                        <Rating>
                            <StyleStarIcon />
                            <AverageRating>{vote_average.toFixed(1)}</AverageRating>
                            <NumberOfRating>{vote_count} votes</NumberOfRating>
                        </Rating>
                    </Description>
                </Container>

            ))}
        </>
    )
};