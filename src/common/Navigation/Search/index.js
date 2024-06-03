import { useLocation } from 'react-router-dom';
import { Wrapper, Input } from "./styled";
import { useEffect, useState } from 'react';
import { toPeople } from "./../../../core/App/routes";
import { useOnInputChange } from './useOnInputChange';

const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("szukaj") || "";

  const [inputValue, setInputValue] = useState(query);

  const onInputChange = useOnInputChange(setInputValue);
  const isSearchFoePeople = location.pathname.startsWith(toPeople());
  
  useEffect(() => {
    setInputValue(query);
  }, [query]);

  return (
    <Wrapper>
      <Input 
        onChange={({ target: { value } }) => onInputChange({ newValue: value, isSearchFoePeople})}
        value={inputValue}
        placeholder={`Search for ${isSearchFoePeople ? "people" : "movies"}...`} 
      />
    </Wrapper>
  );
};

export default Search;