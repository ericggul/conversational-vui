import styled from "styled-components";

export const StyledMainBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
`;
