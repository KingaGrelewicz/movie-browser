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
import { Links } from "../../PopularMovies/TileMovie/styled";
import { Paginations } from "../../../Pagination";
import { setPages } from "./popularPeopleSlice";
import { selectPeopleByQuery } from "./popularPeopleSlice";

const PopularPeople = ({pages, query}) => {
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
            <Links to={`/people/${people.id}`}><PopularPeopleName>{people.name}</PopularPeopleName></Links>
            
          </PopularPeopleTile>
        ))}
      </PopularPeopleWrapper>
      <Paginations pages={pages} setPages={setPages}/>
    </>
  );
};

export default PopularPeople;
