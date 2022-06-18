import styled, { css } from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const WholeContainer = styled.div`
  ${FlexCenterStyle};

  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  background: rgb(${({ white }) => white}, ${({ white }) => white}, ${({ white }) => white});
  overflow: hidden;
  cursor: pointer;
  transition: background 0.2s;
`;

const DummyCommon = css`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Dummy1 = styled.div`
  ${DummyCommon};
`;

export const Dummy2 = styled.div`
  ${DummyCommon};
  animation: rotating 4s infinite linear alternate;

  @keyframes rotating {
    0% {
      transform: rotate(0);
    }
    90% {
      transform: rotate(273deg);
    }
  }
`;

export const Dummy3 = styled.div``;
