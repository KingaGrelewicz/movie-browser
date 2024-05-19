import styled from "styled-components";
import { mediaQuery } from "../../../../core/App/theme";

export const DetailsWrapper = styled.div`
  max-width: 1368px;
  margin: 64px auto;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 24px 40px;
  background: ${({ theme }) => theme.color.white};
  padding: 40px;
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.color.grey};

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    max-width: 767px;
    margin: 16px;
    grid-gap: 16px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    margin: 16px;
  }
`;

export const DetailsPoster = styled.img`
  border-radius: 10px;
  grid-row: span 2;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    width: 154px;
  }
  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    width: 185px;
  }
`;

export const DetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    gap: 12px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    gap: 16px;
  }
`;

export const DetailsHeader = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin: 0;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 16px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    font-size: 26px;
  }
`;

export const DetailsProductionYear = styled.span`
  font-size: 22px;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 14px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    font-size: 18px;
  }
`;

export const DetailsProductionData = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: auto 1fr;
  grid-gap: 8px;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 12px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const DetailsProduction = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.color.darkerGrey};

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 12px;
    display: none;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    font-size: 14px;
  }
`;

export const DetailsProductionContent = styled.span`
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 12px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    font-size: 14px;
  }
`;

export const DetailsReleaseDate = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.color.darkerGrey};

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 12px;
    display: none;
  }
  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    font-size: 14px;
  }
`;

export const DetailsReleaseDateContent = styled.span`
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 12px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    font-size: 14px;
  }
`;

export const DetailsGenres = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0;
  margin: 0;
`;

export const DetailsGenereItem = styled.ul`
  background: ${({ theme }) => theme.color.grey};
  font-size: 14px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  border-radius: 5px;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 10px;
  }
  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    font-size: 12px;
  }
`;

export const DetailsOverview = styled.span`
  font-size: 20px;
  display: grid;
  grid-column-start: 2;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 14px;
    display: grid;
    grid-column-start: 1;
    grid-column: span 2;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    font-size: 16px;
    display: grid;
    grid-column-start: 1;
    grid-column: span 2;
  }
`;
