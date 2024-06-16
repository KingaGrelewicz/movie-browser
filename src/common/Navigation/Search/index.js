import { Wrapper, Input, SearchPic } from "./styled";
import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { toPeople } from "./../../../core/App/routes";
import { useOnInputChange } from './useOnInputChange';
import { useQueryParameter } from './queryParameter';
import { useLocation } from "react-router-dom";
import { fetchSearchResults as fetchPeopleSearchResults, fetchPeople} from "./../../../features/MoviesBrowser/PopularPeopleView/PopularPeople/popularPeopleSlice";
import { fetchSearchResults as fetchMovieSearchResults, fetchRepositories} from "./../../../features/MoviesBrowser/movieBrowserSlice";const Search = () => {
  
  const location = useLocation();
  const query = useQueryParameter("query");
  const dispatch = useDispatch();  
  const [inputValue, setInputValue] = useState(query);
  const onInputChange = useOnInputChange(setInputValue);  
  const isSearchForPeople = location.pathname.startsWith(toPeople());  
  useEffect(() => {
    setInputValue(query);
    if (query) {
      if (isSearchForPeople) {
        dispatch(fetchPeopleSearchResults({ query, pageNumber: 1 }));
      } else {
        dispatch(fetchMovieSearchResults({ query, pageNumber: 1 }));
      }
    } else {
      if (isSearchForPeople) {
        dispatch(fetchPeople(1));
      } else {
        dispatch(fetchRepositories(1));
      }
    }
  }, [query, dispatch]);  
  
  return (
    <Wrapper>
      <SearchPic/>
      <Input 
        value={inputValue || ""}
        onChange={({ target: { value } }) => onInputChange({ newValue: value, isSearchForPeople })}
        placeholder={`Search for ${isSearchForPeople ? "people" : "movies"}...`} 
      />
    </Wrapper>
  );
};export default Search;