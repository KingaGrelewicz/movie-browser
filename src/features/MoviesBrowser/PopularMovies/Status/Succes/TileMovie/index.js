import {
    Container,
    Image,
    Description,
    DescriptionTitle,
    Data,
    Genre,
    Genres,
    Rating,
    NumberOfRating,
    AverageRating,
    StyleStarIcon,
} from "./styled";


export const TileMovie = ({ repositories }) => {
    const movies = Object.values(repositories.results);

    return (
        <>
            {movies.map(({id, original_title, release_date, backdrop_path}) => (

                <Container key={id}>
                    <Image src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="" />
                    <Description>
                        <DescriptionTitle>{original_title}</DescriptionTitle>
                        <Data>{release_date}</Data>
                        <Genres>
                            <Genre>Action</Genre>
                            <Genre>Adwenture</Genre>
                            <Genre>Drama</Genre>
                        </Genres>
                        <Rating>
                            <StyleStarIcon />
                            <AverageRating>7,8</AverageRating>
                            <NumberOfRating>35 votes</NumberOfRating>
                        </Rating>
                    </Description>
                </Container>

            ))}
        </>
    )
};


