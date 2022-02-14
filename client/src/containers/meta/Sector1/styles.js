import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const StyledSector1 = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  ${FlexCenterStyle};
  color: white;
`;

export const ScrollContainer = styled.div`
  position: absolute;
  font-size: 2.2rem;
  font-weight: 700;
  bottom: ${({ theme }) => theme.windowHeight * 0.1}px;
  text-shadow: 0 0 0.5rem white;

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: appear 2s backwards;
  animation-delay: 4s;
`;

export const Text = styled.div``;

export const IntroText = styled.div`
  bottom: ${({ theme }) => theme.windowHeight * 0.2}px;

  position: absolute;
  color: white;
  font-size: 1rem;
  width: 10rem;

  @keyframes appear {
    from {
      opacity: 0;
      filter: blur(3px);
    }
    to {
      opacity: 1;
      filter: blur(0);
    }
  }

  animation: appear 2s backwards;
  animation-delay: 2s;
`;
