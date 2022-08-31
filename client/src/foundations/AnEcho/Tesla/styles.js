import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const StyledTesla = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  display: flex;
  overflow: hidden;

  ${({ triggerAnimate }) => triggerAnimate && `animation: reveal-faster 20s linear forwards;`}
  @keyframes reveal-faster {
    0% {
      width: 0%;
    }
    75% {
      width: 50%;
    }
    100% {
      width: 100%;
    }
  }
`;

export const Column = styled.div`
  position: absolute;
  background: white;
`;
