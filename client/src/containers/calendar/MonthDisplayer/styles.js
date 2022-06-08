import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const StyledMonthDisplayer = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
`;

export const CalendarRow = styled.div`
  ${FlexCenterStyle};
`;

export const CalendarDay = styled.div`
  width: 3rem;
  text-align: center;
`;
