import PropTypes from "prop-types";
import { selectGenresState } from "./genresSlice";
import { GenresList, GenresItem } from "./styled";
import { useSelector } from "react-redux";

const Genres = ({ genreIds }) => {
  const genresState = useSelector(selectGenresState);
  const { data: genres } = genresState;

  const genreNames = genreIds
    .map((id) => {
      const genre = genres.find((genre) => genre.id === id);
      return genre && genre.name ? { id: genre.id, name: genre.name } : null;
    })
    .filter((genre) => genre !== null);

  return (
    <GenresList>
      {genreNames.map((genre) => (
        <GenresItem key={genre.id}>{genre.name}</GenresItem>
      ))}
    </GenresList>
  );
};

Genres.propTypes = {
  genreIds: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Genres;
