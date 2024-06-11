import {
  CreditsContainer,
  CreditsContent,
  CreditsData,
  CreditsDefaultPoster,
  CreditsHeader,
  CreditsName,
  CreditsPhoto,
  CreditsPosterIcon,
  CreditsTile,
  CreditsWrapper,
} from "./styled";
import { Links } from "../../PopularMovies/TileMovie/styled";

const Credits = ({ credits, type }) => {
  return (
    
    <CreditsContainer >
      {type && <CreditsHeader>{type}</CreditsHeader>}
      <CreditsWrapper>
        {credits.map((person) => (
          <CreditsTile key={person.id}>
            {person.profile_path ? (
              <Links to={`/people/${person.id}`}>
              <CreditsPhoto
                src={`https://image.tmdb.org/t/p/original/${person.profile_path}`}
                alt="Person photo"
              />
              </Links>
            ) : (
              <CreditsDefaultPoster>
                <CreditsPosterIcon />
              </CreditsDefaultPoster>
            )}
            <CreditsContent>
              <CreditsName><Links to={`/people/${person.id}`}>{person.name}</Links></CreditsName>
              <CreditsData>{person.character || person.job}</CreditsData>
            </CreditsContent>
          </CreditsTile>
        ))}
      </CreditsWrapper>
    </CreditsContainer>
  );
};

export default Credits;
