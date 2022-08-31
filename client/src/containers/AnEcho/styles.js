import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const Whole = styled.div`
  ${FlexCenterStyle};
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;

  ${({ current }) => current !== "contents" && `overflow: hidden;`}
`;
