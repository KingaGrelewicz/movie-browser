import styled from "styled-components";

export const GenresList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
`;

export const GenresItem = styled.li`
  font-size: 14px;
  font-weight: 400;
  background-color: ${({ theme }) => theme.color.grey};
  border-radius: 5px;
  padding: 8px 16px 8px 16px;
  text-align: center;
  margin-right: 8px;
  margin-bottom: 8px;
  height: fit-content;
`;
