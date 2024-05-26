import styled from "styled-components";
import { ReactComponent as PosterIcon } from "../../../../images/Profile.svg";
import { mediaQuery } from "../../../../core/App/theme";

export const PeopleCreditsHeader = styled.h2`
  font-size: 36px;
  margin-top: 64px;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 20px;
    margin-left: 16px;
    margin-top: 24px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    margin: 24px 16px;
  }
`;

export const PeopleCreditsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    margin: 0 8px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    margin: 16px;
  }
`;

export const PeopleCreditsTile = styled.div`
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.color.grey};
  display: flex;
  flex: 0 0 200px;
  margin: 10px;
  flex-flow: column;
  align-items: center;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    flex: 0 0 120px;
  }
`;

export const PeopleCreditsPoster = styled.img`
  width: 100%;
  padding: 12px;
  border-radius: 20px;
  display: block;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    padding: 8px;
  }
`;
export const PeopleCreditsDefaultPoster = styled.div`
  padding: 12px;
  width: 176px;
  height: 264px;
  border-radius: 20px;
  margin: 12px;
  background: ${({ theme }) => theme.color.silver};

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    width: 176px;
    height: 264px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    padding: 12px;
    max-height: 278px;
    padding: 0;
  }
`;

export const PeopleCreditsPosterIcon = styled(PosterIcon)`
  stroke: ${({ theme }) => theme.color.white};
  fill: none;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const PeopleCreditsContent = styled.div`
  display: grid;
  grid-gap: 8px 0;
  padding: 16px;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    padding: 8px;
  }
`;

export const PeopleCreditsMovieTitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin: 0;
  text-align: center;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 14px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    font-size: 16px;
  }
`;

export const PeopleCreditsData = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.color.darkerGrey};

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 13px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    font-size: 14px;
  }
`;

export const PeopleCreditsProductionYear = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.color.darkerGrey};

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 13px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    font-size: 14px;
  }`;
