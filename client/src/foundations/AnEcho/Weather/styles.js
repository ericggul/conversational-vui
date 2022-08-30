import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";
export const StyledWeather = styled.div`
  position: absolute;
  top: 300px;
  left: 50px;
  ${FlexCenterStyle};
  flex-direction: column;
`;

export const SingleWeather = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  margin: 10px 0;
`;

export const Header = styled.div`
  font-size: 20px;
`;

export const IconSection = styled.div`
  ${FlexCenterStyle};
  height: 124px;
  font-size: 120px;
  svg {
    filter: drop-shadow(0.35rem 1rem 0.35rem rgba(255, 255, 255, 0.8));
  }
`;

export const InfoSection = styled.div`
  ${FlexCenterStyle};
`;

export const Temperature = styled.div`
  font-size: 56px;
  span {
    font-size: 20px;
  }
`;
