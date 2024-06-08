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
import { selectPeopleByQuery } from "./popularPeopleSlice";

const PopularPeople = ({ query }) => {
  const popularPeople = useSelector((state) => selectPeopleByQuery(state, query));

  return (
    <>
      <PopularPeopleHeaderWrapper>
        <PopularPeopleHeader>POPULAR PEOPLE</PopularPeopleHeader>
      </PopularPeopleHeaderWrapper>
      <PopularPeopleWrapper>
        {popularPeople.map((people) => (
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
