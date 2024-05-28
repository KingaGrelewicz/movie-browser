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

const PeopleCredits = ({ type }) => {
  const { creditsData } = useSelector(selectPeopleCreditsState); 
  console.log("PeopleCredits", creditsData);

  const creditsArray = creditsData ? Object.values(creditsData) : [];
  return (
    <>
      {type && <PeopleCreditsHeader>{type}</PeopleCreditsHeader>}
      <PeopleCreditsWrapper>
        {creditsArray.map((person) => (
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
                {new Date(person.release_date).getFullYear()}
              </PeopleCreditsProductionYear>
            </PeopleCreditsContent>
          </PeopleCreditsTile>
        ))}
      </PeopleCreditsWrapper>
    </>
  );
};

export default PeopleCredits;
