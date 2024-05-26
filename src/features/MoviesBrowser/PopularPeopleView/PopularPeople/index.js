import { useSelector } from "react-redux";
import {
  PopularPeopleDefaultPoster,
  PopularPeopleHeader,
  PopularPeopleHeaderWrapper,
  PopularPeopleName,
  PopularPeoplePhoto,
  PopularPeoplePosterIcon,
  PopularPeopleTile,
  PopularPeopleWrapper,
} from "./styled";
import { selectPopularPeopleState } from "./popularPeopleSlice";

const PopularPeople = () => {
  const popularPeople = useSelector(selectPopularPeopleState);

  const peopleArray = popularPeople.data
    ? Object.values(popularPeople.data.results)
    : [];

  return (
    <>
      <PopularPeopleHeaderWrapper>
        <PopularPeopleHeader>POPULAR PEOPLE</PopularPeopleHeader>
      </PopularPeopleHeaderWrapper>
      <PopularPeopleWrapper>
        {peopleArray.map((people) => (
          <PopularPeopleTile key={people.id}>
            {people.profile_path ? (
              <PopularPeoplePhoto
                src={`https://image.tmdb.org/t/p/w185/${people.profile_path}`}
                alt={people.name}
              />
            ) : (
              <PopularPeopleDefaultPoster>
                <PopularPeoplePosterIcon />
              </PopularPeopleDefaultPoster>
            )}
            <PopularPeopleName>{people.name}</PopularPeopleName>
          </PopularPeopleTile>
        ))}
      </PopularPeopleWrapper>
    </>
  );
};

export default PopularPeople;
