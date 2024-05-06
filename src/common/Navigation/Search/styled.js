import styled from "styled-components";
import { mediaQuery } from "../../../core/App/theme";

export const Wrapper = styled.div`
  display: flex;
  max-width: 450px;
  flex-basis: 100%;

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    justify-content: center;
  }
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 33px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${({ theme }) => theme.color.darkerGrey};
  padding: 12px 24px;
  flex-basis: 100%;

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    margin: 0px 20px;
  }
`;
