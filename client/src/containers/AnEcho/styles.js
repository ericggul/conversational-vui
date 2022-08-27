import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

//fixed size: 2000 X 1400

export const StyledAnEcho = styled.div`
  ${FlexCenterStyle};
  position: relative;
  color: white;
  width: 2000px;
  height: 1400px;
  background: linear-gradient(74deg, #992c1a, #f14630);
  font-family: Volkswagen;
  font-weight: bold;
`;

//axises
export const XAxis = styled.div`
  width: 100%;
  height: 3px;
  background: white;
  position: absolute;
  bottom: 100px;
`;

export const YAxis = styled.div`
  height: 100%;
  width: 3px;
  background: white;
  position: absolute;
  left: 100px;
`;

//word level
export const WordLevel = styled.div`
  position: absolute;
  transform: rotate(-90deg);
  width: ${({ theme }) => theme.windowHeight}px;
  height: ${({ theme }) => theme.windowWidth}px;
  z-index: 1;
`;

export const Word = styled.div`
  ${FlexCenterStyle};
  position: absolute;
  width: 100%;

  font-size: 100px;
`;
