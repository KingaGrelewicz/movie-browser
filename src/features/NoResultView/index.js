import { NoResultHeader, NoResultImg, NoResultWrapper } from "./styled";

export const NoResultView = () => (
  <NoResultWrapper>
    <NoResultHeader>Sorry there are no results for</NoResultHeader>
    <NoResultImg />
  </NoResultWrapper>
);
