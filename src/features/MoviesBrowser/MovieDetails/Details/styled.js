import styled from "styled-components";

export const DetailsWrapper = styled.div`
  max-width: 1920px;
  margin: 64px auto;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 40px;
  background: ${({ theme }) => theme.color.white};
  padding: 40px;
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.color.grey};
`;

export const DetailsPoster = styled.img`
  border-radius: 10px;
`;

export const DetailsContent = styled.div`
  display: grid;
  grid-template-rows: repeat (4, 1fr) auto;
  grid-gap: 12px;
`;

export const DetailsHeader = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin: 0;
`;

export const DetailsProductionYear = styled.span`
  font-size: 22px;
`;

export const DetailsProductionData = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 8px;
`;

export const DetailsProduction = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 12px;
  font-size: 18px;
  color: ${({ theme }) => theme.color.darkerGrey};
`;

export const DetailsProductionContent = styled.span`
  color: ${({ theme }) => theme.color.black};
`;

export const DetailsReleaseDate = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 12px;
  font-size: 18px;
  color: ${({ theme }) => theme.color.darkerGrey};
`;

export const DetailsReleaseDateContent = styled.span`
  color: ${({ theme }) => theme.color.black};
`;

export const DetailsGenres = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0;
`;

export const DetailsGenereItem = styled.ul`
  background: ${({ theme }) => theme.color.grey};
  font-size: 14px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  border-radius: 5px;
`;

export const DetailsOverview = styled.span`
  font-size: 20px;
  line-height: 32px;
`;
