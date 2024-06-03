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

const Credits = ({ credits, type }) => {
  return (
    <CreditsContainer>
      {type && <CreditsHeader>{type}</CreditsHeader>}
      <CreditsWrapper>
        {credits.map((person) => (
          <CreditsTile key={person.id}>
            {person.profile_path ? (
              <CreditsPhoto
                src={`https://image.tmdb.org/t/p/original/${person.profile_path}`}
                alt="Person photo"
              />
            ) : (
              <CreditsDefaultPoster>
                <CreditsPosterIcon />
              </CreditsDefaultPoster>
            )}
            <CreditsContent>
              <CreditsName>{person.name}</CreditsName>
              <CreditsData>{person.character || person.job}</CreditsData>
            </CreditsContent>
          </CreditsTile>
        ))}
      </CreditsWrapper>
    </CreditsContainer>
  );
};

export default Credits;
