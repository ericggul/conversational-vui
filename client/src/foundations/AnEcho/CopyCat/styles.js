import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const StyledCopyCat = styled.div`
  position: absolute;
  top: 715px;
  left: 435px;

  transform: translate(-50%, -50%);
  ${FlexCenterStyle};
  flex-direction: column;

  opacity: 0;

  ${({ triggerAnimate }) => triggerAnimate && `animation: cat-appear 1s linear both;`}

  @keyframes cat-appear {
    0% {
      opacity: 0;
      transform: scale(0) translate(-50%, -50%);
    }
    50% {
      transform: scale(1) translate(-50%, -50%);
    }
    100% {
      opacity: 1;
      transform: scale(1) translate(-50%, -50%);
    }
  }
  animation-delay: 10s;
`;

export const CatImage = styled.div`
  width: 150px;
  img {
    width: 100%;
    height: auto;
  }
`;

export const Text = styled.div`
  font-size: 22px;
  font-family: Cinzel;
  font-weight: 600;
  width: 300px;
  text-align: center;
`;
