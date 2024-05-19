import { Genres, Genre } from "./styled";

export const GenresList = ({ genre_ids }) => {

    const apiGenre = genre_ids;

    const genreMovieList = {

        28: 'Action',
        12: 'Adventure',
        16: 'Animation',
        35: 'Comedy',
        80: 'Crime',
        99: 'Documentary',
        18: 'Drama',
        10751: 'Family',
        14: 'Fantasy',
        36: 'History',
        27: 'Horror',
        10402: 'Music',
        9648: 'Mystery',
        10749: 'Romance',
        878: 'Science Fiction',
        10770: 'TV Movie',
        53: 'Thriller',
        10752: 'War',
        37: 'Western',
    };

    const apiString = id => {
        if (id in genreMovieList) {
            return genreMovieList[id];
        } else {
            return "Błąd";
        }
    }
    return (
        <Genres>
        {
            apiGenre.map(genreList => (
                <Genre key= { genreList } > { apiString(genreList) } </Genre>
            ))
        }
        </Genres>
    )
}






