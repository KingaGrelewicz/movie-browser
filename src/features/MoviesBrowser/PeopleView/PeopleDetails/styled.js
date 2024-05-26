import styled from "styled-components";
import { mediaQuery } from "../../../../core/App/theme";

export const PeopleDetailsWrapper = styled.div`
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

export const PeopleDetailsPhoto = styled.img`
  border-radius: 10px;
  grid-row: span 2;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    width: 154px;
  }
  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    width: 185px;
  }
`;

export const PeopleDetailsContent = styled.div`
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

export const PeopleDetailsHeader = styled.h2`
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

export const PeopleDetailsData = styled.div`
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

export const PeopleDetailsBirthDate = styled.span`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 12px;
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

export const PeopleDetailsBirthDateContent = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 12px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    font-size: 14px;
  }
`;

export const PeopleDetailsBirthPlace = styled.span`
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

export const PeopleDetailsBirthPlaceContent = styled.span`
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 12px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    font-size: 14px;
  }
`;

export const PeopleDetailsBiography = styled.p`
  font-size: 20px;
  display: grid;
  grid-column-start: 2;
  margin: 0;

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
