import styled from "styled-components";

import { FlexCenterStyle } from "@S/responsive/display";

export const StyledIntro = styled.div`
  background: #61c9b8;
  position: absolute;
  top: 0;
  left: 0;
  font-family: Neutraface;
  font-weight: bold;

  ${FlexCenterStyle};
  flex-direction: column;
  overflow: hidden;
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  z-index: 10;
`;

export const TextSection = styled.div`
  ${FlexCenterStyle};
  width: 100%;
  margin: 1vw 0;
  transition: all 0.4s ease-in-out;
`;

export const Text = styled.span`
  font-size: 3.5vw;
  margin-right: 1vw;

  transition: all 0.3s ease-in-out;

  @keyframes text-show {
    from {
      opacity: 0;
      transform: translateY(10px) rotate(-10deg);
    }
    to {
      opacity: 1;
      transform: translateY(0) rotate(0deg);
    }
  }

  animation: text-show 0.07s both;

  ${({ delay }) => `animation-delay: ${delay}s;`}
`;

export const Loading = styled.div`
  position: absolute;
  top: 30vw;
  left: 20vh;
  font-size: 5vw;
  color: white;
  ${FlexCenterStyle};
  flex-direction: column;

  @keyframes loading-appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  opacity: 0;
  animation: loading-appear 0.07s both;
`;

export const LoadingText = styled.div`
  font-size: 2vw;
  margin: 0.7vw 0;
`;

export const CircleLoading = styled.div`
  position: absolute;
  opacity: 0;
  animation: loading-appear 0.07s both;
`;

export const CircularProgress = styled.div`
  position: absolute;
  opacity: 0;
  animation: loading-appear 0.07s both;
`;
