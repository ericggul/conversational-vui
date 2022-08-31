import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const StyledTesla = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 0%;
  height: 100%;
  display: flex;
  overflow: hidden;

  ${({ triggerAnimate }) => triggerAnimate && `animation: reveal-faster 5s linear forwards;`}
  @keyframes reveal-faster {
    0% {
      width: 0%;
    }
    100% {
      width: 50%;
    }
  }
`;

export const Column = styled.div`
  position: absolute;
  background: white;
`;
