import styled, { css } from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

//text level
export const TextLevel = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;
  z-index: 0;
`;

const TextCommon = css`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

export const NumberRows = styled.div`
  position: absolute;
  top: 0;
  width: 0%;

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
