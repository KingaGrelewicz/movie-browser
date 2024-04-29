import styled from "styled-components";

export const BackdropHeader = styled.header`
  background: ${({ theme }) => theme.color.black};
`;

export const BackdropImg = styled.img`
  position: relative;
  display: block;
  margin: 0 auto;
`;

export const BackdropWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const BackdropTitle = styled.h2`
  color: ${({ theme }) => theme.color.white};
  max-width: 1280px;
  margin: 0 auto;
`;
