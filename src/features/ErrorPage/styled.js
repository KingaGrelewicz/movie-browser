import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ErrorNavLink = styled(NavLink)`
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  font-size: 14px;
  font-weight: 700;
  padding: 16px 24px;
  border-radius: 5px;
  border: none;
  margin: 12px;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.color.lightBlue};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 180px;
`;

export const Text = styled.div`
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  margin: 12px;
`;

export const Info = styled.div`
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  margin: 12px;
`;
