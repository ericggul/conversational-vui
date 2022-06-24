import styled from "styled-components";

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  max-height: ${({ theme }) => theme.windowHeight}px;
  background: ${({ length }) => (length < 7 ? "transparent" : "black")};
  z-index: -2;
`;
