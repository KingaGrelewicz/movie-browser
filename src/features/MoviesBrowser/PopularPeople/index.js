import { useDispatch, useSelector } from "react-redux";
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
import { fetchPeople, selectPopularPeopleState } from "./popularPeopleSlice";
import { useEffect } from "react";

const PopularPeople = () => {
  const dispatch = useDispatch();
  const popularPeople = useSelector(selectPopularPeopleState);

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

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
