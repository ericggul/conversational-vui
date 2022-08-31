import styled, { css } from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

//text level
export const TextLevel = styled.div`
  position: absolute;

  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const TextCommon = css`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

export const NumberRows = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

export const NumberRowA = styled.div`
  ${TextCommon};
  font-size: 13px;
  font-family: Courier New;
`;

export const NumberRowB = styled.div`
  ${TextCommon};
  font-size: 15px;
  font-family: Courier New;
`;

export const NumberRowC = styled.div`
  ${TextCommon};
  font-size: 20px;
  font-family: Courier New;
`;

export const TextRow = styled.div`
  position: absolute;
  display: flex;
  ${TextCommon};
`;

export const SingleText = styled.div``;

export const Square = styled.div`
  width: 12px;
  height: 12px;
  border: 3px solid white;
`;

export const Circle = styled.div`
  width: 12px;
  height: 12px;
  border: 3px solid white;
  border-radius: 50%;
`;

export const Diamond = styled.div`
  width: 12px;
  height: 12px;
  border: 3px solid white;
  transform: rotate(45deg);
`;

export const SquareFilled = styled.div`
  width: 9px;
  height: 9px;
  background: white;
`;

export const CircleFilled = styled.div`
  width: 9px;
  height: 9px;
  background: white;
  border-radius: 50%;
`;

export const DiamondFilled = styled.div`
  width: 9px;
  height: 9px;
  background: white;
  transform: rotate(45deg);
`;

export const Headline = styled.div`
  ${TextCommon};
  position: absolute;
  font-family: Times New Roman;
  font-size: 25px;
  color: white;
`;
