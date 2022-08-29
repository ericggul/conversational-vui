import styled, { css } from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

//text level
export const TextLevel = styled.div`
  position: absolute;

  left: 0;
  width: 0;
  height: 100%;
  z-index: 0;

  ${({ triggerAnimate }) => triggerAnimate && `animation: reveal 12s linear forwards;`}
  @keyframes reveal {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
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
  ${TextCommon};
  top: 1100px;
  font-size: 20px;
`;

export const LiberalTextRow = styled.div`
  font-family: Times New Roman;
  position: absolute;
  ${TextCommon};
  top: 1150px;
  height: 300px;
  font-size: 17px;
  display: flex;
`;

export const SingleText = styled.div`
  ${({ height }) => `transform: translateY(${height}px);`}
`;
