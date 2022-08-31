import styled, { css } from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

//fixed size: 2000 X 1400

export const StyledAnEcho = styled.div`
  ${FlexCenterStyle};
  position: relative;
  color: white;
  width: 2000px;
  height: 1400px;
  background: linear-gradient(75deg, #992c1a, #f14630);
  font-family: Volkswagen;
  font-weight: bold;
  overflow: hidden;
  cursor: pointer;
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

//text level
export const TextLevel = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;
  z-index: 0;
`;

const TextCommon = css`
  position: absolute;
  width: 0;
  overflow: hidden;
  white-space: nowrap;
`;

export const NumberRow = styled.div`
  ${TextCommon};
  top: 100px;
  font-size: 10px;
  font-family: Courier New;
`;

//shape level

export const ShapeLevel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ clicked }) => clicked * (100 / 60)}%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;

export const OverLevel = styled.div`
  z-index: 5;
`;
