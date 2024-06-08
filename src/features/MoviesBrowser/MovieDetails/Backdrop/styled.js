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
`;

export const BackdropVignette = styled.div`
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 100px 10px 100px ${({ theme }) => theme.color.black},
      inset -100px 10px 100px ${({ theme }) => theme.color.black},
      inset 100px -10px 100px ${({ theme }) => theme.color.black},
      inset -100px -10px 100px ${({ theme }) => theme.color.black};

      @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
        box-shadow: inset 50px 10px 50px ${({ theme }) => theme.color.black},
      inset -50px 10px 50px ${({ theme }) => theme.color.black},
      inset 50px -10px 50px ${({ theme }) => theme.color.black},
      inset -50px -10px 50px ${({ theme }) => theme.color.black};
      }
  }
`;

export const BackdropImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  min-width: 300px;
`;

export const BackdropWrapper = styled.div`
  padding: 56px 0;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    padding: 8px 16px;
    gap: 8px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    padding: 8px 16px;
    gap: 4px;
  }
`;

export const BackdropTitle = styled.h2`
  color: ${({ theme }) => theme.color.white};
  font-size: 64px;
  font-weight: bold;
  margin: 0;

  @media (max-width: ${mediaQuery.breakpoints.tabletHorizontalMax}px) {
    font-size: 56px;
    margin-left: 24px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    font-size: 48px;
    margin: 16px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 24px;
  }
`;
