import { useSelector } from "react-redux";
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

const PeopleCredits = ({ type }) => {
  const { creditsData } = useSelector(selectPeopleCreditsState);

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
        </PeopleCreditsContent>
        <Rating variant="peopleCredits" ratingData={person} />
      </PeopleCreditsTile>
    ));
  };

  return (
    <>
      {type && <PeopleCreditsHeader>{type}</PeopleCreditsHeader>}
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
