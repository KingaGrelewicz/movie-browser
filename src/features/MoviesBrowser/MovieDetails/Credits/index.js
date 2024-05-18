import {
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
    <>
      {type && <CreditsHeader>{type}</CreditsHeader>}
      <CreditsWrapper>
        {credits.map((person) => (
          <CreditsTile key={person.id}>
            {person.profile_path ? (
              <CreditsPhoto
                src={`https://image.tmdb.org/t/p/w185/${person.profile_path}`}
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
    </>
  );
};

export default Credits;
