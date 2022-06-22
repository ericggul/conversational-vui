import styled from "styled-components";

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  max-height: ${({ theme }) => theme.windowHeight}px;
`;
