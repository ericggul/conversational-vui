import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const StyledMeta = styled.div`
  width: ${({ theme }) => theme.windowWidth}px;
  ${FlexCenterStyle};
  overflow-x: hidden;
  overflow-y: scroll;
  flex-direction: column;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
`;

export const Sector = styled.div`
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  ${FlexCenterStyle};
`;
