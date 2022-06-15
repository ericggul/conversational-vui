import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const StyledCalendar = styled.div`
  width: 100vw;
  height: ${({ theme }) => theme.windowHeight}px;
  ${FlexCenterStyle};
  font-family: Times New Roman;
`;
