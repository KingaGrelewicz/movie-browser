import { useDispatch, useSelector } from "react-redux";
import {
  PeopleCreditsContent,
  PeopleCreditsData,
  PeopleCreditsDefaultPoster,
  PeopleCreditsHeader,
  PeopleCreditsMovieTitle,
  PeopleCreditsPoster,
  PeopleCreditsPosterIcon,
  PeopleCreditsProductionYear,
  PeopleCreditsTile,
  PeopleCreditsWrapper,
} from "./styled";
import { selectPeopleCreditsState } from "./peopleCreditsSlice";
import Rating from "../../Rating";
import Genres from "../../Genres";
import { fetchGenres } from "../../Genres/genresSlice";
import { useEffect } from "react";

const PeopleCredits = ({ type }) => {
  const dispatch = useDispatch();
  const { creditsData } = useSelector(selectPeopleCreditsState);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  const renderCredits = (credits) => {
   
    return credits.map((person) => (
      <PeopleCreditsTile key={person.id || person.credit_id}>
        {person.poster_path ? (
          <PeopleCreditsPoster
            src={`https://image.tmdb.org/t/p/w185/${person.poster_path}`}
            alt="Person photo"
          />
        ) : (
          <PeopleCreditsDefaultPoster>
            <PeopleCreditsPosterIcon />
          </PeopleCreditsDefaultPoster>
        )}
        <PeopleCreditsContent>
          <PeopleCreditsMovieTitle>
            {person.original_title}
          </PeopleCreditsMovieTitle>
          <PeopleCreditsData>
            {person.character || person.job}
          </PeopleCreditsData>
          <PeopleCreditsProductionYear>
            {person.release_date
              ? `(${new Date(person.release_date).getFullYear()})`
              : ""}
          </PeopleCreditsProductionYear>
          <Genres genreIds={person.genre_ids} />
          <Rating variant="movie" ratingData={person} />
        </PeopleCreditsContent>
      </PeopleCreditsTile>
    ));
  };

  return (
    <>
      {type && (
        <PeopleCreditsHeader>
          {type === "Cast" ? "Movie - Cast" : "Movie - Crew"}
        </PeopleCreditsHeader>
      )}
      <PeopleCreditsWrapper>
        {creditsData &&
          creditsData.cast &&
          type === "Cast" &&
          renderCredits(creditsData.cast)}
        {creditsData &&
          creditsData.crew &&
          type === "Crew" &&
          renderCredits(creditsData.crew)}
      </PeopleCreditsWrapper>
    </>
  );
};

export default PeopleCredits;
