import styled from "styled-components";
import { mediaQuery } from "../../../../core/App/theme";
import { ReactComponent as PosterIcon } from "../../../../images/Profile.svg";

export const PopularPeopleHeaderWrapper = styled.div`
  max-width: 1368px;
  margin: 0 auto;
`;

export const PopularPeopleHeader = styled.h1`
  font-size: 36px;
  font-style: bold;

  @media (max-width: ${mediaQuery.breakpoints.tabletHorizontalMax}px) {
    font-size: 32px;
    margin: 24px 16px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    font-size: 28px;
    margin: 24px 16px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 20px;
    margin: 24px 16px;
  }
`;

export const PopularPeopleWrapper = styled.div`
  max-width: 1368px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 24px;
  justify-content: center;
`;

export const PopularPeopleTile = styled.div`
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.color.grey};
  display: flex;
  flex: 0 0 200px;
  flex-flow: column;
  align-items: center;

  @media (max-width: ${mediaQuery.breakpoints.tabletHorizontalMax}px) {
    flex: 0 0 178px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    flex: 0 0 178px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    flex: 0 0 120px;
  }
`;

export const PopularPeoplePhoto = styled.img`
  width: 100%;
  padding: 16px;
  border-radius: 20px;
  display: block;

  @media (max-width: ${mediaQuery.breakpoints.tabletHorizontalMax}px) {
    padding: 14px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    padding: 12px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    padding: 8px;
  }
`;

export const PopularPeopleDefaultPoster = styled.div`
  width: 168px;
  height: 252px;
  border-radius: 5px;
  margin: 16px;
  background: ${({ theme }) => theme.color.silver};

  @media (max-width: ${mediaQuery.breakpoints.tabletHorizontalMax}px) {
    width: 150px;
    height: 225px;
    padding: 0;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    width: 150px;
    height: 225px;
    padding: 0;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    width: 150px;
    height: 225px;
  }
`;

export const PopularPeoplePosterIcon = styled(PosterIcon)`
  width: 72px;
  stroke: ${({ theme }) => theme.color.white};
  fill: none;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const PopularPeopleName = styled.h2`
  font-size: 22px;
  font-weight: bold;
  padding: 0 16px 16px 16px;
  text-align: center;

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    font-size: 16px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 14px;
    padding: 8px;
  }
`;
