import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const StyledReception = styled.div`
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  background: black;
  ${FlexCenterStyle};
  flex-direction: column;
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

export const NewsSection = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 1rem;
`;

export const Earth = styled.div`
  position: relative;
  color: red;

  div {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 10rem;
    z-index: 2;

    transform: translate(4rem, -4rem) rotate(35deg);
    color: red;
  }
`;
