import { Wrapper, Input } from "./styled";
import { useEffect, useState } from 'react';
import { toPeople } from "./../../../core/App/routes";
import { useOnInputChange } from './useOnInputChange';
import { useQueryParameter } from './queryParameter';
import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const query = useQueryParameter("szukaj");

  const [inputValue, setInputValue] = useState(query);
  const onInputChange = useOnInputChange(setInputValue);


  const isSearchForPeople = location.pathname.startsWith(toPeople());

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  return (
    <Wrapper>
      <Input 
        value={inputValue || ""}
        onChange={({ target: { value } }) => onInputChange({ newValue: value, isSearchForPeople })}
        placeholder={`Search for ${isSearchForPeople ? "people" : "movies"}...`} 
      />
    </Wrapper>
  );
};

export default Search;