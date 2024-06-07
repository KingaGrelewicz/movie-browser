import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { mediaQuery } from "../../../../core/App/theme";

export const Image = styled.img`
  width: 292px;
  height: 434px;
  border: 5px;
  margin: 16px;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    width: 140px;
    height: 200px;
  }
`;
export const Description = styled.div`
  margin: 0px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    margin: 16px 16px 0px 0px;
    justify-content: flex-start;
  }
`;

export const DetailElements = styled.div`
  display: flex;
`;

export const DescriptionTitle = styled.h2`
  font-weight: 500;
  font-size: 22px;
  margin-bottom: 8px;
  margin-top: 0px;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const Date = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.darkerGrey};
  margin-bottom: 8px;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 13px;
    font-weight: 400;
  }
`;

export const Container = styled.section`
  width: 324px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.color.grey};
  display: grid;
  grid-template-rows: auto 1fr;
  transition: 1s;

  &:hover {
    scale: 1.05;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    grid-template-areas: "image description";
    grid-template-columns: auto 1fr;
    max-width: 475px;
    width: 90%;
    margin: 0px 20px 0px 20px;
  }
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: black;
`;
