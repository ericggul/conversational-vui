import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const StyledReception = styled.div`
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  background: black;
  ${FlexCenterStyle};
  color: white;
`;

export const WeatherSection = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
`;

export const IconSection = styled.div`
  ${FlexCenterStyle};
  font-size: 15rem;
`;

export const InfoSection = styled.div`
  ${FlexCenterStyle};
`;

export const Temperature = styled.div`
  font-size: 7rem;
  span {
    font-size: 2.5rem;
  }
`;
