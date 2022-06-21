import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const StyledDeliveryUI = styled.div`
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  background: black;
  ${FlexCenterStyle};
`;

export const InnerContainer = styled.div`
  width: ${({ theme }) => Math.min(theme.windowWidth, theme.windowHeight * 0.6)}px;
  height: ${({ theme }) => theme.windowHeight}px;
  position: fixed;
  background: white;
`;
