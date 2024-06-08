import styled from "styled-components";
import { ReactComponent as NoResultImage } from "./image/no-result.svg";
import { mediaQuery } from "../../core/App/theme";

export const NoResultWrapper = styled.div`
  max-width: 1368px;
  margin: 56px auto;
`;

export const NoResultHeader = styled.h2`
  font-size: 36px;
  margin: 0 16px;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 28px;
  }
`;

export const NoResultImg = styled(NoResultImage)`
  display: flex;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    max-width: 400px;
  }
`;
