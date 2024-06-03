import styled from "styled-components";
import { ReactComponent as PosterIcon } from "../../../../images/Profile.svg";
import { mediaQuery } from "../../../../core/App/theme";

export const CreditsContainer = styled.div`
  max-width: 1368px;
  margin: 0 auto;
`;

export const CreditsHeader = styled.h2`
  font-size: 36px;
  margin-top: 64px;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 20px;
    margin: 24px auto 12px 16px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    margin: 24px 16px;
  }
  @media (max-width: ${mediaQuery.breakpoints.tabletHorizontalMax}px) {
    margin: 24px;
  }
`;

export const CreditsWrapper = styled.div`
  max-width: 1368px;
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

  @media (max-width: ${mediaQuery.breakpoints.tabletHorizontalMax}px) {
    max-width: 1199px;
  }
`;

export const CreditsTile = styled.div`
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
  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    flex: 0 0 152px;
  }
`;

export const CreditsPhoto = styled.img`
  width: 100%;
  padding: 12px;
  border-radius: 20px;
  display: block;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    padding: 8px;
  }
`;
export const CreditsDefaultPoster = styled.div`
  padding: 12px;
  width: 176px;
  height: 264px;
  border-radius: 10px;
  margin: 12px;
  background: ${({ theme }) => theme.color.silver};

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    width: 136px;
    height: 203px;
    margin: 8px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    padding: 12px;
    max-width: 128px;
    max-height: 192px;
  }
`;

export const CreditsPosterIcon = styled(PosterIcon)`
  stroke: ${({ theme }) => theme.color.white};
  fill: none;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const CreditsContent = styled.div`
  display: grid;
  grid-gap: 8px 0;
  padding: 16px;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    padding: 8px;
  }
  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    padding: 12px;
  }
`;

export const CreditsName = styled.h3`
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

export const CreditsData = styled.span`
  text-align: center;
  font-size: 18px;
  color: ${({ theme }) => theme.color.darkerGrey};

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 13px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    font-size: 14px;
  }
`;
