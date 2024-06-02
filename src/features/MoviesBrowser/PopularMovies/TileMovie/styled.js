import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Image = styled.img`
  width: 292px;
  height: 434px;
  border: 5px;
  margin: 16px;
`;
export const Description = styled.div`
  margin: 0px 16px 16px 16px;
`;

export const DescriptionTitle = styled.h2`
  font-weight: 500;
  font-size: 22px;
  margin-bottom: 8px;
  margin-top: 0px;
`;

export const Date = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.darkerGrey};
  margin-bottom: 8px;
`;

export const Container = styled.section`
  width: 324px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px 0px #bac7d580;
  display: grid;
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: black;
`;
