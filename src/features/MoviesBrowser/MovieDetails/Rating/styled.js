import styled from "styled-components";

export const RatingWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-gap: 5px;
  align-items: end;
  padding: 0;
`;

export const RatingImage = styled.img`
  width: 24px;
  height: 22px;
  padding: 3px;
`;

export const RatingAverage = styled.span`
  font-size: 22px;
`;

export const RatingPoints = styled.span`
  font-size: 14px;
`;

export const RatingVotesCount = styled.span`
  font-size: 14px;
`;
