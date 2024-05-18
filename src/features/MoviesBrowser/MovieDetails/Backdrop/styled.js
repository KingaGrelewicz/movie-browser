import styled from "styled-components";
import { mediaQuery } from "../../../../core/App/theme";

export const BackdropHeader = styled.header`
  background: ${({ theme }) => theme.color.black};
`;

export const BackdropContainer = styled.div`
  max-width: 1368px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
  }
`;

export const BackdropImg = styled.img`
  display: block;
  margin: 0 auto;
  width: calc(100% + 20px);
  border-radius: 10px;
  box-shadow: 200px 10px 100px rgba(0, 0, 0, 0.8),
    -200px 10px 100px rgba(0, 0, 0, 0.8), 200px -10px 100px rgba(0, 0, 0, 0.8),
    -200px -10px 100px rgba(0, 0, 0, 0.8);

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    max-width: 300px;
  }
  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    max-width: 780px;
  }
`;

export const BackdropWrapper = styled.div`
  padding: 56px 0;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    padding: 8px 16px;
    gap: 4px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    padding: 8px 16px;
    gap: 8px;
  }
`;

export const BackdropTitle = styled.h2`
  color: ${({ theme }) => theme.color.white};
  font-size: 64px;
  font-weight: bold;
  margin: 0;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 24px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    font-size: 48px;
  }
`;
