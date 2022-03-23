import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const ElementContainer = styled.div`
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  ${FlexCenterStyle};
  background: black;
`;
