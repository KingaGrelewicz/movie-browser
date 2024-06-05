import { Wrapper, Input } from "./styled";
import { useEffect, useState } from 'react';
import { toPeople } from "./../../../core/App/routes";
import { useOnInputChange } from './useOnInputChange';
import { useQueryParameter } from './queryParameter';
import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const query = useQueryParameter("szukaj");
  const onInputChange = useOnInputChange();

  const isSearchFoePeople = location.pathname.startsWith(toPeople());

  return (
    <Wrapper>
      <Input 
        value={query || ""}
        onChange={onInputChange}
        placeholder={`Search for ${isSearchFoePeople ? "people" : "movies"}...`} 
      />
    </Wrapper>
  );
};

export default Search;