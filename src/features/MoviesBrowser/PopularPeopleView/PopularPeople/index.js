import { useSelector } from "react-redux";
import {
  PopularPeopleDefaultPoster,
  PopularPeopleName,
  PopularPeoplePhoto,
  PopularPeoplePosterIcon,
  PopularPeopleTile,
  PopularPeopleWrapper,
  PopulerPeopleHeader,
  PopulerPeopleHeaderWrapper,
} from "./styled";
import { selectPopularPeopleState } from "./popularPeopleSlice";

const PopularPeople = () => {
  const popularPeople = useSelector(selectPopularPeopleState);

  const peopleArray = popularPeople.data
    ? Object.values(popularPeople.data.results)
    : [];

  return (
    <>
      <PopulerPeopleHeaderWrapper>
        <PopulerPeopleHeader>POPULAR PEOPLE</PopulerPeopleHeader>
      </PopulerPeopleHeaderWrapper>
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
