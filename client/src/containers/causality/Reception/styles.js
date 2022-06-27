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
  height: 18rem;
  font-size: 15rem;
  svg {
    filter: drop-shadow(0.7rem 2rem 0.7rem rgba(255, 255, 255, 0.8));
  }
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
  height: 18rem;
  ${FlexCenterStyle};

  svg {
    filter: none;
  }
`;
