import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const BabyZone = styled.div`
  position: absolute;
  top: 540px;
  left: 1565px;
  ${FlexCenterStyle};

  transform: translate(-50%, -50%);
`;

export const Baby = styled.div`
  ${FlexCenterStyle};
  width: 130px;
  height: 130px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  opacity: 0;
  ${({ triggerAnimate }) => triggerAnimate && `animation: baby-appear 5s both;`}
  animation-delay: 1s;
  @keyframes baby-appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const SurroundingFace = styled.div`
  position: absolute;

  img {
    width: 100px;
    height: auto;
    -webkit-filter: grayscale(100%) brightness(350%) blur(1px);
    filter: grayscale(100%) brightness(350%) blur(1px);
  }

  opacity: 0;

  ${({ triggerAnimate }) => triggerAnimate && `animation: appear 1s both;`}
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
