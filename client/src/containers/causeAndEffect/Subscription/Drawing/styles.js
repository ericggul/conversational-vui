import styled from "styled-components";

export const StyledDrawing = styled.div`
  div {
    position: absolute;
    width: ${({ theme }) => theme.windowWidth}px;
    height: ${({ theme }) => theme.windowHeight}px;
  }
`;
