import { NoResultHeader, NoResultImg, NoResultWrapper } from "./styled";


export const NoResultView = ({ query }) => (
  <NoResultWrapper>
    <NoResultHeader>Sorry there are no results for "{query}"</NoResultHeader>
    <NoResultImg />
  </NoResultWrapper>
);