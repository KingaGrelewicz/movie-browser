import { Wrapper, Input, SearchPic } from "./styled";

const Search = () => {
  return (
    <Wrapper>
      <SearchPic />
      <Input placeholder="Search for movies..." />
    </Wrapper>
  );
};

export default Search;
